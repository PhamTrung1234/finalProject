import { Col, Row } from "antd"
import { memo } from "react"

 function HomeTrusted() {
  return (
    <div className=" HomeTrusted">
      <Row className="items-center justify-center container">
        
         <Col xs={0} xl={3}><span>Trusted by:</span></Col>
         <Col  xs={3}><img width={"50%"} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta2x.b364aec.png" alt="meta" /></Col>
         <Col  xs={3}><img width={"50%"} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google2x.4fa6c20.png" alt="google" /></Col>
         <Col  xs={3}><img width={"50%"} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix2x.6b36ad6.png" alt="nextfit" /></Col>
         <Col  xs={3}><img width={"50%"} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg2x.0d06f7b.png" alt="p&g" /></Col>
         <Col  xs={3}><img width={"50%"} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal2x.d2fa54d.png" alt="paypal" /></Col>
         
    </Row>
    </div>
  )
}
export default memo(HomeTrusted)



