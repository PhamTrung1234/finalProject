import { Modal } from "antd";
import {  useEffect, useState } from "react";
import SigninDesrc from "./SigninDesrc";
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
      const onClose=(found:boolean)=>{
          setIsModalOpen(found)
      }
  return (
    <Modal className="ModalSignin" width={"70%"} style={{height:'80vh'}} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <SigninDesrc onClose={onClose}/>
  </Modal>

  )
}
