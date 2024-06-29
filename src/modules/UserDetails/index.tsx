import { useEffect, useState } from "react";
import { CalendarOutlined, CameraOutlined, DeleteOutlined, EditOutlined, EnvironmentOutlined, UploadOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Button, Form, Upload, message, Card } from "antd";
import { useAppSelector } from "../../store/hook";
import { Controller, useForm } from "react-hook-form";
import { useUploadFile } from "../../apis/CallApiUser/user";

export default function UserDetails() {
  const [form] = Form.useForm();

  const {user} = useAppSelector(state=>state.currentUser)
  const { handleSubmit,  watch,control,setValue } = useForm({
    defaultValues: {avatar: undefined,}
  })
  
const hinhAnhValue = watch("avatar");
  const previewImage = (file: File) => {
    return URL.createObjectURL(file);
  };

  
  const {mutate:handleUpload}=useUploadFile()
  
  const onSubmit=(values:any)=>{
    console.log(values.avatar)
    const formFile = new FormData();
    formFile.append("formFile",values.avatar)
   
    handleUpload(formFile);
  }
 
  const memberSince = new Date().toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-lime-400">
      <Card className="profile-card" bordered={false}>
        <div className="profile-header">
          <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
          <Col span={24}>
              <Controller
                name="avatar"
                control={control}
                render={({ field: { onChange, ...filed } }) => {
                  return (
                    <Upload
                      beforeUpload={() => {
                        return false;
                      }}
                      {...filed}
                      showUploadList={false}
                      multiple={false}
                      onChange={({ file }) => onChange(file)}
                    >
                      <Button icon={<UploadOutlined />}>Upload hình</Button>
                    </Upload>
                  );
                }}
              />
              {hinhAnhValue && (
                <div className="mt-2">
                  <img
                    src={
                      typeof hinhAnhValue === "string"
                        ? hinhAnhValue
                        : previewImage(hinhAnhValue)
                    }
                    className="w-[100px] h-[100px] object-cover rounded"
                  />
                  <span
                    className="inline-block ml-3 cursor-pointer"
                    onClick={() => setValue("avatar", undefined)}
                  >
                    <DeleteOutlined />
                  </span>
                </div>
              )}
            </Col>
          </Row>
          <input type="submit"></input>
          </form>
          <div className="profile-status">
            <span className="status-indicator"></span>Online
          </div>
        </div>
        <div className="profile-info text-center">
          <h2 className="profile-name pl-5 ">
            {user?.name}
            <span className="new-badge">NEW</span>
          </h2>
          <h3 className="profile-username">{user?.email}</h3>
          <EditOutlined className="edit-icon" />
          <Button className="profile-button">Preview Fiverr Profile</Button>
        </div>
        <Row className="profile-details">
          <Col span={24}>
            <EnvironmentOutlined className="profile-icon" /> From{" "}
            <span className="profile-detail">Vietnam</span>
          </Col>
          <Col span={24}>
            <CalendarOutlined className="profile-icon" /> Member since{" "}
            <span className="profile-detail">{memberSince}</span>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
