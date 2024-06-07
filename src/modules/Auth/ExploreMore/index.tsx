import { Row } from "antd";
import { exploreMore, handelExplore } from "./Roots";


export default function ExploreMore() {
  return (
    <div>
        <h2 className="text-center font-bold text-3xl uppercase py-5">Explore More Website Development Services</h2>
        <Row gutter={[15,30]} className=" justify-center pb-20" style={{borderBottom:'2px solid #dadbdd'}}>
        {handelExplore(exploreMore)}
    </Row>
    </div>
  )
}
