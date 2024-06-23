import {
 
  
  GlobalOutlined,
  GoogleOutlined,
  PinterestOutlined,
  TikTokOutlined,
  TwitterOutlined,
  XOutlined,
  
} from "@ant-design/icons";
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";
import { Col, Row } from "antd";
import { memo } from "react";
import BackToTop from "../backtotop";
 function FooterEnd() {
  const size = useWindowSize();
  const [{y}] = useWindowScroll()
  return (
    <>
    <Row className={size.width && size.width<=600 ? "container items-center py-3 FooterEnd justify-center" : "container items-center py-3 FooterEnd justify-between"}  style={{borderTop:"2px solid #b5b6ba"}}>
      <Col >
        <Row className="items-center justify-between">
          <Col lg={8} xl={6}>
            <p className="text-center">
            <svg width="91" height="27" viewBox="0 0 91 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#7A7D85"><path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#7A7D85"><path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path></g></svg>
            </p>
          </Col>
          <Col lg={16} xl={18}>
            <p className="text-center mb-lg-2">
              <span className="text-sm whitespace-nowrap pl-3" style={{ color: "#b5b6ba" }}>
                 Fiverr International Ltd. 2024
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
            <PinterestOutlined  style={{color:"#74767e",fontSize:"25px"}}/>
            </p>
          </Col>
          <Col>
            <p className="btn mb-0" >
            <TikTokOutlined style={{color:"#74767e",fontSize:"25px"}}/>
            </p>
          </Col>
          <Col>
            <p className="btn mb-0">
            <XOutlined style={{color:"#74767e",fontSize:"25px"}}/>
            </p>
          </Col>
          <Col>
            <p className="btn mb-0">
            <GoogleOutlined style={{color:"#74767e",fontSize:"25px"}}/>
            </p>
          </Col>
          <Col>
            <p className="btn mb-0">
            <TwitterOutlined style={{color:"#74767e",fontSize:"25px"}}/>
            </p>
          </Col>
          <Col>
            <p className="btn mb-0">
            <svg fill="#74767e" width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
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
            <svg width={28} fill="#74767e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/></svg>
            </p>
          </Col>
        </Row>
         </Col>
       </Row>
      </Col>
      
    </Row>
    {y&&y>100&&(<BackToTop/>)}
    </>
  );
}
export default memo(FooterEnd)