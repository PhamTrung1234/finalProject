import {
 
  GlobalOutlined,
  
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { memo } from "react";
 function FooterEnd() {
  return (
    <Row className="container items-center py-3 FooterEnd" style={{borderTop:"2px solid #b5b6ba"}}>
      <Col span={6}>
        <Row className="items-center">
          <Col lg={8} xl={6}>
            <p className="text-center">
              <img src="/svg/logodown.svg" alt="logodown" />
            </p>
          </Col>
          <Col lg={16} xl={18}>
            <p className="text-center mb-lg-2">
              <span className="text-sm " style={{ color: "#b5b6ba" }}>
                © Fiverr International Ltd. 2024
              </span>
            </p>
          </Col>
        </Row>
      </Col>
      <Col xs={0} xl={6}></Col>
      <Col lg={8} xl={6}>
        <Row>
          <Col span={4}>
            <p className="btn">
              <img src="/svg/logo1.svg" alt="logo1" />
            </p>
          </Col>
          <Col span={4}>
            <p className="btn">
              <img src="/svg/logo2.svg" alt="logo2" />
            </p>
          </Col>
          <Col span={4}>
            <p className="btn">
             <img src="/svg/logo3.svg" alt="logo3" />
            </p>
          </Col>
          <Col span={4}>
            <p className="btn">
              <img src="/svg/logo4.svg" alt="logo4" />
            </p>
          </Col>
          <Col span={4}>
            <p className="btn">
              <img src="/svg/logo5.svg" alt="logo5" />
            </p>
          </Col>
          <Col span={4}>
            <p className="btn">
              <img src="/svg/logo6.svg" alt="logo6" />
            </p>
          </Col>
        </Row>
      </Col>
      <Col lg={8} xl={6}>
        <Row>
            <Col span={2}></Col>
          <Col span={8}>
            <p className="btn">
              <GlobalOutlined />
              <span className="pl-2">English</span>
            </p>
          </Col>
          <Col span={8}>
            <p className="btn">US$ USD</p>
          </Col>
          <Col span={6}>
            <p className="btn">
              <img src="/svg/logo7.svg" alt="logo7" />
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default memo(FooterEnd)