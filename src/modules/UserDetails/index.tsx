import { CalendarOutlined, CameraOutlined, EditOutlined, EnvironmentOutlined, UploadOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Button, Form, Upload, Card, Tooltip, Tag,Image, Spin } from "antd";
import { useAppSelector } from "../../store/hook";
import { Controller, useForm } from "react-hook-form";
import { useUploadFile } from "../../apis/CallApiUser/user";
import Table from "antd/es/table";
import { useGetJobHired } from "../../apis/CallApiJobHired/jobhire";

export default function UserDetails() {
  const [form] = Form.useForm();
  const {data: getJobhired,isLoading,isError}=useGetJobHired()
  const {user} = useAppSelector(state=>state.currentUser)
  const dataSource=getJobhired?.data || []
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {avatar: undefined,}
  })
  const columns= [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Ngày Thuê',
      dataIndex: 'ngayThue',
      key: 'ngayThue',
      render: (text: string) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Hoàn Thành',
      dataIndex: 'hoanThanh',
      key: 'hoanThanh',
      render: (text: boolean) => (text ? <Tag color="green">Finish</Tag> : <Tag color="red">Not Yet</Tag>),
    },
    {
      title: 'ID Công Việc',
      dataIndex: ['congViec', 'id'],
      key: 'congViecId',
    },
    {
      title: 'Tên Công Việc',
      dataIndex: ['congViec', 'tenCongViec'],
      key: 'tenCongViec',
      render: (text:any) => (
        <Tooltip title={text}>
          <span>{text.length > 3 ? `${text.substring(0, 3)}...` : text}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Đánh Giá',
      dataIndex: ['congViec', 'danhGia'],
      key: 'danhGia',
    },
    {
      title: 'Giá Tiền',
      dataIndex: ['congViec', 'giaTien'],
      key: 'giaTien',
    },
    {
      title: 'Người Tạo',
      dataIndex: ['congViec', 'nguoiTao'],
      key: 'nguoiTao',
    },
    {
      title: 'Hình Ảnh',
      dataIndex: ['congViec', 'hinhAnh'],
      key: 'hinhAnh',
      render: (text: string) => <Image width={50} height={50} src={text} />,
    },
    {
      title: 'Mô Tả',
      dataIndex: ['congViec', 'moTa'],
      key: 'moTa',
      render: (text:any) => (
        <Tooltip title={text}>
          <span>{text.length > 3 ? `${text.substring(0, 3)}...` : text}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Mã Chi Tiết Loại Công Việc',
      dataIndex: ['congViec', 'maChiTietLoaiCongViec'],
      key: 'maChiTietLoaiCongViec',
    },
    {
      title: 'Mô Tả Ngắn',
      dataIndex: ['congViec', 'moTaNgan'],
      key: 'moTaNgan',
      render: (text:any) => (
        <Tooltip title={text}>
          <span>{text.length > 3 ? `${text.substring(0, 3)}...` : text}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Sao Công Việc',
      dataIndex: ['congViec', 'saoCongViec'],
      key: 'saoCongViec',
      render: (_:any, record:any) => (
        <>
          {Array.from({ length: record.congViec.saoCongViec }, (_, index) => (
            <span key={index} style={{ color: "#ffcc00", fontSize: "16px" }}>
              ★
            </span>
          ))}
        </>
      ),
    },
  ];
  

  const hinhAnhValue = watch("avatar");
  const {mutateAsync:handleUpload}=useUploadFile()
  const previewImage = (file: File) => {
    return URL.createObjectURL(file);
  };
  const onSubmit=(values:any)=>{
    console.log(values.avatar)
    const formData = new FormData();
    formData.append("formFile", values.avatar);
    handleUpload(formData);
  }
 
 
  const memberSince = new Date().toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric' });
  console.log(memberSince)
  if(isLoading||isError) return <Spin/>
  return (
    <div className="min-h-screen items-center justify-around pt-24 bg-lime-800 overflow-hidden pb-0">
      <Row gutter={10} justify='space-between' className=" items-center mt-5">
        <Col span={24} className="container flex flex-col">
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
                            className="profile-avatar"
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
                <button type="submit" className="btn btn-success ">Change Avatar</button>
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
              <Button className="profile-button">Preview Fiverr Profile</Button>
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
        <Col span={24}>
        
        <Table scroll={{x:500}} className="mt-3" columns={columns} dataSource={getJobhired} />

        
        </Col>
      </Row>
    </div>
  );
}