import { useQuery } from "@tanstack/react-query"
import { fetchDataJob } from "../../apis/CallApiCongViec"
import { Card, Col, Pagination, Row, Spin } from "antd"
import { StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import NavAuthent from "../../component/NavAuthent";
import ExploreMore from "./ExploreMore";
import AuthFreelans from "./AuthFreelans";
import AuthGuides from "./AuthGuides";
type Job ={
  danhGia:number;
  giaTien:number;
  hinhAnh:string;
  id:number;
  maChiTietLoaiCongViec:number;
  moTa:string;
  moTaNgan:string;
  nguoiTao:number;
  saoCongViec:number;
  tenCongViec:string;
}


export default function Authen() {
  const {isPending,data,error} = useQuery({queryKey:['cong-viec'],queryFn:fetchDataJob})
  
  const handelJob = ()=>{
      return data?.data.content.map((item:Job)=>{
             return (
              <Col xs={24} md={12} lg={8} xl={6} key={item.id}>
                  <Link to={`/auth/detail/${item.id}`}>
                  <Card
    hoverable
    
    cover={<img alt="example" src={item.hinhAnh} />}
  >
    <div>
         <p className="authen__item--text">{item.tenCongViec} to boost your business</p>
         <p><StarOutlined /> <span>{item.saoCongViec}</span><span>({item.danhGia})</span></p>
         <p>From US${item.giaTien}</p>
    </div>
  </Card>
                  </Link>
              </Col>
             )
      })
  }
  if(isPending|| error) return <Spin/>
  return (
    <div className="container pb-5">
      <NavAuthent/>
      <Row gutter={[30,30]} className="pb-2" >
          {handelJob()}
      </Row>
      <div style={{borderBottom:'2px solid #dadbdd'}} className="py-5 flex justify-center">
      <Pagination defaultCurrent={1} total={50} />
      </div>
      
      <ExploreMore/>
      <AuthFreelans/>
      <AuthGuides/>
    </div>
  )
}
