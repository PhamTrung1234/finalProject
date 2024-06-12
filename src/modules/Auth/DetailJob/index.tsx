import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { fetchDetailJob } from "../../../apis/CallApiDetailJob";
import { Col, Row, Spin } from "antd";
import { StarFilled } from "@ant-design/icons";
import "./style.css"
import DetailAbout from "./DetailAbout";
import DetailFaq from "./DetailFaq";
import DetailReview from "./DetailReview";
import DetailComment from "./DetailComment";
import DetailBooking from "./DetailBooking";

export default function DetailJob() {
  const {id} = useParams();
  let newid = '';
  if(id) newid = id;
  const {data,isPending,error} = useQuery({queryKey:['detail-job'],queryFn:()=>{
    if(id) return fetchDetailJob(id)
  }})
 
  const detailJob = data?.data.content
 
  if(isPending || error) return <Spin/>
  return (
    <div className="container pt-36 DetailJob">
      <Row>
        <Col span={15}>
        <h1 className="font-bold pt-3">{detailJob.tenCongViec}</h1>
        <div className="flex items-center py-5 cursor-pointer">
          <img className="DetailJob__logo" src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/d60b383ea9bd55a6d6dfb9f2e8bf0dda-1617496164086/269045db-954f-4edc-ba69-e3354e8aec2e.jpg" alt="" />
          <div className="ml-3">
            <h4>Naveed Ali</h4>
            <h5><StarFilled /><span className="ml-1">{detailJob.saoCongViec}</span><span className="ml-1">({detailJob.danhGia})</span></h5>
          </div>
        </div>
        <img width={"90%"} src={detailJob.hinhAnh} alt={detailJob.hinhAnh} />
        <DetailAbout/>
        <DetailFaq/>
        <DetailReview data={detailJob}/>
        <DetailComment id={newid}/>
        </Col>
        <Col span={9}>
         <DetailBooking/>
        </Col>
      </Row>
    </div>
  )
}
