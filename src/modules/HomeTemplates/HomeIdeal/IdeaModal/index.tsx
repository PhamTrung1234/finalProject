import  { useState } from 'react';
import { Button, Modal } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import "../style.css"
export default function IdeaModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button  onClick={showModal} className='h-auto'>
        <div className='modal__img'>
        <img className='rounded-lg' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="..." />
        <div className='modal__icon text-white'><CaretRightOutlined /></div>
        </div>
      </Button>
      <Modal className='modal_idea' title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={"70%"} >
      <video width={"100%"}  className='rounded-lg ' autoPlay controls>
            <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" ></source>
            </video>
      </Modal>
    </>
  )
}
