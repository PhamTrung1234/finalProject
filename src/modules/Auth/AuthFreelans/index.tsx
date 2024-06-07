import { Row } from "antd";
import { freelancers, handelExplore } from "../ExploreMore/Roots";


export default function AuthFreelans() {
  return (
    <div>
        <h2 className="text-center font-bold text-3xl uppercase py-5">Hire freelancers related to Website Development</h2>
        <Row gutter={[15,30]} className=" justify-center pb-20" style={{borderBottom:'2px solid #dadbdd'}}>
        {handelExplore(freelancers)}
    </Row>
    </div>
  )
}
