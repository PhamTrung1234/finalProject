import { TableProps, Tag, Table, Pagination, Button, Col, Form, Input, Row, Popconfirm, Tooltip } from "antd";
import { useState } from "react";
import { PAGE_SIZE } from "../../../constants";
import { IconButton, Iconify } from "../../../icon";
import { JobType } from "../../../types/job";
import { useGetListJobType } from "../../../apis/CallApiMaLoaiCongViec/typejob";


export default function Typework() {
  
  const columns: TableProps<JobType>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name Type Of Job',
      dataIndex: 'tenLoaiCongViec',
      key: 'tenLoaiCongViec',
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
  const {data, isLoading}=useGetListJobType(currentPage);
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
    <div className="overflow-hidden h-full">
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
      className="mt-2"
      columns={columns}
      rowKey={"id"}
      dataSource={dataSource}
      pagination={false}
      scroll={{ y: 400 }}
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
  )
}
