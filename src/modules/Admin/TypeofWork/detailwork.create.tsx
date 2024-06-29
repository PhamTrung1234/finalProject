import { Modal, Button, Input,Form, message } from 'antd'
import { useState } from 'react';
import { useCreateDetailTypeJob } from '../../../apis/CallApiMaLoaiCongViec/typejob';



type detailFormProps={
    formData?: any,
    onclose:()=>void
}

export default function DetailFormWork({formData,onclose}:detailFormProps) {
    const [form] = Form.useForm();
    const [loading,setloading]=useState(false);
    const submitHandle=async()=>{
        const values=await form.validateFields();
        try{
            if(formData){
                const updateData:any={
                  ...formData,
                 id:values.id,
                 tenChiTiet:values.tenChiTiet,
                 maLoaiCongViec:values.maLoaiCongViec

                }
               // await updateTypeJob(updateData)
                setloading(false);
              }else{
                const createData:any={
                  ...values,
                  
                };
                // await createInvoice(createData);
                await useCreateDetailTypeJob(createData);
                // await handleCreteTypeJob(createData)
                setloading(false);
                
              }
        }catch (error:any) {
            message.error(error.message || error);
            console.log(error);
            setloading(false);
          }
    }
  return (
    <div>
        <Modal
        title={formData?.id?"Edit Detail Job":"Create Detail Job"}
        open
        onOk={submitHandle}
        onCancel={()=> onclose()}
        footer={[
            <Button key="back" onClick={onclose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={submitHandle}
        >
          Submit
        </Button>,
        ]}
    >
        <Form
            initialValues={formData}
            form={form}
            layout="vertical"
        >
            <Form.Item
                label="Id Loại Công Việc "
                name='id'
                required
                rules={[{required: true, message: "Vui lòng nhập id"}]}
            > 
                <Input/>
            </Form.Item>
            <Form.Item
                label="Id Loại Công Việc "
                name='id'
                required
                rules={[{required: true, message: "Vui lòng nhập id"}]}
            > 
                <Input/>
            </Form.Item>
            <Form.Item
                label="Tên Loại Công Việc"
                name='tenLoaiCongViec'
                required
                rules={[{required: true, message: "Vui lòng nhập tên loại công việc"}]}
            > 
                <Input/>
            </Form.Item>
            
        </Form>

    </Modal>
    </div>
  )
}
