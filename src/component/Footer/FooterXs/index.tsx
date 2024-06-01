import { Col, Row } from "antd";
import { handelNavMenu } from "../../Headers/ButtonModal/NavMenu/Roots";
import { about, business, categories, community, support } from "../Roots";
import { memo } from "react";

 function FooterXs() {
  return (
   <Row className="container">
    <Col xs={24} sm={0}>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      Categories
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>{handelNavMenu(categories)}</ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      About
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>{handelNavMenu(about)}</ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Support and Education
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>{handelNavMenu(support)}</ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
      Community
      </button>
    </h2>
    <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>{handelNavMenu(community)}</ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
      Business Solutions
      </button>
    </h2>
    <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>{handelNavMenu(business)}</ul>
      </div>
    </div>
  </div>
</div>
    </Col>
   </Row>

  )
}

export default memo(FooterXs)