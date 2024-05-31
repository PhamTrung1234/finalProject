import { Col, Row } from "antd";
import { handelNavMenu } from "../../Headers/ButtonModal/NavMenu/Roots";
import { about, business, categories, community, support } from "../Roots";
import { memo } from "react";

 function FooterMd() {
  return (
    <Row className="container FooterMd pb-4 pt-20" style={{borderTop:"2px solid #b5b6ba"}}>
      <Col xs={0} sm={8} lg={{flex:'20%'}}>
        <ul className="pl-0">
            <li><h4>Categories</h4></li>
            {handelNavMenu(categories)}
        </ul>
      </Col>
      <Col xs={0} sm={8} lg={{flex:'20%'}}>
        <ul className="pl-0">
            <li><h4>About</h4></li>
            {handelNavMenu(about)}
        </ul>
      </Col>
      <Col xs={0} sm={8} lg={{flex:'20%'}}>
         <ul className="pl-0">
            <li><h4>Support and Education</h4></li>
            {handelNavMenu(support)}
         </ul>
      </Col>
      <Col xs={0} sm={8} lg={{flex:'20%'}}>
         <ul className="pl-0">
            <li><h4>Community</h4></li>
            {handelNavMenu(community)}
         </ul>
      </Col>
      <Col xs={0} sm={8} lg={{flex:'20%'}}>
         <ul className="pl-0">
            <li><h4>Business Solutions</h4></li>
            {handelNavMenu(business)}
         </ul>
      </Col>
      
    </Row>
  )
}

export default memo(FooterMd)