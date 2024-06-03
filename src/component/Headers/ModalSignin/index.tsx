import { Modal } from "antd";
import {  useEffect, useState } from "react";
type Props= {
    found: boolean;
    callbackMOdal?:(data: boolean)=> void ;
}

export default function ModalSignin(props:Props) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
   useEffect(()=>{
    if(props.found){
        setIsModalOpen(true)
    }else{
        setIsModalOpen(false)
    }
   },[props.found])
    
   
    const handleOk = () => {
        setIsModalOpen(false);
        props.callbackMOdal?.(false)
      };
    
      const handleCancel = () => {
        setIsModalOpen(false); 
        props.callbackMOdal?.(false)
      };
      
  return (
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    vui quá ha
  </Modal>

  )
}
