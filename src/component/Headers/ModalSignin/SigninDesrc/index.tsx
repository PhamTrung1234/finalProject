import { Col, Row } from "antd";
import Signin from "./Signin";
import { useState } from "react";
import Signup from "./Signup";
import { CheckOutlined } from "@ant-design/icons";


export default function SigninDesrc() {
    const [found , setFound] = useState(false)
  return (
    <Row>
        <Col xs={0} md={12}>
            <div className="SigninDesrc__left">
            <img className="rounded-s-lg" style={{height:'80vh'}} width={"100%"} src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/standard.0638957.png" alt="" />
             <div className="SigninDesrc__left--items">
                 <h3 className="font-bold text-3xl mb-5">Success starts here</h3>
                 <p className="text-lg"><CheckOutlined className="mr-2"/>Over 600 categories</p>
                 <p className="text-lg"><CheckOutlined className="mr-2"/>Pay per project, not per hour</p>
                 <p className="text-lg"><CheckOutlined className="mr-2"/>Access to talent and businesses across the globe</p>
             </div>
            </div>
        </Col>
        <Col xs={24} md={12} className="flex justify-center">
            {!found && (
                <div className="flex items-center justify-center flex-col">
                <div>
                    <h3>Sign in to your account</h3>
                    <p>Don’t have an account? <button onClick={()=>{setFound(true)}}>Join here</button></p>
                </div>
                <Signin/>
                
                </div>
            )}
            {found&& (
                <div className="flex items-center justify-center flex-col">
                <div>
                    <h3>Create a new account</h3>
                    <p>Already have an account? <button onClick={()=>{setFound(false)}}>Sign in</button></p>
                </div>
                <Signup/>
                
                </div>
            )}
        </Col>
    </Row>
  )
}
