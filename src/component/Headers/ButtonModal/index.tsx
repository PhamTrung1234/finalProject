import { useState } from "react";
import { Button, Drawer } from 'antd';
import { MenuOutlined } from "@ant-design/icons";
import NavMenu from "./NavMenu"; 
import { Link } from "react-router-dom";

export default function ButtonModal() {
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
  
    const showLoading = () => {
      setOpen(true);
      
      setTimeout(() => {
        setLoading(false);
      }, 0);
    };
  return (
    <>
    <Button onClick={showLoading} id="reset-button">
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
      <Link to={"/"} className="ml-4 bg-slate-950 text-white py-3 px-5 rounded-lg text-base">
      Join Fiverr
      </Link>
      <NavMenu/>
      
    </Drawer>
  </>
  )
}