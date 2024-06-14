import { TableProps, Tag, Table, Pagination, Button, Col, Form, Input, Row, Popconfirm, Tooltip, Breadcrumb } from "antd";
import { useState } from "react";
import { PAGE_SIZE } from "../../../constants";
import { IconButton, Iconify } from "../../../icon";
import { useGetListJob } from "../../../apis/CallApiCongViec/job";
import { Career } from "../../../types/job";


export default function Work() {
  
  const hinhAnh='https://t4.ftcdn.net/jpg/01/24/65/69/360_F_124656969_x3y8YVzvrqFZyv3YLWNo6PJaC88SYxqM.jpg'
  const columns: TableProps<Career>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Image',
      dataIndex: 'hinhAnh',
      key: 'hinhAnh',
      render: (key:string) => (
        <div>
          <img className="w-[80px] h-[80px] rounded object-cover" src={key===""?hinhAnh:key} alt="avatar" />
        </div>
      ),
    },
    {
      title: 'Job name',
      dataIndex: 'tenCongViec',
      key: 'tenCongViec',
      render: text => (
        <Tooltip title={text}>
          <div style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {text}
          </div>
        </Tooltip>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'giaTien',
      key: 'giaTien',
      
    },
    {
      title: 'Creator',
      dataIndex: 'nguoiTao',
      key: 'nguoiTao',
    },
    {
      title: 'ID Details job',
      dataIndex: 'maChiTietLoaiCongViec',
      key: 'maChiTietLoaiCongViec',
    },
    {
      title: 'Description',
      dataIndex: 'moTa',
      key: 'moTa',
      render: text => (
        <Tooltip title={text}>
          <span>{text.length > 3 ? `${text.substring(0, 3)}...` : text}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Star',
      key: 'saoCongViec',
      dataIndex: 'saoCongViec',
      align: 'center',
      render: (_, { saoCongViec }) => (
        <>
          {Array.from({ length: saoCongViec }, (_, index) => (
            <span key={index} style={{ color: '#ffcc00', fontSize: '16px' }}>★</span>
          ))}
        </>
      ),
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
  const {data, isLoading}=useGetListJob(currentPage);
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
              title: "Quản lý công việc",
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
    </div>
    </>
  )
}
