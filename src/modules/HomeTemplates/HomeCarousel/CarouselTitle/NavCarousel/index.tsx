import { Col, Row } from "antd";
import { Link } from "react-router-dom";


export default function NavCarousel() {
  return (
    <Row className="NavCarousel">
        <Col xs={0} lg={24}>
            <ul className="text-white pl-0">
                <li><h4 className="text-sm">Popular: </h4></li>
                <li><Link to={"/auth/detail/7"}>Website Design</Link></li>
                <li><Link to={"/auth/detail/7"}>WordPress</Link></li>
                <li><Link to={"/auth/detail/7"}>Logo Design</Link></li>
                <li><Link to={"/auth/detail/7"}>AI Services</Link></li>
            </ul>
        </Col>
    </Row>
  )
}
