import { Card } from "antd";

type DataSlick = {
    image:string;
    title:string;
    key:number;
}

const dataslick : DataSlick[] = [
    {key:0,image:"https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/f629b1d7ea75a51e7f2badb911c480fa-1665306742078/WEBSITE%20BUILDER.jpeg",title:"10 Best Website Builders for Small Business"},
    {key:1,image:"https://fiverr-res.cloudinary.com/image/upload/w_860/f_auto,q_auto/v1/attachments/generic_asset/asset/8d9c3d1f39b71d7381263ce7f649a117-1663582184994/ecommerce%20platforms.jpeg",title:"Best Ecommerce Platforms for Small Businesses"},
    {key:2,image:"https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/8b1dcc55f5c8582b04aee0b995ae5327-1683590934905/1682363178357-Howtobuildawebsitefromscratch.jpg",title:"How to Build a Website from Scratch (Simple Steps for Beginners)"},
]


export const handelSlick = ()=>{
    return dataslick.map((items:DataSlick)=>{
        return (
           <div key={items.key} className="px-2">
             <Card
    
    style={{ width: "100%" }}
    cover={<img alt="example"  src={items.image} />}
  >
    <h3 className="text-xl font-bold mt-2">{items.title}</h3>
  </Card>
           </div>
        )
    })
}