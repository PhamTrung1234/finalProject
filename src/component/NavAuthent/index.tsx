import { Col, Menu, Row, Switch } from "antd";
import { serviceoOptions, sellerDetails, budget, deliveryTime } from "./Roots";

export default function NavAuthent() {
  return (
    <div className="py-5 container px-0">
      <div className=" NavAuthent__left">
        <Row className="items-start">
            <Col xs={24} lg={15}>
            <Row>
          <Col xs={12} lg={6}>
            <Menu
              style={{ width: 170 }}
              mode="inline"
              items={serviceoOptions}
            />
          </Col>
          <Col xs={12} lg={6}>
            <Menu style={{ width: 170 }} mode="inline" items={sellerDetails} />
          </Col>
          <Col xs={12} lg={6}>
            <Menu
              className="budget"
              style={{ width: 170 }}
              mode="inline"
              items={budget}
            />
          </Col>

          <Col xs={12} lg={6}>
            <Menu
              className="Deliverytime"
              style={{ width: 170 }}
              mode="inline"
              items={deliveryTime}
            />
          </Col>
        </Row>
            </Col>
            <Col xs={0} lg={4} xl={6}></Col>
            <Col xs={24} lg={5} xl={3} className="flex items-center mt-2.5">
            <Switch defaultChecked  />
            <span className="pl-2">Pro services</span>
            </Col>
        </Row>
      </div>
    </div>
  );
}
