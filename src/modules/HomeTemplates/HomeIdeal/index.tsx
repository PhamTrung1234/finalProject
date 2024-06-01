import { Col, Row } from "antd";
import { handelIdea } from "./Root";
import IdeaModal from "./IdeaModal";
import { memo } from "react";

 function HomeIdea() {
  return (
    <div className="HomeIdea py-24">
       <Row className="container items-center">
        <Col xs={24} lg={12}>
            <h2 className="pb-6 text-3xl font-bold">The best part? Everything.</h2>
            <ul className="pl-0">
                {handelIdea()}
            </ul>
        </Col>
        <Col xs={24} lg={12}>
            <IdeaModal/>
            
        </Col>
       </Row>
    </div>
  )
}

export default memo(HomeIdea)