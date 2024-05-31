import { Row } from "antd";
import { handelContact } from "./Root";
import {memo} from 'react'

 function HomeContact() {
  return (
    <div className="container pt-24 pb-14">
      <h3 className="text-3xl font-bold ">You need it, we've got it</h3>
      <Row className="pt-20">
         {handelContact()}
      </Row>
    </div>
  )
}
export default memo(HomeContact)