import { CalendarOutlined, CameraOutlined, EditOutlined, EnvironmentOutlined, UploadOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Button, Form, Upload, Card, Tooltip, Tag,Image, Popconfirm, message, Modal, Input, Select, Switch } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Controller, useForm } from "react-hook-form";
import { useGetUserById, useUpdateUser, useUploadFile } from "../../apis/CallApiUser/user";
import Table from "antd/es/table";
import { useDeleteJobHired, useGetJobHired, useUpdateJobHired } from "../../apis/CallApiJobHired/jobhire";
import { setCurrenUser } from "../../store/Slice/counterSlice";
import { IconButton, Iconify } from "../../icon";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function UserDetails() {
  const [form] = Form.useForm();
  const {data: getJobhired}=useGetJobHired()
  const {user} = useAppSelector(state=>state.currentUser);
  const {mutateAsync:updateStatusJobHired}=useUpdateJobHired();
  const {mutateAsync:DeleteJobHired}=useDeleteJobHired();
  const {data:userbyid}=useGetUserById(user?.id);
  
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {avatar: user?.avatar,}
  })
  const columns= [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      
    },
    
    {
      title: 'Hình Ảnh',
      dataIndex: ['congViec', 'hinhAnh'],
      key: 'hinhAnh',
      render: (text: string) => <Image width={50} height={50} src={text} />,
    },
   
    {
      title: 'Tên',
      dataIndex: ['congViec', 'tenCongViec'],
      key: 'tenCongViec',
      render: (text:any) => (
        <Tooltip title={text}>
          <span>{text.length > 20 ? `${text.substring(0, 20)}...` : text}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Ngày Thuê',
      dataIndex: 'ngayThue',
      key: 'ngayThue',
      render: (text: string) => new Date(text).toLocaleDateString(),
    },
   
    {
      title: 'Giá Tiền',
      dataIndex: ['congViec', 'giaTien'],
      key: 'giaTien',
      render: (giaTien: number) => {
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });
        return <Tag color="green-inverse" className="font-bold text-center">{formatter.format(giaTien)}</Tag>;
      },
    },
    {
      title: 'Hoàn Thành',
      dataIndex: 'hoanThanh',
      key: 'hoanThanh',
      render: (text: boolean) => (text ? <Tag color="green">Finish</Tag> : <Tag color="red">Not Yet</Tag>),
    },
    
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text: string,record:any) => (
        <div className="text-gray flex w-full items-center justify-center">
          <IconButton  >
            <Iconify   icon="solar:pen-bold-duotone" onClick={()=>{if(record.hoanThanh){
              return message.warning("Your Job is already finished") 
              
            }
            return updateStatusJobHired(record.id)
            }} size={18} />
          </IconButton>
          <Popconfirm
            title="Delete This Type?"
            okText="Yes"
            cancelText="No"
            placement="left"
            onConfirm={() => {
              DeleteJobHired(record.id)
              // submitHandleDelete(record.id.toString());
            }}
          >
            <IconButton>
              <Iconify
                icon="mingcute:delete-2-fill"
                size={18}
                className="text-error"
              />
            </IconButton>
          </Popconfirm>
          
        </div>
      
      ),

    },
  ];
  const dispatch = useAppDispatch();
  const onSuccessCallback = (data: any) => {
    dispatch(setCurrenUser({ avatar: data.avatar }));
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      user.avatar = data.avatar; // Assume response contains the new avatar URL
      localStorage.setItem('user', JSON.stringify(user));
    }
  };
  const hinhAnhValue = watch("avatar");
  
  const {mutateAsync:handleUpload}=useUploadFile(onSuccessCallback)
  const previewImage = (file: File) => {
    return URL.createObjectURL(file);
  };
  
  const onSubmit=async (values:any)=>{
    console.log(values.avatar)
    const formData = new FormData();
    formData.append("formFile", values.avatar);
    await handleUpload(formData);
  }
  const [userform] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [userModal,setUsermodal]=useState(false);
  const {mutate: updateUser}=useUpdateUser(1,()=>setUsermodal(false))
 
  useEffect(() => {
    if (userbyid) {
      const updatedData = {
        id: userbyid?.id,
        name: userbyid?.name,
        email: userbyid?.email,
        password: userbyid?.password,
        phone: userbyid?.phone,
        birthday: dayjs(userbyid?.birthday).format('DD/MM/YYYY'),
        avatar: userbyid?.avatar || undefined,
        gender: userbyid?.gender,
        role: "USER",
        skill: ["string"],
        certification: ["string"],
        bookingJob: ["string"],
      };
      setFormData(updatedData);
      userform.setFieldsValue(updatedData);
    }
  }, [userbyid, userform]);
 
  
  const handleSave = () => {
    userform.validateFields().then(async (values:any) => {
      // Gọi API để cập nhật dữ liệu người dùng ở đây
      try {
        const updatedData = {
          ...values,
          birthday: dayjs(values.birthday, 'DD/MM/YYYY').toISOString(), // Chuyển đổi ngày sinh về định dạng ISO
          role:'USER'
        };
        // Gọi API để cập nhật dữ liệu người dùng
        await updateUser({ user: updatedData, values: userbyid.id });
        setFormData(updatedData);
        setIsEditing(false);
        message.success('User information updated successfully!');
      } catch (error) {
        message.error('Failed to update user information.');
      }
    }).catch((info) => {
      console.log('Validate Failed:', info);
    });
  };
 
  const memberSince = new Date().toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <div className="min-h-screen items-center pt-24 bg-lime-800 overflow-hidden pb-0">
      <Row
        gutter={0}
        justify="space-between"
        className="container items-center mt-5"
      >
        <Col span={4} className="container flex flex-col">
          <Card className="profile-card" bordered={false}>
            <div className="profile-header">
              <Form form={form} onFinish={handleSubmit(onSubmit)}>
                <Controller
                  name="avatar"
                  control={control}
                  render={({ field: { onChange, ...filed } }) => {
                    return (
                      <Upload
                        beforeUpload={() => {
                          return false;
                        }}
                        {...filed}
                        showUploadList={false}
                        multiple={false}
                        onChange={({ file }) => onChange(file)}
                      >
                        <div className="avatar-container">
                          <Avatar
                            size={200}
                            src={
                              (hinhAnhValue &&
                                (typeof hinhAnhValue === "string"
                                  ? hinhAnhValue
                                  : previewImage(hinhAnhValue))) ||
                              user?.avatar
                            }
                          >
                            <CameraOutlined
                              className="camera-icon"
                              style={{ fontSize: "50px" }}
                            />
                          </Avatar>
                          <Button
                            className="mt-5 camera-icon"
                            style={{
                              fontSize: "15px",
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }}
                            icon={<UploadOutlined />}
                          >
                            Upload hình
                          </Button>
                          <div className="avatar-overlay"></div>
                        </div>
                      </Upload>
                    );
                  }}
                />
                <button type="submit" className="btn btn-success ">
                  Change Avatar
                </button>
              </Form>
              <div className="profile-status">
                <span className="status-indicator"></span>Online
              </div>
            </div>
            <div className="profile-info text-center">
              <h2 className="profile-name pl-5 ">
                {user?.name}
                <span className="new-badge">NEW</span>
              </h2>
              <h3 className="profile-username">{user?.email}</h3>
              <EditOutlined className="edit-icon" />
              <Button
                onClick={() => setUsermodal(true)}
                className="profile-button"
              >
                Preview Fiverr Profile
              </Button>
            </div>
            <Row className="profile-details">
              <Col span={24}>
                <EnvironmentOutlined className="profile-icon" /> From{" "}
                <span className="profile-detail">Vietnam</span>
              </Col>
              <Col span={24}>
                <CalendarOutlined className="profile-icon" /> Member since{" "}
                <span className="profile-detail">{memberSince}</span>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={14}>
          <Card title="Your Job">
            <Table
              rowKey="id"
              pagination={{ pageSize: 3 }}
              bordered
              scroll={{ y: 500 }}
              size="large"
              columns={columns}
              dataSource={getJobhired}
            />
          </Card>
        </Col>
      </Row>
      <Modal
        title="Basic Modal"
        open={userModal}
        footer={false}
        onCancel={() => setUsermodal(false)}
      >
        <Form
          form={userform}
          onFinish={handleSubmit(handleSave)}
          layout="vertical"
          initialValues={formData}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input disabled={!isEditing} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input disabled={!isEditing} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <Input disabled={!isEditing} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="birthday"
                label="Birthday"
                rules={[
                  { required: true, message: "Please input your birthday!" },
                  {
                    pattern:
                      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/,
                    message: "Please enter DD/MM/YYYY format!",
                  },
                ]}
              >
                <Input disabled={!isEditing} placeholder="DD/MM/YYYY" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="gender" label="Gender" valuePropName="checked">
                <Switch
                  disabled={!isEditing}
                  checkedChildren="Male"
                  unCheckedChildren="Female"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12} justify="space-between">
            <Col span={24}>
                <Button
                  className="mr-3"
                  type="primary"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </Button>
              
              <Button danger type="primary" htmlType="submit">
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}