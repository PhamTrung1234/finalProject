import { Col, Row } from "antd";
import CarouselTitel from "./CarouselTitle";


export default function HomeCarousels() {
  return (
    <div >
        <Row>
       <Col span={24} className="HomeCarousel__left  items-center flex">
          
          <CarouselTitel/>
          
          
       </Col>
       
    </Row>
    </div>
  )
}
