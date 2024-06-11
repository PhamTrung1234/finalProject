import { TableProps, Tag, Space, Table, Pagination, Button } from "antd";
import { User } from "../../../types/user";
import { useGetListUser } from "../../../apis/CallApiUser/user";
import { useState } from "react";
import { PAGE_SIZE } from "../../../constants";


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
      
      render: () => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button type="primary" danger>Delete</Button>
        </Space>
      ),
    },
  ];
  const [currentPage,setCurrentPage]=useState(1);
  const {data, isLoading}=useGetListUser(currentPage);
  const dataSource=data?.data ||[]
 
  const totalCount=data?.totalRow||0;
  return (
    <>
      <Table 
      className="mt-2"
      columns={columns}
      rowKey={"id"}
      dataSource={dataSource}
      pagination={false}
      
      loading={isLoading}
      />
      <div className="flex float-end mt-4 pb-4">
          <Pagination
            defaultCurrent={currentPage} 
            total={totalCount} 
            pageSize={PAGE_SIZE}
            onChange={(page: number) => {
              setCurrentPage(page);
            }}
          />
        </div>
    </>
  )
}
