
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import { useAddUPostSignup } from "../../../../../apis/CallApiPostSignUp";
import {  useListUser } from "../../../../../apis/CallApiUser/user";
import { useEffect, useState } from "react";
import { User } from "../../../../../types/user";







export default function Signup(props:any) {
  const { Option } = Select;
 
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const [form] = Form.useForm();
  const {mutate:handelAddUsers,data:newdata} = useAddUPostSignup()
  const {data} = useListUser();

  const [checkEmail,setCheckEmail] = useState("");
  const checkEmaiSignup=(values:string)=>{
      return data?.filter((items:User)=>{
           return items.email === values
      })
  }
  const onFinish = (values: any) => {
    if(checkEmaiSignup(values.email)&&checkEmaiSignup(values.email).length>0){
        setCheckEmail("The Email was registered")
    }else{
      setCheckEmail("")
    }
    if(!checkEmail){
      let newGender = true;
    if(values.gender==="female"){
       newGender= false
    }
    const formData={
      id:0,
      name:values.confirm,
      email:values.email,
      password:values.password,
      phone:`0${values.phone}`,
      birthday:dayjs(values.datepicker).format("DD/MM/YYYY"),
      gender:newGender,
      role:"USERS",
      skill:[""],
      certification:[""]
    }
    handelAddUsers(formData)
    
    }
  };
  useEffect(()=>{
     if(newdata){
      
        props.nextPage(false)
      
     }
  },[newdata])
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+84</Option>
        <Option value="87">+85</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
     
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
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
        <div >
          <Input style={checkEmail?{borderColor:'#ff4d4f'}:{borderColor:""}}/>
        {checkEmail&& (<span style={{color:"#ff4d4f"}}>{checkEmail}</span>)}</div>
      </Form.Item>
      
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
            min:6,
            max:52
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
            min:6,
            max:52,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
            min:6,
            max:32,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please input your phone number!" ,min:9,max:10}]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="datepicker"
        label="Birthday"
        rules={[
          { required: true, message: "Please input your phone Birthday!" },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
