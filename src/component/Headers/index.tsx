import { Col, Row, Input, Space } from "antd";

import { Link } from "react-router-dom";
import ButtonModal from "./ButtonModal";
import { AudioOutlined } from "@ant-design/icons";

import type { SearchProps } from "antd/es/input/Search";

export default function Header() {
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <Row>
      <Col span={8}>
        <Row>
          <Col span={8} className="flex items-center">
            {ButtonModal()}
            <Link to={"/"}>
              <img
                src="https://p.w3layouts.com/demos_new/08-02-2017/seeking-demo_Free/1965003652/web/images/logo.png"
                alt="..."
              />
            </Link>
          </Col>
          <Col span={16}>
            <Space direction="vertical">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
              />
            </Space>
          </Col>
        </Row>
      </Col>
      <Col span={16}>
          
      </Col>
    </Row>
  );
}
