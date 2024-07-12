import {
  TableProps,
  Table,
  Pagination,
  Button,
  Col,
  Form,
  Input,
  Row,
  Popconfirm,
  Tooltip,
  Breadcrumb,
  Modal,
  InputRef,
  Space,
  TableColumnType,
  
} from "antd";
import { useRef, useState } from "react";
import { PAGE_SIZE } from "../../../constants";
import { IconButton, Iconify } from "../../../icon";
import { useAddJob, useDeleteJob, useGetListJob, useUpdateJob } from "../../../apis/CallApiCongViec/job";
import { Career } from "../../../types/job";
import { Controller, useForm } from "react-hook-form";
import {  DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { FilterDropdownProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";

export default function Work() {
  const { handleSubmit, control, watch, setValue,trigger, reset, formState: { errors } } = useForm<Career>({
    defaultValues: {
      id: 0,
      tenCongViec: "",
      danhGia: 0,
      giaTien: 0,
      nguoiTao: 0,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: 0,
      moTaNgan: "",
      saoCongViec: 0,
    },
  });
  const hinhAnh =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUxUTYzeP71ankRCJ2bhiC7ZXN_H7sjvd1g&s";
  
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetListJob(currentPage);
  const dataSource = data?.data || [];
  const [isopenModal, setisopenModal] = useState(false);
  const [isupDate, setisupdate] = useState(false);
  const [form] = Form.useForm();
  const totalCount = data?.totalRow || 0;
  const {mutate:addNewJob,isPending}=useAddJob(currentPage,()=>setisopenModal(false),reset)
  const {mutate: deleteJob}=useDeleteJob(currentPage);
  const {mutate:updateJob}=useUpdateJob(currentPage,()=>setisopenModal(false),reset)
  const hinhAnhValue = watch("hinhAnh");
  const [searchText,setSearchText]=useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  
  const onFinishHandler = (values: any) => {
    console.log(values);
  };
  const submitHandleDelete=(id:any)=>{
    deleteJob(id);
  }
  const handleUpdateJob=(form:any)=>{
    updateJob({ job: form, values: form.id });
  }
  const handleAddJob=(form:Career)=>{
    addNewJob(form)
  };
  const handleSearch=(
    selectedKeys:string[],
    confirm:FilterDropdownProps["confirm"],
    dataIndex:any)=>{
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
     const handleReset = (clearFilters: () => void) => {
            clearFilters();
            setSearchText("");
          };
  
    const getColumnSearchProps = (dataIndex: any ): TableColumnType<any> => ({
            filterDropdown: ({
              setSelectedKeys,
              selectedKeys,
              confirm,
              clearFilters,
              close,
            }) => (
              <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                  ref={searchInput}
                  placeholder={`Search ${dataIndex}`}
                  value={selectedKeys[0]}
                  onChange={(e) =>
                    setSelectedKeys(e.target.value ? [e.target.value] : [])
                  }
                  onPressEnter={() =>
                    handleSearch(selectedKeys as string[], confirm, dataIndex)
                  }
                  style={{ marginBottom: 8, display: "block" }}
                />
                <Space>
                  <Button
                    type="primary"
                    onClick={() =>
                      handleSearch(selectedKeys as string[], confirm, dataIndex)
                    }
                    icon={<SearchOutlined  />}
                    size="small"
                    style={{ width: 90, borderRadius: 5 }}
                  >
                    Search
                  </Button>
                  <Button
                    onClick={() => clearFilters && handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90, borderRadius: 5 }}
                  >
                    Reset
                  </Button>
                  <Button
                    type="link"
                    size="small"
                    onClick={() => {
                      confirm({ closeDropdown: false });
                      setSearchText((selectedKeys as string[])[0]);
                      setSearchedColumn(dataIndex);
                    }}
                  >
                    Filter
                  </Button>
                  <Button
                    type="link"
                    size="small"
                    style={{ color: "red" }}
                    onClick={() => {
                      close();
                    }}
                  >
                    Close
                  </Button>
                </Space>
              </div>
            ),
            filterIcon: (filtered: boolean) => (
              <SearchOutlined
                style={{fontSize: '17px',alignContent:'center',width: '17px', color: filtered ? "#1677ff" : undefined }}
              />
            ),
            onFilter: (value, record) =>
              record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
            onFilterDropdownOpenChange: (visible) => {
              if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
              }
            },
            render: (text) =>
              searchedColumn === dataIndex ? (
                <Highlighter
                  highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                  searchWords={[searchText]}
                  autoEscape
                  textToHighlight={text ? text.toString() : ""}
                />
              ) : (
                text
              ),
          });
          const columns: TableProps<Career>["columns"] = [
            {
              title: "ID",
              dataIndex: "id",
              key: "id",
              sorter: (a, b) => b.id - a.id,
            },
            {
              title: "Image",
              dataIndex: "hinhAnh",
              align:'center',
              key: "hinhAnh",
              render: (key: string) => (
                <div>
                  <img
                    className="w-[80px] h-[80px] rounded object-cover"
                    src={key === "" ? hinhAnh : key}
                    alt="avatar"
                  />
                </div>
              ),
            },
            {
              title: "Job name",
              dataIndex: "tenCongViec",
              align:'center',
              key: "tenCongViec",
              ...getColumnSearchProps("tenCongViec"),
              render: (text) => (
                <Tooltip title={text}>
                  <div
                    style={{
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {text}
                  </div>
                </Tooltip>
              ),
            },
            {
              title: "Price",
              dataIndex: "giaTien",
              key: "giaTien",
            },
            {
              title: "Creator",
              dataIndex: "nguoiTao",
              key: "nguoiTao",
            },
            {
              title: "ID Details job",
              dataIndex: "maChiTietLoaiCongViec",
              key: "maChiTietLoaiCongViec",
            },
            {
              title: "Description",
              dataIndex: "moTa",
              key: "moTa",
              render: (text) => (
                <Tooltip title={text}>
                  <span>{text.length > 3 ? `${text.substring(0, 3)}...` : text}</span>
                </Tooltip>
              ),
            },
            {
              title: "Star",
              key: "saoCongViec",
              dataIndex: "saoCongViec",
              align: "center",
              render: (_, { saoCongViec }) => (
                <>
                  {Array.from({ length: saoCongViec }, (_, index) => (
                    <span key={index} style={{ color: "#ffcc00", fontSize: "16px" }}>
                      ★
                    </span>
                  ))}
                </>
              ),
            },
        
            {
              title: "Action",
              key: "action",
              align: "center",
        
        
              render: (_,{id,tenCongViec,danhGia,giaTien,nguoiTao,saoCongViec,moTa,hinhAnh,moTaNgan,maChiTietLoaiCongViec}) => (
        
              
                <div className="text-gray flex w-full items-center justify-center">
                  <IconButton onClick={()=>{
                    setisopenModal(true); 
                    setisupdate(true);
                    setValue("id",id);
                    setValue("tenCongViec",tenCongViec);
                    setValue("danhGia",danhGia);
                    setValue("giaTien",giaTien);
                    setValue("nguoiTao",nguoiTao);
                    setValue("moTa",moTa);
                    setValue("moTaNgan",moTaNgan);
                    setValue("hinhAnh",hinhAnh);
                    setValue("saoCongViec",saoCongViec);
                    setValue("maChiTietLoaiCongViec",maChiTietLoaiCongViec);
        
                  }}>
                    <Iconify icon="solar:pen-bold-duotone" size={18} />
                  </IconButton>
                  <Popconfirm
                    title="Delete This Job?"
                    okText="Yes"
                    cancelText="No"
                    placement="left"
                    onConfirm={() => {
                      submitHandleDelete(id);
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
  const handleBlur = async (name:any) => {
    await trigger(name); // Trigger validation for the specific field
  };
  const onsubmit = (formValue: Career) => {
    if(!isupDate){
      const form={
        id: 0,
        tenCongViec: formValue.tenCongViec,
        danhGia: formValue.danhGia,
        giaTien: formValue.giaTien,
        nguoiTao: formValue.nguoiTao,
        hinhAnh: formValue.hinhAnh ? String(formValue.hinhAnh) : "",
        moTa: formValue.moTa,
        maChiTietLoaiCongViec: formValue.maChiTietLoaiCongViec,
        moTaNgan: formValue.moTaNgan,
        saoCongViec: formValue.saoCongViec,
      }
      handleAddJob(form);
    }
    else{
      handleUpdateJob(formValue);
    }
  };
  const handleOpenModalForAdd = () => {
    setisopenModal(true);
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
              title: "Quản lý công việc",
            },
          ]}
        />
      </div>
      <div className="mt-3 text-2xl">
        <Form form={form} onFinish={onFinishHandler}>
          <Row gutter={24} justify="space-between">
            <Col xs={12} md={18} sm={14} lg={19} xl={20} xxl={18}>
            </Col>
            <Col xs={12} sm={10} md={6} lg={5} xl={4} xxl={6}>
              <Row>
                <Col xs={24} sm={12} lg={3}>
                  <Button
                    type="primary"
                    onClick={() => {
                      handleOpenModalForAdd();
                    }}
                  >
                    Add new Job
                  </Button>
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
        <Modal
          title={isupDate ? "Cập nhật Công Việc " : "Thêm Công việc"}
          centered
          open={isopenModal}
          onClose={() => setisupdate(false)}
          onCancel={() => setisopenModal(false)}
          footer={false}
        >
          <Form className="mt-2" onFinish={handleSubmit(onsubmit)}>
            <Row gutter={[18, 18]}>
              {isupDate && (
                <Col span={24}>
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
                </Col>
              )}
              <Col span={24}>
                <label className="text-sm" htmlFor="">
                  Tên Công Việc
                </label>
                <Controller
                  name="tenCongViec"
                  control={control}
                  rules={
                    {required: 'Vui lòng Nhập tên',
                      pattern: {
                        value: /^[A-Za-z ]+$/i,
                        message: 'Vui Lòng nhập đúng định dạng'
                      }}
                  }
                  render={({ field }) => (
                    <Input
                      size="large"
                      className="mt-1"
                      placeholder="Tên công Việc"
                      {...field}
                      onBlur={() => handleBlur('tenCongViec')}
                    />
                  )}
                />
                 {errors.tenCongViec && <span className="text-red-600">{errors.tenCongViec.message}</span>}
              </Col>
              <Col span={24}>
                <label className="text-sm" htmlFor="">
                  Đánh giá
                </label>
                <Controller
                  name="danhGia"
                  control={control}
                  rules={{
                    required: 'Vui lòng Nhập đánh giá',
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        type="number"
                        size="large"
                        className="mt-1"
                        placeholder="Đánh Giá..."
                        {...field}
                        onBlur={() => handleBlur('danhGia')}
                        
                      />
                    );
                  }}
                />
                {errors.danhGia && <span className="text-red-600">{errors.danhGia.message}</span>}
              </Col>
              <Col span={24}>
                <label className="text-sm" htmlFor="">
                  Giá tiền
                </label>
                <Controller
                  name="giaTien"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="number"
                      size="large"
                      className="mt-1"
                      placeholder="Price..."
                      {...field}
                      onBlur={() => handleBlur('giaTien')}
                    />
                  )}
                  rules={{ 
                    required: 'Vui Lòng Nhập giá tiền', 
                    
                  }}
                />
                  {errors.giaTien && <span className="text-red-600">{errors.giaTien.message}</span>}
              </Col>

              <Col span={24}>
                <label className="text-sm" htmlFor="">
                  Người Tạo
                </label>
                <Controller
                  control={control}
                  name="nguoiTao"
                  render={({ field }) => (
                    <Input
                      type="number"
                      size="large"
                      className="mt-1"
                      placeholder="Number..."
                      {...field}
                      onBlur={() => handleBlur('nguoiTao')}
                    />
                  )}
                  rules={{ 
                    required: 'Vui lòng Nhập thông tin',
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: 'Vui lòng Nhập đúng định dạng'
                    }
                  }}
                />
                {errors.nguoiTao && <span className="text-red-600">{errors.nguoiTao.message}</span>}
              </Col>
              <Col span={12}>
                <label className="text-sm" htmlFor="">
                  Mã Loại Công Việc
                </label>
                <Controller
                  name="maChiTietLoaiCongViec"
                  control={control}
                  render={({ field }) => (
                    <Input
                      size="large"
                      className="mt-1"
                      placeholder="Id..."
                      {...field}
                      onBlur={() => handleBlur('maChiTietLoaiCongViec')}
                    />
                  )}
                  rules={{ 
                    required: 'Vui Lòng Nhập Mã',
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: 'Vui Lòng Nhập đúng định dạng'
                    },
                    
                  }}
                />
                {errors.maChiTietLoaiCongViec && <span className="text-red-600">{errors.maChiTietLoaiCongViec.message}</span>}
              </Col>
              <Col span={12}>
                <label className="text-sm" htmlFor="">
                  Sao Công Việc
                </label>
                <Controller
                  control={control}
                  name="saoCongViec"
                  render={({ field }) => (
                    <Input
                      type="number"
                      size="large"
                      className="mt-1"
                      placeholder="Number..."
                      {...field}
                      onBlur={() => handleBlur('saoCongViec')}
                    />
                  )}
                  rules={{ 
                    required: 'Vui Lòng Nhập thông tin', 
                    min: { value: 1, message: 'Sao Công Việc nhỏ nhất là 1' }, 
                    max: { value: 5, message: 'Sao Công Việc lớn nhất là 5' }
                  }}
                />
                {errors.saoCongViec && <span className="text-red-600">{errors.saoCongViec.message}</span>}
              </Col>
              <Col span={24}>
                <label className="text-sm" htmlFor="">
                  Short Description
                </label>
                <Controller
                  name="moTaNgan"
                  control={control}
                  render={({ field }) => (
                    <Input
                      size="large"
                      className="mt-1"
                      placeholder="mô tả ngắn..."
                      {...field}
                      onBlur={() => handleBlur('moTaNgan')}
                    />
                  )}
                />
              </Col>
              <Col span={24}>
                <label className="text-sm" htmlFor="">
                  Long Description
                </label>
                <Controller
                  name="moTa"
                  control={control}
                  render={({ field }) => (
                    <Input.TextArea
                      rows={4}
                      size="small"
                      className="mt-1"
                      placeholder="mô tả dài..."
                      {...field}
                      onBlur={() => handleBlur('moTa')}

                    />
                  )}
                  rules={{
                    required: 'Vui lòng nhập thông tin'
                  }}
                />
                {errors.moTa && <span className="text-red-600">{errors.moTa.message}</span>}
              </Col>
              <Col span={24}>
                <label className="text-sm" htmlFor="">
                  Hình ảnh
                </label>
                <Controller
                  name="hinhAnh"
                  control={control}
                  render={({ field }) => {
                    return(
                      <Input
                      size="large"
                      className="mt-1"
                      placeholder="Nhập đường dẫn ảnh"
                      {...field}
                      onBlur={() => handleBlur('hinhAnh')}
                    />
                    )
                  }}
                  rules={{ required: 'Vui lòng Nhập link Ảnh' }}
                />
                {errors.hinhAnh && <span className="text-red-600">{errors.hinhAnh.message}</span>}
                {hinhAnhValue && typeof hinhAnhValue === "string" && (
                  <div className="mt-2">
                    <img
                      src={hinhAnhValue}
                      className="w-[100px] h-[100px] object-cover rounded"
                    />
                    <span
                      className="inline-block ml-3 cursor-pointer"
                      onClick={() => setValue("hinhAnh", undefined)}
                    >
                      <DeleteOutlined />
                    </span>
                  </div>
                )}
              </Col>

              <Col span={24} className="text-end">
                <Button
                  loading={isPending}
                  disabled={isPending}
                  htmlType="submit"
                  size="large"
                  type="primary"
                >
                  {isupDate ? "Update" : "Add new"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    </>
  );
}
