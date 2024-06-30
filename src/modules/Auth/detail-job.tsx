import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router-dom"
import {  fetchDataById, fetchListJobBySearch } from "../../apis/CallApiDetailJob"
import NavAuthent from "../../component/NavAuthent"
import { Card, Col, Empty, Pagination, Row, Spin } from "antd"
import ExploreMore from "./ExploreMore"
import AuthFreelans from "./AuthFreelans"
import AuthGuides from "./AuthGuides"

import { StarOutlined } from "@ant-design/icons"


export default function ListJobBySearch() {
    const {derc} = useParams()
     const id = derc ? derc :""
    
   
    const {data,isPending} = useQuery({
        queryKey:["list-job",{derc}],
        queryFn:()=>{
            if(Number(id)){
              return fetchDataById(id)
            }else{
              return fetchListJobBySearch(id.slice(6))
            }
        },
        
    })
   
    const handelJob = () => {
        
       
       if(data && data.content.length >0){
        return data?.content.map((item: any) => {
            return (
              <Col xs={24} md={12} lg={8} xl={6} key={item.id}>
                <Link to={`/auth/detail/description/${item.id}`}>
                  <Card hoverable cover={<img alt="example" src={item.congViec.hinhAnh} />}>
                    <div>
                      <p className="authen__item--text">
                        {item.tenCongViec} to boost your business
                      </p>
                      <p>
                        <StarOutlined /> <span>{item.congViec.saoCongViec}</span>
                        <span>({item.congViec.danhGia})</span>
                      </p>
                      <p>From US${item.congViec.giaTien}</p>
                    </div>
                  </Card>
                </Link>
              </Col>
            );
          });
       }else{
        return <Empty className="container"/>
       }
       
      };
    
    if(isPending) return <Spin/>
    
    return (
        <div className="container pb-5">
          <NavAuthent />
          <Row gutter={[30, 30]} className="pb-2">
            {handelJob()}
          </Row>
          <div
            style={{ borderBottom: "2px solid #dadbdd" }}
            className="py-5 flex justify-center"
          >
            <Pagination defaultCurrent={1} total={50} />
          </div>
    
          <ExploreMore />
          <AuthFreelans />
          <AuthGuides />
        </div>
      );
}
