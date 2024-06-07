import { Button, Col, Row } from "antd";

import { Link } from "react-router-dom";




import {
  explore,
  fiverPro,
  
  handelNavMenu,
} from "./ButtonModal/NavMenu/Roots";
import { GlobalOutlined } from "@ant-design/icons";
import ButtonModal from "./ButtonModal";
import { useState } from "react";
import ModalSignin from "./ModalSignin";
import { useWindowScroll } from "@uidotdev/usehooks";



export default function Header() {
 
 const [ {y}] = useWindowScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const callbackMOdal= (data:boolean)=>{
        setIsModalOpen(data)
  }
  
  return (
    <header className="py-4  header" style={{border:'1px solid #e4e5e7'}}>
       <div >
       <Row className="container">
      <Col span={8} className="flex items-center">
      <ButtonModal/>
            <Link to={"/"}>
              <img src="/svg/logoup.svg" alt="" />
            </Link>
      </Col>
      <Col span={16}>
        <Row >
          <Col xs={0} md={6} lg={0}></Col>
          <Col xs={0} md={5}>
            <div className="dropdown">
              <button
                className="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fiverr Pro
              </button>
              <ul className="dropdown-menu">{handelNavMenu(fiverPro)}</ul>
            </div>
          </Col>
          <Col xs={0} md={5}> 
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore
              </button>
              <ul className="dropdown-menu">{handelNavMenu(explore)}</ul>
            </div>
          </Col>
          <Col  xs={0} xl={3} className="responsive__english">
             <button className="btn">
             <Link to={"/"} className="flex items-center">
             <GlobalOutlined />
             <span className="ml-2">English</span>
             </Link>
             </button>
          </Col>
          <Col xs={0} lg={7} xl={5}>
             <button className="btn">
             <Link to={"/"}>
             Become a Seller
             </Link>
             </button>
          </Col>
          <Col xs={11} sm={13} md={0} ></Col>
          <Col  xs={6} sm={5} md={4} lg={3}>
          <Button type="primary" className="header__button" onClick={showModal} >
       <span className="btn" style={{transform:' translateY(-15%)'}}>Sign in</span>
      </Button>
             <ModalSignin found={isModalOpen} callbackMOdal={callbackMOdal}/>
          </Col>
          <Col  xs={6} sm={5} md={4} lg={3}>
          
             
          <Button type="primary" className="header__button" onClick={showModal} >
       <span className="btn btn-end">Join</span>
      </Button>
             <ModalSignin found={isModalOpen} callbackMOdal={callbackMOdal}/>
          
         
         


          </Col>
        </Row>
      </Col>
    </Row>
       </div>
    
    </header>
  );
}
