import { TableProps, Tag, Table, Pagination, Button, Col, Form, Input, Row, Popconfirm,  Breadcrumb, Modal } from "antd";
import { useEffect, useState } from "react";
import { PAGE_SIZE } from "../../../constants";
import { IconButton, Iconify } from "../../../icon";

import {  JobHired } from "../../../types/job";
import { useGetLisJobHired } from "../../../apis/CallApiJobHired/jobhire";
import { useDeleteComment, useDeleteCommentbyId, useGetCommentById, useGetListComment } from "../../../apis/CallApiComment";


export default function ServiceManagement() {
  
  
  const columns: TableProps<JobHired>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'ID Job',
      dataIndex: 'maCongViec',
      key: 'maCongViec',
    },
    {
      title: 'ID Person',
      dataIndex: 'maNguoiThue',
      key: 'maNguoiThue',
    },
    {
      title: 'Date',
      dataIndex: 'ngayThue',
      key: 'ngayThue',
    },
    {
      title: 'Finish',
      dataIndex: 'hoanThanh',
      key: 'hoanThanh',
      render: (_, {hoanThanh}) => {
        return (
          <>
            <Tag color={hoanThanh?"green":"red"}>{hoanThanh?"TRUE":"FALSE"}</Tag>
          </>
        );
      }
    },
    
    // {
    //   title: 'Action',
    //   key: 'action',
    //   align: 'center',
      
    //   render: () => (
    //     <div className="text-gray flex w-full items-center justify-center">
    //       <IconButton >
    //         <Iconify icon="solar:pen-bold-duotone" size={18} />
    //       </IconButton>
    //       <Popconfirm
    //         title="Delete This Services?"
    //         okText="Yes"
    //         cancelText="No"
    //         placement="left"
    //         onConfirm={() => {
    //           // submitHandleDelete(record.id.toString());
    //         }}
    //       >
    //         <IconButton>
    //           <Iconify
    //             icon="mingcute:delete-2-fill"
    //             size={18}
    //             className="text-error"
    //           />
    //         </IconButton>
    //       </Popconfirm>
    //     </div>
    //   ),
    // },
  ];
  const commentcolumns: TableProps<any>['columns']=[
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    
    {
      title: 'Tên',
      dataIndex: 'tenNguoiBinhLuan',
      key: 'tenNguoiBinhLuan',
    },
    {
      title: 'Nội Dung',
      dataIndex: 'noiDung',
      key: 'noiDung',
    },
    {
      title: 'Ngày Bình Luận',
      dataIndex: 'ngayBinhLuan',
      key: 'ngayBinhLuan',
    },
    {
      title: 'Đánh Giá',
      dataIndex: 'saoBinhLuan',
      key: 'saoBinhLuan',
      render: (_, { saoBinhLuan }) => (
        <>
          {Array.from({ length: saoBinhLuan }, (_, index) => (
            <span key={index} style={{ color: "#ffcc00", fontSize: "16px" }}>
              ★
            </span>
          ))}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      
      render: (_,record) => (
        <div className="text-gray flex w-full items-center justify-center">
          <IconButton >
            <Iconify icon="solar:pen-bold-duotone"  size={18} />
          </IconButton>
          <Popconfirm
            title="Delete This Type?"
            okText="Yes"
            cancelText="No"
            placement="left"
            onConfirm={(e:any) => {
              
              e.stopPropagation();
              deletecommentid(record.id)
            }}
          >
            <IconButton onClick={(e) => e.stopPropagation()}>
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
    
  ]
  const listcommentcolumns: TableProps<any>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'ID Job',
      dataIndex: 'maCongViec',
      key: 'maCongViec',
    },
    {
      title: 'ID Person',
      dataIndex: 'maNguoiBinhLuan',
      key: 'maNguoiBinhLuan',
    },
    {
      title: 'Date',
      dataIndex: 'ngayBinhLuan',
      key: 'ngayBinhLuan',
    },
    {
      title: 'Content',
      dataIndex: 'noiDung',
      key: 'noiDung',
      
    },
    {
      title: 'Evaluation',
      dataIndex: 'saoBinhLuan',
      key: 'saoBinhLuan',
      render: (_, { saoBinhLuan }) => (
        <>
          {Array.from({ length: saoBinhLuan }, (_, index) => (
            <span key={index} style={{ color: "#ffcc00", fontSize: "16px" }}>
              ★
            </span>
          ))}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      
      render: (_,record) => (
        <div className="text-gray flex w-full items-center justify-center">
          <IconButton >
            <Iconify icon="solar:pen-bold-duotone"  size={18} />
          </IconButton>
          <Popconfirm
            title="Delete This Type?"
            okText="Yes"
            cancelText="No"
            placement="left"
            onConfirm={(e:any) => {
              
              e.stopPropagation();
              deleteComment(record.id)
            }}
          >
            <IconButton onClick={(e) => e.stopPropagation()}>
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
  const {data, isLoading}=useGetLisJobHired(currentPage);
  const [comModal,setcomModal]=useState(false);
  const [listcomment,setlistComment]=useState(false);
  const {data:listComment,isLoading:commentloading}=useGetListComment()
  const dataSource=data?.data ||[]
  const {mutateAsync:deleteComment}=useDeleteComment();
  const {mutateAsync:deletecommentid}=useDeleteCommentbyId();

  const [form] = Form.useForm();
  const totalCount=data?.totalRow||0;
  const [comment,setcomment]=useState(0)
  const {data:datacomment,isLoading:commentload}=useGetCommentById(comment);
  const onFinishHandler = (values: any) => {
    console.log(values);
  };
  
  const resetHandler = () => {
    form.resetFields();
  };
  
  const handlecomment=()=>{
    setcomModal(true)

  }
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
              title: "Quản lý dịch vụ",
            },
          ]}
        />
        
    </div>
    <div className="mt-4 text-2xl">
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
                  
                    <Col xs={24} md={3} sm={24} lg={8} >
                      <Button  type="primary" onClick={resetHandler}>
                        Reset
                      </Button>
                    </Col>
                    <Col xs={24} sm={12} lg={8}>
                  <Button type="primary" danger onClick={()=>setlistComment(true)} >List Comment</Button>
                </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
           
          </Row>
        </Form>
      <Table 
      className="mt-2"
      columns={columns}
      rowKey={"id"}
      dataSource={dataSource}
      pagination={false}
      bordered
      style={{cursor:'pointer'}}
      loading={isLoading}
      onRow={(record) => {
        return {
          onClick: () => {
            setcomment(record.maCongViec)
            handlecomment();
          },
        };
      }}
      />
      <div className="flex float-end mt-2 pb-5">
          <Pagination
            defaultCurrent={currentPage} 
            total={totalCount} 
            pageSize={PAGE_SIZE}
            onChange={(page: number) => {
              setCurrentPage(page);
             
            }}
          />
        </div>
    </div>
      <Modal
        title='Comment'
        open={comModal}
        onOk={()=>setcomModal(false)}
        onCancel={()=>setcomModal(false)}
        width={1000}
      >
        <Table 
        className="mt-2"
        columns={commentcolumns}
        rowKey={"id"}
        dataSource={datacomment}
        pagination={false}
        bordered
        loading={commentload}
        
      />
        
      </Modal>
      <Modal
        title='Comment'
        open={listcomment}
        onOk={()=>setlistComment(false)}
        onCancel={()=>setlistComment(false)}
        width={1000}
      >
        <Table 
        className="mt-2"
        columns={listcommentcolumns}
        rowKey={"id"}
        dataSource={listComment}
        loading={commentloading}
        
      />
        
      </Modal>
    </>
  )
}
