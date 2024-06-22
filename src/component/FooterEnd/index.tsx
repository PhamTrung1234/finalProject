import {
 
  GlobalOutlined,
  
} from "@ant-design/icons";
import { useWindowSize } from "@uidotdev/usehooks";
import { Col, Row } from "antd";
import { memo } from "react";
import BackToTop from "../backtotop";
 function FooterEnd() {
  const size = useWindowSize();

  return (
    <>
    <Row className={size.width && size.width<=600 ? "container items-center py-3 FooterEnd justify-center" : "container items-center py-3 FooterEnd justify-between"}  style={{borderTop:"2px solid #b5b6ba"}}>
      <Col >
        <Row className="items-center justify-between">
          <Col lg={8} xl={6}>
            <p className="text-center">
              <img src="/svg/logodown.svg" alt="logodown" />
            </p>
          </Col>
          <Col lg={16} xl={18}>
            <p className="text-center mb-lg-2">
              <span className="text-sm whitespace-nowrap" style={{ color: "#b5b6ba" }}>
                © Fiverr International Ltd. 2024
              </span>
            </p>
          </Col>
        </Row>
      </Col>
      <Col >
       <Row className={size.width && size.width <=600 ? "items-center justify-center" : "items-center"} >
         <Col >
         <Row >
          <Col>
            <p className="btn mb-0 clear-padding">
              <img src="/svg/logo1.svg" alt="logo1" />
            </p>
          </Col>
          <Col>
            <p className="btn mb-0" >
              <img src="/svg/logo2.svg" alt="logo2" />
            </p>
          </Col>
          <Col>
            <p className="btn mb-0">
             <img src="/svg/logo3.svg" alt="logo3" />
            </p>
          </Col>
          <Col>
            <p className="btn mb-0">
              <img src="/svg/logo4.svg" alt="logo4" />
            </p>
          </Col>
          <Col>
            <p className="btn mb-0">
              <img src="/svg/logo5.svg" alt="logo5" />
            </p>
          </Col>
          <Col>
            <p className="btn mb-0">
              <img src="/svg/logo6.svg" alt="logo6" />
            </p>
          </Col>
        </Row>
         </Col>
         <Col >
         <Row className="mb-0.5">
            
          <Col >
            <p className="btn mb-0 ">
              <GlobalOutlined className="text-[#74767e]"/>
              <span className="pl-2 text-sm text-[#74767e]">English</span>
            </p>
          </Col>
          <Col >
            <p className="btn mb-0 text-sm "><span className="text-[#74767e]">US$ USD</span></p>
          </Col>
          <Col >
            <p className="btn mb-0 ">
              <img src="/svg/logo7.svg" alt="logo7" />
            </p>
          </Col>
        </Row>
         </Col>
       </Row>
      </Col>
      
    </Row>
    <BackToTop/>
    </>
  );
}
export default memo(FooterEnd)