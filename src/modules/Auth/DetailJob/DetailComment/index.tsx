import { useQuery } from "@tanstack/react-query";
import "../style.css";
import { fecthComment } from "../../../../apis/CallApiComment";

import { Rate } from "antd";

import dayjs from "dayjs";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

type Props = {
  id: string;
};
type Comment = {
  avatar:string;
  id:number;
  ngayBinhLuan:string;
  noiDung:string;
  saoBinhLuan:number;
  tenNguoiBinhLuan:string;
};
export default function DetailComment(props: Props) {
 
  const { data } = useQuery({
    queryKey: ["comment"],
    queryFn: () => fecthComment(props.id),
  });
  

  
 
  const today = new Date();
  const [found1, setFound1] = useState(false);
  const [found2, setFound2] = useState(false);
  const randomColor = `#${Math.floor(Math.random() * 999999)}`;
  let count1 = 0;
  
  const onClickLike = (event:any)=>{
      count1 ++;
      if(count1%2===0){
          event.target.style.color = ""
      }else{
          event.target.style.color = "#1dbf73"
      }

  }
  const onClickDisLike = (event:any)=>{
    console.log(event.target.checked)
  if(event.target.checked){
    event.target.style.color = "red"
  }else{
    event.target.style.color = ""
  }

}
  const handelComment = () => {
    if(data){
      const listcComment = data.content;
      if ( listcComment.length <= 0) {
        return (
          <div className="pb-5" >
            <div className="flex items-center">
              <img
                className="comment__logo"
                src="https://floridapolitics.com/wp-content/uploads/2015/10/Donald-Trump-10-%E2%80%93-26-copy-1024x1024.jpg"
                alt="trump"
              />
              <span className="font-bold text-lg pl-3">Donal Trump</span>
            </div>
            <div className="flex items-center py-3">
              <span>
                <Rate
                  defaultValue={5}
                  disabled={true}
                  style={{ color: "#404145" }}
                />
              </span>{" "}
              <span className="text-base pl-5">
                {dayjs(today).format("DD/MM/YYYY")}
              </span>
            </div>
            <p className="text-base">
              This was perfectly executed. This artist went the extra mile to
              address and change things. Our small group will be using here for
              our shirts and other stuff. The best part is she is creative and
              quick with getting back you and making everything smooth.
            </p>
  
            <div className="flex items-center font-bold">
              <span>Helpful?</span>
              <button
                onClick={() => {
                  if (!found2) setFound1(!found1);
                }}
                className="px-3"
              >
                {found1 ? (
                  <span style={{ color: "#1dbf73" }}>
                    <LikeOutlined /> Yes
                  </span>
                ) : (
                  <span>
                    <LikeOutlined /> Yes
                  </span>
                )}{" "}
              </button>
              <button
                onClick={() => {
                  if (!found1) setFound2(!found2);
                }}
              >
                {" "}
                {found2 ? (
                  <span style={{ color: "red" }}>
                    <DislikeOutlined /> No
                  </span>
                ) : (
                  <span>
                    <DislikeOutlined /> No
                  </span>
                )}
              </button>
            </div>
          </div>
        );
      } else  {
        return listcComment.map((items: Comment) => {
          
          const date = dayjs(items.ngayBinhLuan).format("DD/MM/YYYY")
          
          const newdate = date ==="Invalid Date" ?`${items.ngayBinhLuan}`:date
          const logouser = items.tenNguoiBinhLuan.trim().charAt(0).toUpperCase();
          return (
            <div className="pb-5" key={items.id}>
              <div className="flex items-center">
                {items.avatar ? (
                  <img className="comment__logo" src={items.avatar} alt="trump" />
                ) : (
                  <div
                    className="comment__logo"
                    style={{ backgroundColor: `${randomColor}` }}
                  >
                    {logouser}
                  </div>
                )}
                <span className="font-bold text-lg pl-3">{items.tenNguoiBinhLuan}</span>
              </div>
              <div className="flex items-center py-3">
                <span>
                  <Rate
                    defaultValue={5}
                    disabled={true}
                    style={{ color: "#404145" }}
                  />
                </span>{" "}
                <span className="text-base pl-5">
                  {newdate}
                </span>
              </div>
              <p className="text-base">
                {items.noiDung}
              </p>
  
              <div className="flex items-center font-bold">
                <span>Helpful?</span>
                <button
                  onClick={onClickLike}
                  
                  className="px-3 button__like"
                >
                <span>
                      <LikeOutlined /> Yes
                    </span>
                </button>
                <button
                onClick={onClickDisLike}
                  className="button__dislike"
                >
                  <div>
                  <label htmlFor={`dislike__${items.id}`}>
                  <span>
                      <DislikeOutlined /> No
                      
                    </span>
                  </label>
                    <input type="checkbox" className="hidden" id={`dislike__${items.id}`}/>
                  </div>
                </button>
              </div>
            </div>
          );
        });
      }
    }
    
  };
  return <div className="pt-5">{handelComment()}</div>;
}
