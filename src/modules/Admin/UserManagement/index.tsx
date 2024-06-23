import { TableProps, Tag, Table, Pagination, Button, Col, Form, Input, Row, Popconfirm, Breadcrumb, Modal, DatePicker, Radio, Select } from "antd";
import { Role, User } from "../../../types/user";
import { useAddUserForm, useDeleteUser, useGetListUser, useUpdateUser } from "../../../apis/CallApiUser/user";
import { useState } from "react";
import { PAGE_SIZE } from "../../../constants";
import { IconButton, Iconify } from "../../../icon";
import { Controller, useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import dayjs from "dayjs";

export default function UserManagement() {
  
  const hinhAnh='https://t4.ftcdn.net/jpg/01/24/65/69/360_F_124656969_x3y8YVzvrqFZyv3YLWNo6PJaC88SYxqM.jpg'
  const { handleSubmit, control, setValue, reset } = useForm<User>({
    defaultValues: {
      id:0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      avatar: undefined,
      gender: true,
      role: Role.Admin,
      skill: ["none"],
      certification: ['none'],
    },
  });
 
  const columns: TableProps<User>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      align: "center",
      render: (key: string) => (
        <div className="flex justify-center">
          <img
            className="w-[80px] h-[80px] rounded object-cover"
            src={key === "" ? hinhAnh : key}
            alt="avatar"
          />
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
      align: "center",
      render: (_, { gender }) => {
        let color = "green"; // Default color

        // Apply custom logic to set color based on role
        if (gender === true) {
          color = "blue";
        } else if (gender === false) {
          color = "pink";
        }
        return (
          <>
            <Tag color={color}>
              {gender ? (
                <FontAwesomeIcon size="2xl" icon={faMars} />
              ) : (
                <FontAwesomeIcon size="2xl" icon={faVenus} />
              )}
            </Tag>
          </>
        );
      },
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      align: "center",
      render: (_, { role }) => {
        let color = "green"; // Default color

        // Apply custom logic to set color based on role
        if (role === "ADMIN") {
          color = "red";
        } else if (role === "USER") {
          color = "blue";
        }
        return (
          <>
            <Tag color={color}>{role.toUpperCase()}</Tag>
          </>
        );
      },
    },

    {
      title: "Action",
      key: "action",
      align: "center",

      render: (_, { id,name,email,password,birthday,role,phone,gender,skill,certification }) => (
        <div className="text-gray flex w-full items-center justify-center">
          <IconButton
            onClick={() => {
              setisupdate(true);
              setIsOpenModal(true);
              setValue("id", id);
              setValue("name", name);
              setValue("email", email);
              setValue("password", password);
              setValue("birthday", birthday ? dayjs(birthday).format("DD/MM/YYYY") : "null");
              setValue("role", role);
              setValue("gender", gender);
              setValue("phone", phone);
              setValue("skill", skill);
              setValue("certification", certification);


            }}
          >
            <Iconify icon="solar:pen-bold-duotone" size={18} />
          </IconButton>
          <Popconfirm
            title="Delete User?"
            okText="Yes"
            cancelText="No"
            placement="left"
            onConfirm={() => handleDelete(id)}
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
  const [currentPage,setCurrentPage]=useState(1);
  //delete user
  const { mutate: deleteUser } = useDeleteUser(currentPage);

  //add user
  const {mutate: handleaddUser,isPending}=useAddUserForm(currentPage,()=>setIsOpenModal(false),reset)
  //update user
  const {mutate: updateUser}=useUpdateUser(currentPage,()=>setIsOpenModal(false),reset)
  const handleDelete = (userId:number) => {
    deleteUser(userId);
  };
  const handleUpdate=(form:any)=>{
    updateUser({ user: form, values: form.id });
  }
  const handleAdd=(form:User)=>{
    handleaddUser(form)
  }
  
  const {data, isLoading}=useGetListUser(currentPage);
  const dataSource=data?.data ||[]
  const [form] = Form.useForm();
  const totalCount=data?.totalRow||0;
  const [openModal,setIsOpenModal]=useState(false);
  const [isupDate,setisupdate]=useState(false);
  
  const { Option } = Select;
 
  const onFinishHandler = (values: any) => {
    console.log(values);
  };
  const resetHandler = () => {
    form.resetFields();
  };

  const onsubmit=(formValues:User)=>{
   if(!isupDate){
    const formdata={
      id:0,
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      phone: formValues.phone,
      birthday: formValues.birthday ? dayjs(formValues.birthday, "DD/MM/YYYY").toISOString() : "null",

      avatar: "string",
      gender: formValues.gender,
      role: formValues.role,
      skill: formValues.skill?formValues.skill:["none"],
      certification: formValues.certification?formValues.certification:["none"],
    }
    handleAdd(formdata);
   }
   else{
    handleUpdate(formValues)
   }

  }
  const handleOpenModalForAdd = () => {
    setIsOpenModal(true);
    setisupdate(false);
    // Reset form fields for adding new job
    reset();
  };
  return (
    <>
    <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            {
              title: "Trang chủ",
              path: "/admin",
            },
            {
              title: "Quản lý người dùng",
            },
          ]}
        />
        
    </div>
    <div className="mt-3 text-2xl">
    <Form form={form} onFinish={onFinishHandler}>
          <Row gutter={24}  justify="space-between">
            <Col   xs={12} md={18} sm={14} lg={19} xl={20} xxl={18}>
              <Row  gutter={[12,12]}>
                <Col xs={24} md={21} sm={12}>
                  <Row>
                  <Col  xs={23} md={21} sm={24} lg={8}>
                  <Form.Item name="Search">
                    <Input placeholder="Search by name" allowClear />
                  </Form.Item>
                  </Col>
                  
                    <Col xs={24} md={3} sm={24} lg={16} >
                      <Button  type="primary" onClick={resetHandler}>
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={10} md={6} lg={5} xl={4} xxl={6}>
              <Row>
                <Col xs={24} sm={12} lg={3}>
                  <Button type="primary" onClick={()=>{handleOpenModalForAdd()}}>Add new Adminstrator</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
    
      <Table 
        columns={columns}
        rowKey="id"
        dataSource={dataSource}
        pagination={false}
        className="mt-3"
        loading={isLoading}
        bordered
      />
    <div className="flex float-end mt-4 pb-4">
      <Pagination
        defaultCurrent={currentPage} 
        total={totalCount} 
        pageSize={PAGE_SIZE}
        onChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  </div>
  <Modal
        title={isupDate? "Cập nhật " : "Thêm người dùng"}
        centered
        open={openModal}
        onClose={()=>setisupdate(false)}
        onCancel={() => setIsOpenModal(false)}
        footer={false}
      >
        <Form className="mt-4" onFinish={handleSubmit(onsubmit)}>
          <Row gutter={[18, 18]}>
           {isupDate &&(<Col span={24} >
              <label className="text-sm" htmlFor="">
                ID
              </label>
              <Controller
                name="id"
                control={control}
                render={({ field }) => (
                  <Input
                    size="large"
                    className="mt-1"
                    disabled
                    {...field}
                  />
                )}
              />
            </Col>)}
            <Col span={24}>
              <label className="text-sm" htmlFor="">
                Tên Người dùng
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    size="large"
                    className="mt-1"
                    placeholder="Tên người dùng"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col span={24}>
              <label className="text-sm" htmlFor="">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                    size="large"
                    className="mt-1"
                    placeholder="email"
                    {...field}
                  />
                  );
                }}
              />
            </Col>
            <Col span={24}>
              <label className="text-sm" htmlFor="">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    size="large"
                    className="mt-1"
                    placeholder="password..."
                    {...field}
                  />
                )}
              />
            </Col>
            <Col span={24}>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => {
                  return (
                    <Radio.Group {...field}>
                      <Radio value={true}>Male</Radio>
                      <Radio value={false}>Female</Radio>
                    </Radio.Group>
                  );
                }}
              />
            </Col>
            <Col span={24}>
            <label className="text-sm" htmlFor="">
                Phone number
              </label>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <Input
                    size="large"
                    className="mt-1"
                    placeholder="Phone Number..."
                    {...field}
                  />
                )}
              />
            </Col>
            <Col span={12}>
              <label className="text-sm" htmlFor="">
               Birthday
              </label>
              <Controller
                name="birthday"
                control={control}
                render={({field}) => {
                  return (
                    <DatePicker
                      {...field}
                      className="mt-1 w-full"
                      size="large"
                      placeholder="Chọn ngày"
                      format={"DD/MM/YYYY"}
                      value={
                        field.value ? dayjs(field.value, "DD/MM/YYYY") : null
                      }
                      onChange={(date) =>
                        field.onChange(date ? date.format("DD/MM/YYYY") : "")
                      }
                    />
                  );
                }}
              />
            </Col>
            <Col span={12}>
              <label className="text-sm" htmlFor="">
                Vai trò:
              </label>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                    <Select {...field} defaultValue={Role.Admin} className="mt-2 w-100" placeholder="Select Role">
                        <Option value={Role.Admin}>{Role.Admin}</Option>
                        <Option value={Role.User}>{Role.User}</Option>
                    </Select>
                )}
            />
            </Col>
            
           
            <Col span={24} className="text-end">
              <Button
                loading={isPending}
                disabled={isPending}
                htmlType="submit"
                size="large"
                type="primary"
              >
                {isupDate? "Update":"Add new"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
  </>
  )
}


