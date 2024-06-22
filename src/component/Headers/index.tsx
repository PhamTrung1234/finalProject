import { Button, Col, Dropdown, MenuProps, Row, Space } from "antd";

import { Link } from "react-router-dom";

import { explore, fiverPro, handelNavMenu } from "./ButtonModal/NavMenu/Roots";
import { GlobalOutlined } from "@ant-design/icons";
import ButtonModal from "./ButtonModal";
import { useState } from "react";
import ModalSignin from "./ModalSignin";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setCurrenUser } from "../../store/Slice/counterSlice";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      className="py-4  header"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 10,
        background: "#fff",
      }}
    >
      <div>
        <Row className="container">
          <Col span={8} className="flex items-center">
            <ButtonModal />
            <Link to={"/"}>
              <img src="/svg/logoup.svg" alt="" />
            </Link>
          </Col>
          <Col span={16}>
            <Row className="justify-end items-center">
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
              <Col xs={0} xl={3} className="responsive__english">
                <button className="btn">
                  <Link to={"/"} className="flex items-center">
                    <GlobalOutlined />
                    <span className="ml-2">English</span>
                  </Link>
                </button>
              </Col>
              <Col xs={0} lg={7} xl={5}>
                <button className="btn">
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
                      className="btn"
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
                          className="comment__logo"
                          src={user?.avatar ? (user.avatar):(logouser)}
                          alt="..."
                        />
                        {user?.name}
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
