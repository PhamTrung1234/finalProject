import { Col } from "antd";

type MenuItems ={
    key:number;
    lable:string;
}

export const exploreMore : MenuItems[]=[
    {key:1,lable:"Website Design"},
    {key:2,lable:"SEO"},
    {key:3,lable:"Website Maintenance"},
    {key:4,lable:"Website Migration"},
    {key:5,lable:"Magento"},
    {key:6,lable:"SiteBuilder"},
    {key:7,lable:"Drupal"},
    {key:8,lable:"Joomla"},
    {key:9,lable:"Opencart"},
    {key:10,lable:"BigCommerce"},
    {key:11,lable:"Dropshipping website development"},
    {key:12,lable:"Education website development"},
    {key:13,lable:"Portfolio Website Development"},
    {key:14,lable:"Blog website development"},
    {key:15,lable:"E-commerce Website Development "},
    {key:16,lable:"Job Board Website Development"},
    {key:17,lable:"Landing Page Development"},
]

export const freelancers :MenuItems[]=[
    {key:18,lable:"Elementor Pro experts"},
    {key:19,lable:"WooCommerce experts"},
    {key:20,lable:"Shopify developers"},
    {key:21,lable:"Website designers"},
    {key:22,lable:"Website developers"},
    {key:23,lable:"Wordpress customization experts"},
    {key:24,lable:"WordPress performance experts"},
    {key:25,lable:"WordPress security experts"},
    {key:26,lable:"Facebook ads experts"},
    {key:27,lable:"Copywriters"},
    {key:28,lable:"Sales copywriters"},
    {key:29,lable:"Business website developers"},
    {key:30,lable:"Website consultants"},
    {key:31,lable:"Wix website designers"},
    {key:32,lable:"Wix SEO experts"},
    {key:33,lable:"Wordpress experts"},
    {key:34,lable:"Wix code experts"},
    
]
export const handelExplore = (array:MenuItems[])=>{
     return array.map((item:MenuItems)=>{
        return (
            <Col key={item.key}>
                <span className=" exploreMore__item">{item.lable}</span>
            </Col>
        )
     })
}