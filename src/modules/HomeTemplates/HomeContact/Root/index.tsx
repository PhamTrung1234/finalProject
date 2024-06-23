import { Col } from "antd";

type TypeContact = {
    image:string;
    key:number;
    describe:string;
}

const dataContact: TypeContact[] = [
    {image:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",key:0,describe:"Graphics & Design"},
    {image:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg",key:1,describe:"Digital Marketing"},
    {image:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg",key:2,describe:"Writing & Translation"},
    {image:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg",key:3,describe:"Video & Animation"},
    {image:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg",key:4,describe:"Music & Audio"},
    {image:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",key:5,describe:"Programming & Tech"},
    {image:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg",key:6,describe:"Business"},
    {image:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg",key:7,describe:"Lifestyle"},
    {image:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg",key:8,describe:"Data"},
    {image:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg",key:9,describe:"Photography"},
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