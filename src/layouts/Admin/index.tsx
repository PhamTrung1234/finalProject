import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  
  CodeSandboxOutlined,
  CustomerServiceOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu, Tag, theme } from "antd";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { setCurrenUser } from "../../store/Slice/counterSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";


const { Header, Sider, Content } = Layout;

export default function AdminLayout() {
  const {user} = useAppSelector(state=>state.currentUser)
  
  if(!user || user.role === "USER" ){
   return   <Navigate to={"/"}/>
  }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  
  const items = [
    {
      key: "1",
      label: <span> User: <Tag color="green-inverse">{user?.name}</Tag> </span>,
    },
    {
      key: "1",
      label: <Button type="link" onClick={()=>{
        
        navigate("/");
      }}>Home Page</Button>, 
    },
    {
      key: "2",
      label: <Button onClick={()=>{
        localStorage.removeItem("user");
        dispatch(setCurrenUser(null));
        navigate("/");
      }}>Đăng xuất</Button>,
    },
  ];

  

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed} width={230}>
        <Link to={"/admin"}>
          <div className="h-[72px] mt-4 mb-4 my-1 text-white flex items-center justify-center">
            <img src="/vite.svg" width={100} className="cursor-pointer" />
          </div>
        </Link>
        <Menu
          theme="dark"
          mode="inline"
          className="pt-1"
          defaultSelectedKeys={[location.pathname]}
          items={[
            {
              key: "/admin/user-management",
              icon: <UserOutlined />,
              label: "Quản lý người dùng",
            },
            
            {
              key: "/admin/Work",
              icon: <CodeSandboxOutlined />,
              label: "Quản lý Công Việc",
            },
            {
              key: "/admin/Type-work",
              icon: <AppstoreOutlined />,
              label: "Quản lý loại công việc",
            },
            {
              key: "/admin/services-management",
              icon: <CustomerServiceOutlined />,
              label: "Quản lý dịch vụ",
            },
            // {
            //   key: "/admin/account-settings",
            //   icon: <SettingOutlined />,
            //   label: "Cài đặt",
            // },
          ]}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex items-center justify-between">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="h-[64px] w-[64px]"
            />
            <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
              <div className="pr-4">
                <Avatar
                  size={"large"}
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: "scroll",
          }}
        >
          <Outlet />
          
        </Content>
        
      </Layout>
    </Layout>
  );
}
