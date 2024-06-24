import React, { useState } from "react";
import { EditOutlined, SaveOutlined, UploadOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Button, Descriptions, Input, Form, Upload, UploadFile, message } from "antd";

export default function UserDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("https://via.placeholder.com/150");
  const [form] = Form.useForm();

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "********",
    phone: "123-456-7890",
    birthday: "1990-01-01",
    gender: true,
    avatar: "https://via.placeholder.com/150",
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    form.setFieldsValue(user);
  };

  const handleSaveClick = () => {
    form.validateFields()
      .then(values => {
        console.log("Updated User Data:", values);
        setIsEditing(false);
      })
      .catch(info => {
        console.log("Validation Failed:", info);
      });
  };

  const handleUploadChange = (info: { file: UploadFile }) => {
    if (info.file.status === 'done') {
      // Assuming the server returns the new avatar URL in the response
      const url = URL.createObjectURL(info.file.originFileObj as Blob);
      setAvatarUrl(url);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-gray-100">
    <div className="shadow-lg w-full max-w-screen-lg bg-white p-6">
      <Form form={form} layout="vertical" onFinish={handleSaveClick} initialValues={user} hideRequiredMark>
        <Row gutter={[16, 16]} align="top">
          <Col span={6} className="text-center pt-20">
              <Upload
                name="avatar"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleUploadChange}
              >
                <Avatar size={200} src={avatarUrl} className="cursor-pointer" />
                <Button
                  icon={<UploadOutlined />}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                >
                  Upload
                </Button>
              </Upload>
          </Col>
          <Col span={18}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <Button
                icon={isEditing ? <SaveOutlined /> : <EditOutlined />}
                type="primary"
                onClick={isEditing ? handleSaveClick : handleEditClick}
              >
                {isEditing ? "Save" : "Edit"}
              </Button>
            </div>
            <Descriptions column={1} bordered>
              <Descriptions.Item label="Email">
                {isEditing ? <Form.Item name="email"><Input /></Form.Item> : user.email}
              </Descriptions.Item>
              <Descriptions.Item label="Password">
                {isEditing ? <Form.Item name="password"><Input.Password /></Form.Item> : user.password}
              </Descriptions.Item>
              <Descriptions.Item label="Phone">
                {isEditing ? <Form.Item name="phone"><Input /></Form.Item> : user.phone}
              </Descriptions.Item>
              <Descriptions.Item label="Birthday">
                {isEditing ? <Form.Item name="birthday"><Input /></Form.Item> : user.birthday}
              </Descriptions.Item>
              <Descriptions.Item label="Gender">
                {isEditing ? (
                  <Form.Item name="gender">
                    <Input />
                  </Form.Item>
                ) : (
                  user.gender ? "Male" : "Female"
                )}
              </Descriptions.Item>
            </Descriptions>
            
          </Col>
        </Row>
      </Form>
    </div>
  </div>
  );
}
