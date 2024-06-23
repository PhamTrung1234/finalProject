import { TableProps, Tag, Table, Pagination, Button, Col, Form, Input, Row, Popconfirm,  Breadcrumb } from "antd";
import { useState } from "react";
import { PAGE_SIZE } from "../../../constants";
import { IconButton, Iconify } from "../../../icon";

import {  JobHired } from "../../../types/job";
import { useGetLisJobHired } from "../../../apis/CallApiJobHired/jobhire";


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
            title="Delete This Services?"
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
  const {data, isLoading}=useGetLisJobHired(currentPage);
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
                  <Button type="primary" >Add new Services</Button>
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
      loading={isLoading}
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
    </>
  )
}
