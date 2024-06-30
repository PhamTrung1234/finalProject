import { useState } from "react";
import { Button, Drawer } from 'antd';
import { MenuOutlined } from "@ant-design/icons";
import NavMenu from "./NavMenu"; 

import ModalSignin from "../ModalSignin";
import {  useAppSelector } from "../../../store/hook";

export default function ButtonModal() {
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
  
    const showLoading = () => {
      setOpen(true);
      
      setTimeout(() => {
        setLoading(false);
      }, 0);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    const callbackMOdal= (data:boolean)=>{
      setIsModalOpen(data)
}
  const user = useAppSelector(state=>state.currentUser.user)
  const logouser = user?.name?.trim().charAt(0).toUpperCase();
  return (
    <>
    <Button onClick={showLoading} id="reset-button" className="pl-0">
    <MenuOutlined />
    </Button>
    
    <Drawer
      closable
      destroyOnClose
    
      placement="left"
      open={open}
      loading={loading}
      onClose={() => setOpen(false)}
    >
     
      {user ? (
        <div className="header__icon--logo flex items-center">
             {user?.avatar ? (
                             <img
                         
                             src={user.avatar}
                             alt="..."
                           />
                        ):(
                          <div className="header__icon--logo--1 font-bold text-lg"> {logouser}</div>
                        )}
                        
                        <span className="whitespace-nowrap ml-2">{user?.name}</span>
        </div>
      ):(
         <Button className="ButtonModal__modal" type="primary" onClick={showModal}>
         Join Fiverr
         </Button>
      )}
      <ModalSignin found={isModalOpen} callbackMOdal={callbackMOdal}/>
      <NavMenu/>
      
    </Drawer>
  </>
  )
}