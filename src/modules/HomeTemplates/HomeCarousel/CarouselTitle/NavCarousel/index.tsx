import { Col, Row } from "antd";
import { Link } from "react-router-dom";


export default function NavCarousel() {
  return (
    <Row className="NavCarousel">
        <Col xs={0} lg={24}>
            <ul className="text-white pl-0">
                <li><h4 className="text-sm">Popular: </h4></li>
                <li><Link to={"/auth/list-job"}>Website Design</Link></li>
                <li><Link to={"/auth/list-job"}>WordPress</Link></li>
                <li><Link to={"/auth/list-job"}>Logo Design</Link></li>
                <li><Link to={"/auth/list-job"}>AI Services</Link></li>
            </ul>
        </Col>
    </Row>
  )
}
