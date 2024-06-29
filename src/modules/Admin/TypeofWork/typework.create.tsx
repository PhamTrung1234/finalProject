import { Modal, Button, Form, Input, message } from "antd"
import form from "antd/es/form";
import { useState } from "react";
import { useCreateTypeJob, useUpdateTypeJob } from "../../../apis/CallApiMaLoaiCongViec/typejob";

type WorkFormProps={
    formData?: any,
    onclose: ()=>void
}

export default function WorkTypeForm({formData,onclose}:WorkFormProps) {
    const [loading,setloading]=useState<boolean>(false);
    const [form]=Form.useForm();
    const {mutateAsync:handleCreteTypeJob}=useCreateTypeJob(onclose);
    const {mutateAsync:updateTypeJob}=useUpdateTypeJob(onclose)
    const submitHandle=async()=>{
        const values=await form.validateFields();
        try{
            if(formData){
                const updateData:any={
                  ...formData,
                 id:values.id,
                 tenLoaiCongViec:values.tenLoaiCongViec
                }
                await updateTypeJob(updateData)
                setloading(false);
              }else{
                const createData:any={
                  ...values,
                  
                };
                // await createInvoice(createData);
                await handleCreteTypeJob(createData)
                setloading(false);
                
              }
        } catch (error:any) {
          message.error(error.message || error);
          console.log(error);
          setloading(false);
        }
    }
  return (
    <div>
        <Modal
        title={formData?.invoiceId?"Edit Type Job":"Create Type Job"}
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
