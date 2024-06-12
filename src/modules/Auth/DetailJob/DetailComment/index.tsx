import { useQuery } from "@tanstack/react-query";
import "../style.css"
import { fecthComment } from "../../../../apis/CallApiComment";
import { fetchUser } from "../../../../apis/CallApiUser";
import { Rate } from "antd";

import dayjs from "dayjs";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { useState } from "react";
type Props = {
    id:string;
}
type Comment = {
    id:number;
    maCongViec:number;
    maNguoiBinhLuan:number;
    ngayBinhLuan:string;
    noiDung:string;
    saoBinhLuan:number;
}
export default function DetailComment(props : Props) {
    const {data} = useQuery({queryKey:['comment'],queryFn:()=>fecthComment(props.id)})
   
    const array = ["5418","5419","5420",'5421']
    const handelarray = ()=>{
        return array.map(item=>{
            const data = useQuery({queryKey:[`user-${item}`],queryFn:()=>fetchUser(item)})
            console.log(data)
        })
    }
    handelarray();
    const listcComment = data?.data.content;
    const today = new Date()
    const [found1 ,setFound1] = useState(false);
    const [found2 ,setFound2] = useState(false);
    const randomColor = `#${Math.floor(Math.random() * 999999)}`
    
   

    const handelComment = ()=>{
       if(listcComment && listcComment.length===0){
         return (
            <div className="py-2.5">
              <div className="flex items-center">
                <img className="comment__logo" src="https://floridapolitics.com/wp-content/uploads/2015/10/Donald-Trump-10-%E2%80%93-26-copy-1024x1024.jpg" alt="trump" />
                <span className="font-bold text-lg pl-3">Donal Trump</span>
              </div>
              <div className="flex items-center py-3"><span>< Rate defaultValue={5} disabled={true} style={{color:"#404145"}} /></span>  <span className="text-base pl-5">{dayjs(today).format('DD/MM/YYYY')}</span></div>
              <p className="text-base">This was perfectly executed. This artist went the extra mile to address and change things. Our small group will be using here for our shirts and other stuff. The best part is she is creative and quick with getting back you and making everything smooth.</p>

              <div className="flex items-center font-bold">
                <span >Helpful?</span>
                <button onClick={()=>{if(!found2) setFound1(!found1)}} className="px-3">{found1 ?(<span style={{color:'#1dbf73'}}><LikeOutlined/> Yes</span>): (<span><LikeOutlined /> Yes</span>)} </button>
                <button onClick={()=>{if(!found1) setFound2(!found2)}}> {found2 ? (<span style={{color:'red'}}><DislikeOutlined /> No</span>):(<span><DislikeOutlined /> No</span>)}</button>
              </div>
            </div>
         )
       }else if(listcComment && listcComment>0){
        return listcComment.map((items:Comment)=>{
            const {data} = useQuery({queryKey:[`user-${items.maNguoiBinhLuan}`],queryFn:()=>fetchUser(items.maNguoiBinhLuan)})
            const user = data?.data.content;
            const logouser = user.name.trim().charAt(0).toUpperCase()
            return(
                <div className="py-2.5">
              <div className="flex items-center">
                {user.avatar ? (<img className="comment__logo" src={user.avatar} alt="trump" />):(<div className="comment__logo" style={{backgroundColor:`${randomColor}`}}>{logouser}</div>)}
                <span className="font-bold text-lg pl-3">{user.name}</span>
              </div>
              <div className="flex items-center py-3"><span>< Rate defaultValue={5} disabled={true} style={{color:"#404145"}} /></span>  <span className="text-base pl-5">{dayjs(today).format('DD/MM/YYYY')}</span></div>
              <p className="text-base">This was perfectly executed. This artist went the extra mile to address and change things. Our small group will be using here for our shirts and other stuff. The best part is she is creative and quick with getting back you and making everything smooth.</p>

              <div className="flex items-center font-bold">
                <span >Helpful?</span>
                <button onClick={()=>{if(!found2) setFound1(!found1)}} className="px-3">{found1 ?(<span style={{color:'#1dbf73'}}><LikeOutlined/> Yes</span>): (<span><LikeOutlined /> Yes</span>)} </button>
                <button onClick={()=>{if(!found1) setFound2(!found2)}}> {found2 ? (<span style={{color:'red'}}><DislikeOutlined /> No</span>):(<span><DislikeOutlined /> No</span>)}</button>
              </div>
            </div>
            )
        })
       }
    }
  return (
    <div className="py-5">
      {handelComment()}
    </div>
  )
}
