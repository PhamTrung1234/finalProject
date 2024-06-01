import { Col } from "antd";

type TypeContact = {
    image:string;
    key:number;
    describe:string;
}

const dataContact: TypeContact[] = [
    {image:"/svg/anh7.svg",key:0,describe:"Graphics & Design"},
    {image:"/svg/anh4.svg",key:1,describe:"Digital Marketing"},
    {image:"/svg/anh1.svg",key:2,describe:"Writing & Translation"},
    {image:"/svg/anh2.svg",key:3,describe:"Video & Animation"},
    {image:"/svg/anh5.svg",key:4,describe:"Music & Audio"},
    {image:"/svg/anh3.svg",key:5,describe:"Programming & Tech"},
    {image:"/svg/anh8.svg",key:6,describe:"Business"},
    {image:"/svg/anh6.svg",key:7,describe:"Lifestyle"},
    {image:"/svg/anh9.svg",key:8,describe:"Data"},
    {image:"/svg/anh10.svg",key:9,describe:"Photography"},
]


export const handelContact =()=>{
    return dataContact.map(item=>{
        return (
            <Col key={item.key} xs={12} sm={8}  lg={{flex:"20%"}} className="flex flex-col justify-center items-center cursor-pointer pb-10">
                <div className="contact__item ">
                <img width={50} src={item.image} alt="" />
                </div>
                <p>{item.describe}</p>
            </Col>
        )
    })
}