import { Button, Col, Dropdown, MenuProps, Row, Space } from "antd";

import { Link } from "react-router-dom";

import { explore, fiverPro, handelNavMenu } from "./ButtonModal/NavMenu/Roots";
import { GlobalOutlined } from "@ant-design/icons";
import ButtonModal from "./ButtonModal";
import { useState } from "react";
import ModalSignin from "./ModalSignin";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setCurrenUser } from "../../store/Slice/counterSlice";
import "./style.css"
export default function Header(props : {found:boolean}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
 console.log(props)
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const callbackMOdal = (data: boolean) => {
    setIsModalOpen(data);
  };
  const user = useAppSelector((state) => state.currentUser.user);
  const dispatch = useAppDispatch();
  const logouser = user?.name.trim().charAt(0).toUpperCase();
  const items: MenuProps["items"] = [
    {
      label: <Link to="/user-detail">thông tin chi tiết</Link>,
      key: "0",
    },
    {
      label: <Button onClick={()=>{
        
        localStorage.removeItem("user");
        dispatch(setCurrenUser(null));
      }}> đăng xuất</Button>,
      key: "1",
    },
  ];
  return (
    <header
      className=" header py-4"
    >
      <div>
        <Row className="container">
          <Col span={8} className="flex items-center">
            <ButtonModal />
            <Link to={"/"}>
            {props?.found ? (<svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>): (
              <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#404145"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>
            )}
            
            </Link>
          </Col>
          <Col span={16}>
            <Row className="justify-end items-center">
              <Col xs={0} md={5}>
                <div className="dropdown">
                  <button
                    className="btn  dropdown-toggle whitespace-nowrap"
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
              <Col xs={0} xl={3} className="responsive__english">
                <button className="btn">
                  <Link to={"/"} className="flex items-center">
                    <GlobalOutlined />
                    <span className="ml-2 whitespace-nowrap">English</span>
                  </Link>
                </button>
              </Col>
              <Col xs={0} lg={7} xl={5}>
                <button className="btn whitespace-nowrap">
                  <Link to={"/"}>Become a Seller</Link>
                </button>
              </Col>
              {!user && (
                <Col xs={6} sm={5} md={4} lg={3}>
                  <Button
                    type="primary"
                    className="header__button"
                    onClick={showModal}
                  >
                    <span
                      className="btn btn-hover-and whitespace-nowrap"
                      style={{ transform: " translateY(-20%)" }}
                    >
                      Sign in
                    </span>
                  </Button>
                  <ModalSignin
                    found={isModalOpen}
                    callbackMOdal={callbackMOdal}
                  />
                </Col>
              )}
              {!user && (
                <Col xs={6} sm={5} md={4} lg={3}>
                  <Button
                    type="primary"
                    className="header__button"
                    onClick={showModal}
                  >
                    <span className="btn btn-end">Join</span>
                  </Button>
                  <ModalSignin
                    found={isModalOpen}
                    callbackMOdal={callbackMOdal}
                  />
                </Col>
              )}
              {user && (
                <Col xs={10} sm={7} md={6} lg={4}>
                  <Dropdown menu={{ items }}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="header__icon--logo"
                    >
                      <Space>
                        
                        <img
                         
                          src={user?.avatar ? (user.avatar):(logouser)}
                          alt="..."
                        />
                        <span className="whitespace-nowrap">{user?.name}</span>
                      </Space>
                    </a>
                  </Dropdown>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </header>
  );
}
