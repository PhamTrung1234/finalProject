import { TableProps,Image , Table, Pagination, Button, Col, Form, Input, Row, Popconfirm, Tooltip, Breadcrumb, Modal, Popover, Tag } from "antd";
import {  useState } from "react";
import {  PAGE_SIZE_TYPEJOB } from "../../../constants";
import { IconButton, Iconify } from "../../../icon";
import { DetailJobType, JobType, ListDetailJobType } from "../../../types/job";
import {  useDetailTypeJob, useGetListJobType, useListDetailTypeJob } from "../../../apis/CallApiMaLoaiCongViec/typejob";


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
            title="Delete This Type?"
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
  const columnsDt: TableProps<DetailJobType>['columns']=[
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Group Name',
      dataIndex: 'tenNhom',
      key: 'tenNhom',
    },
    {
      title: 'Image',
      dataIndex: 'hinhAnh',
      key: 'hinhAnh',
      render: (_,{hinhAnh}, index) => (
        <Image
          width={100}
          src={hinhAnh}
          alt={`Image ${index}`}
        />
      ),
    },
    {
      title: 'Type Job ID',
      dataIndex: 'maLoaiCongviec',
      key: 'maLoaiCongviec',
    },
    {
      title: 'Details',
      dataIndex: 'dsChiTietLoai',
      key: 'dsChiTietLoai',
      render: (details: ListDetailJobType[]) => {
        const content = (
          <div>
            {details.map(detail => (
              <Tooltip key={detail.id} title={`ID: ${detail.id}`}>
                <Tag color="yellow">Name: {detail.tenChiTiet}</Tag>
              </Tooltip>
            ))}
          </div>
        );

        return (
          <Popover mouseEnterDelay={0.5} content={content} title="Details">
            <Button type="link">Details</Button>
          </Popover>
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
            title="Delete This Type?"
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
  ]
  
  const [currentPage,setCurrentPage]=useState(1);
  
  const {data, isLoading}=useGetListJobType(currentPage);
  const dataSource=data?.data ||[]
  const [form] = Form.useForm();
  const totalCount=data?.totalRow||0;
  // const dataDetailJob=[...dataSource]||[];
  const [currentPagedetail,setcurrentpageDetail]=useState(1);
  const {data:typejobdetail,isLoading:loadingtypejobdetail}=useListDetailTypeJob(currentPagedetail)
  const [isopenModal,setisopenModal]=useState(false);
  const dataSourceJobDetail=typejobdetail?.data||[];
  const totalCountdetail=typejobdetail?.totalRow||0;
  const [detailopenmodal,setDetailOpenModal]=useState(false);
  const [id,setid]=useState(0);
  const {data:detailData,isLoading:detailLoad}=useDetailTypeJob()
  const detaildata=detailData?.filter((item:DetailJobType) => item.maLoaiCongviec === id)||[];
  const [addModal,setaddModal]=useState(false);
  const onFinishHandler = (values: any) => {
    console.log(values);
  };
  const resetHandler = () => {
    form.resetFields();
  };
  const handleOpenmodal=()=>{}
  const handledetailJob = () => {
    setDetailOpenModal(true);
    
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
              title: "Quản lý loại công việc",
            },
          ]}
        />
        
    </div>
    <div className="mt-3 text-2xl">
    <Form form={form} onFinish={onFinishHandler}>
          <Row gutter={24}  justify="space-between">
            <Col   xs={12} md={18} sm={14} lg={4} xl={20} xxl={18}>
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
            <Col xs={12} sm={10} md={6} lg={20} xl={4} xxl={6}>
              <Row gutter={[12,12]}>
              <Col xs={24} sm={12} lg={24}>
                  <Button onClick={()=>setisopenModal(true)}  type="primary" danger >List Detail Job</Button>
                </Col>
                <Col xs={12} sm={12} lg={24}>
                  <Button type="primary" onClick={()=>handleOpenmodal()} >Add new Type</Button>
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
      style={{cursor:'pointer'}}
      onRow={({id}) => {
        return {
          onClick: () => {
            setid(id)
            handledetailJob();
          },
        };
      }}
      />
      <div className="flex float-end mt-4 pb-4">
          <Pagination
            defaultCurrent={currentPage} 
            total={totalCount} 
            pageSize={PAGE_SIZE_TYPEJOB}
            onChange={(page: number) => {
              setCurrentPage(page);
            }}
          />
        </div>
        <Modal
        title="Job Details"
        centered
        open={isopenModal}
        onOk={()=>{setisopenModal(false); }}
        onCancel={()=>{setisopenModal(false);}}
        width={1000}
        
      >
        <Table 
      className="mt-2"
      columns={columnsDt}
      rowKey={"id"}
      dataSource={dataSourceJobDetail}
      pagination={false}
      bordered
      loading={loadingtypejobdetail}
      
      
      />
      <div className="mt-2">
          <Pagination
            defaultCurrent={currentPagedetail} 
            
            total={totalCountdetail} 
            pageSize={PAGE_SIZE_TYPEJOB}
            onChange={(page: number) => {
              setcurrentpageDetail(page);
            }}
          />
        </div>
      </Modal>
      <Modal
        title="Job Details"
        centered
        open={detailopenmodal}
        onOk={()=>setDetailOpenModal(false)}
        onCancel={()=>setDetailOpenModal(false)}
        width={1000}
      >
        <Table 
      className="mt-2"
      columns={columnsDt}
      rowKey={"id"}
      dataSource={detaildata}
      pagination={false}
      bordered
      loading={detailLoad}
      
      
      />
      
      </Modal>
    </div>
    </>
  )
}
