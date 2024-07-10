import { Card } from "antd";
import { Link } from "react-router-dom";

type CardBanner = {
    title:string;
    descripstion:string;
    image:string;
    key:number
}

const bannerItems :CardBanner[] = [
    {descripstion:'Add talent to AI',title:'AI Artists',key:0,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png'},
    {descripstion:'Build your brand',title:'Logo Design',key:1,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png'},
    {descripstion:'Customize your site',title:'WordPress',key:2,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png'},
    {descripstion:'Share your message',title:'Voice Over',key:3,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png'},
    {descripstion:'Engage your audience',title:'Video Explainer',key:4,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png'},
    {descripstion:'Reach more customers',title:'Social Media',key:5,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png'},
    {descripstion:'Unlock growth online',title:'SEO',key:6,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/27f914ed7984fdd2d55aa1fb5e74bd6a-1690384243592/seo-2x.png'},
    {descripstion:'Color your dreams',title:'Illustration',key:7,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161236/illustration-2x.png'},
    {descripstion:'Go global',title:'Translation',key:8,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/translation-2x.png'},
    {descripstion:'Learn your business',title:'Data Entry',key:9,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161248/data-entry-2x.png'},
    {descripstion:'Showcase your story',title:'Book Covers',key:10,image:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161238/book-covers-2x.png'},
] 


export const handelBanner = ()=>{
    return bannerItems.map(item=>{
        return (
            <Link to={"/auth/list-job"} key={item.key}>
                
    <Card className="card__item ">
       <img className="rounded-lg" src={item.image} alt="..." />
       <div className="card__title text-white">
        <p className="mb-0 text-sm"> {item.descripstion}</p>
        <h3 className="text-2xl">{item.title}</h3>
       </div>
    </Card>
    
  
            </Link>
        )
    })
}