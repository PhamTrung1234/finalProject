import { Col, Row } from "antd";
import "../style.css"
export default function DetailAbout() {
  return (
    <div className="py-5 DetailAbout">
      <h3>About this gig</h3>
      <p>Hi,</p>
      <p>
        Thanks for visiting my Gig. Before going to read details; 
        <span className="font-bold ml-1">Please message me before you place an order</span> so I can guide
        you better on your project.
      </p>
      <p>
        In this Gig, I will provide you Laravel / Codeignitor Web Application or
        API Integration as well as Full Stack Development
      </p>
      <p>
        With my over <span className="font-bold">7+ years experience in web development</span> using
        mostly laravel / Codeignitor:
      </p>
      <ul>
        <li>Installing Laravel / Codeignitor to your Web Hosting</li>
        <li>Developing websites and web applications from the scratch</li>
        <li>Adding new features to your laravel / Codeignitor application </li>
        <li>Laravel / Codeignitor bug fixing</li>
        <li>API integration </li>
        <li>Connecting with databases </li>
        <li>Manage Cron Jobs</li>
        <li>Paypal integration </li>
        <li>E-Commerce</li>
        <li>Management portals</li>
        <li>Back end Task</li>
        <li>AJAX JQUERY</li>
        <li>Discussion Forums</li>
        <li>Social Login</li>
        <li>Any other related web development using laravel / Codeignitor</li>
      </ul>
      <Row className="justify-between">
        <Col span={6}>
          <h6>Website type</h6>
          <h5>Landing page</h5>
        </Col>
        <Col span={6}>
          <h6>Programming language</h6>
          <h5>HTML & CSS JavaScript PHP TypeScript Bootstrap</h5>
        </Col>
        <Col span={6}>
          <h6>Website features</h6>
          <h5>
            Marketing Payment Forum Customer support Inventory Analytics Form
            Map Portfolio Dashboard
          </h5>
        </Col>
      </Row>
    </div>
  );
}
