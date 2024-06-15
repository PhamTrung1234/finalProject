import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { postSignIn } from '../../../../../apis/CallApiPostSignUp';

import { useAppDispatch } from '../../../../../store/hook';
import { setCurrenUser } from '../../../../../store/Slice/counterSlice';
import { useEffect, useState } from 'react';

type FieldType = {
    email?: string;
    password?: string;
    // remember?: string;
  };
export default function Signin(props:any) {
   const dispatch = useAppDispatch();
   const [rememberMe,setRemember] = useState(false)
   const {mutate:loginUser,data } = postSignIn()
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        
        if(values.email&&values.password){
          const formData={
            email:values.email,
            password:values.password
          }
          loginUser(formData)
        }
        
       
      };
    
  useEffect(()=>{
    
    if(data ){
      props.onClose(false)
      if(rememberMe){
        localStorage.setItem("user",data.content.token);
        dispatch(setCurrenUser(data.content.token));
      }else{
        dispatch(setCurrenUser(data.content.token));
      }
    }
    
  },[data])
     
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    
    autoComplete="off"
  >
    <Form.Item<FieldType>
       name="email"
       label="E-mail"
       rules={[
         {
           type: "email",
           message: "The input is not valid E-mail!",
         },
         {
           required: true,
           message: "Please input your E-mail!",
           min:12,
         },
       ]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
     
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox onChange={(e)=>{setRemember(e.target.checked)}}>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}
