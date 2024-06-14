import { TableProps, Tag, Table, Pagination, Button, Col, Form, Input, Row, Popconfirm, Breadcrumb } from "antd";
import { User } from "../../../types/user";
import { useGetListUser } from "../../../apis/CallApiUser/user";
import { useState } from "react";
import { PAGE_SIZE } from "../../../constants";
import { IconButton, Iconify } from "../../../icon";


export default function UserManagement() {
  
  const hinhAnh='https://t4.ftcdn.net/jpg/01/24/65/69/360_F_124656969_x3y8YVzvrqFZyv3YLWNo6PJaC88SYxqM.jpg'
  const columns: TableProps<User>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (key:string) => (
        <div>
          <img className="w-[80px] h-[80px] rounded object-cover" src={key===""?hinhAnh:key} alt="avatar" />
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Role',
      key: 'role',
      dataIndex: 'role',
      render: (_, { role }) => {
        let color = 'green'; // Default color
    
        // Apply custom logic to set color based on role
        if (role === 'ADMIN') {
          color = 'red';
        } else if (role === 'USER') {
          color = 'blue';
        } 
        return (
          <>
            <Tag color={color}>{role.toUpperCase()}</Tag>
          </>
        );
      },
    },
    
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      
      render: () => (
        <div className="text-gray flex w-full items-center justify-center">
          <IconButton >
            <Iconify icon="solar:pen-bold-duotone" size={18} />
          </IconButton>
          <Popconfirm
            title="Delete User?"
            okText="Yes"
            cancelText="No"
            placement="left"
            onConfirm={() => {
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
  const [currentPage,setCurrentPage]=useState(1);
  const {data, isLoading}=useGetListUser(currentPage);
  const dataSource=data?.data ||[]
  const [form] = Form.useForm();
  const totalCount=data?.totalRow||0;
  const onFinishHandler = (values: any) => {
    console.log(values);
  };
  const resetHandler = () => {
    form.resetFields();
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
      <Row gutter={24} justify="space-between">
        <Col span={20}>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name="Search">
                <Input placeholder="Search by name" allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Row>
                <Col span={7}>
                  <Form.Item name="search">
                    <Button type="primary" htmlType="submit">
                      Search
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Button type="primary" onClick={resetHandler}>
                    Reset
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={2}>
          <Row>
            <Col span={12}>
              <Button type="primary">New</Button>
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
        
        loading={isLoading}
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
  </>
  )
}
