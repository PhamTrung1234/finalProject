import { useState } from "react";
import { Button, Drawer } from 'antd';
import { MenuOutlined } from "@ant-design/icons";

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
    <Button type="primary" onClick={showLoading}>
    <MenuOutlined />
    </Button>
    <Drawer
      closable
      destroyOnClose
    //   title={<p>Loading Drawer</p>}
      placement="left"
      open={open}
      loading={loading}
      onClose={() => setOpen(false)}
    >
      
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </>
  )
}
