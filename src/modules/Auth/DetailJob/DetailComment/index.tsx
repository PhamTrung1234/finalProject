import { useQuery, useQueryClient } from "@tanstack/react-query";
import "../style.css";
import { fecthComment, useAddComment } from "../../../../apis/CallApiComment";

import {  Col, Input,  Rate, Row } from "antd";

import dayjs from "dayjs";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import {  useEffect, useState } from "react";
import "../style.css"
import { useAppSelector } from "../../../../store/hook";
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
    queryKey: [`comment-${props.id}`],
    queryFn: () => fecthComment(props.id),
  });
  const queryClient = useQueryClient()


  const {mutate : addComment,data:newComment} = useAddComment()
  const user = useAppSelector(state=>state.currentUser.user)
  const logouser = user?.name.trim().charAt(0).toUpperCase();
  
  const today = new Date();
  const [found1, setFound1] = useState(false);
  const [found2, setFound2] = useState(false);
  const [lazyLoad,setLazy] = useState(3);

  useEffect(()=>{
    if(newComment){
      queryClient.invalidateQueries({ queryKey: [`comment-${props.id}`] })
    }
  },[newComment])

  
  const onClickLike = (event:any)=>{
    const {id} = event.target
    if(id){
      const lable : any = document.querySelector(`.${id}`)
      const lableDisLike :any = document.getElementById(`dis${id}`)
      
    if(event.target.checked){
      lable.style.color = "#1dbf73";
      lableDisLike.disabled = true;
    }else{
      lable.style.color = "";
      lableDisLike.disabled = false;
    }
    }

  }
  const onClickDisLike = (event:any)=>{
    const {id} = event.target
    
    if(id){
      
      const newid= id.replace("dis","").trim()
      const lable : any = document.querySelector(`.${id}`)
      const lableLike :any = document.getElementById(`${newid}`)
      
    if(event.target.checked){
      lable.style.color = "red";
      lableLike.disabled = true;
    }else{
      lable.style.color = "";
      lableLike.disabled = false;
    }
    }
    

}
  const handelComment = () => {
    let count = 0;
    if(data){
      const listcComment = data.content.slice().reverse();
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
                {toDay}
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
          count++
          const date = dayjs(items.ngayBinhLuan).format("DD/MM/YYYY")
          
          const newdate = date ==="Invalid Date" ?`${items.ngayBinhLuan}`:date
          const logouser = items.tenNguoiBinhLuan.trim().charAt(0).toUpperCase();
          if(count<=lazyLoad){
            return (
              <div className="pb-5" key={items.id}>
                <div className="flex items-center">
                  {items.avatar ? (
                    <img className="comment__logo" src={items.avatar} alt="trump" />
                  ) : (
                    <div
                      className="comment__logo"
                      
                    >
                      {logouser}
                    </div>
                  )}
                  <span className="font-bold text-lg pl-3">{items.tenNguoiBinhLuan}</span>
                </div>
                <div className="flex items-center py-3">
                  <span>
                    <Rate
                      defaultValue={items.saoBinhLuan}
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
                    
                    className="px-3 "
                  >
                  <div>
                    <label htmlFor={`like__${items.id}`}>
                    <span className={`like__${items.id} cursor-pointer`}>
                        <LikeOutlined /> Yes
                      </span>
                    </label>
                    <input type="checkbox" className="hidden" id={`like__${items.id}`} />
                  </div>
                  </button>
                  <button
                  onClick={onClickDisLike}
                    
                  >
                    <div>
                    <label htmlFor={`dislike__${items.id}`}>
                    <span className={`dislike__${items.id} cursor-pointer`}>
                        <DislikeOutlined /> No
                        
                      </span>
                    </label>
                      <input type="checkbox" className="hidden" id={`dislike__${items.id}`}/>
                    </div>
                  </button>
                 
                </div>
              </div>
            );
          }
        });
      }
    }
    
  };
  const [value,setValue] = useState(0);
  const { TextArea } = Input;
  const [comment , setComment] = useState("")
  const toDay  = dayjs(today).format("DD/MM/YYYY")
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   
    setComment(e.target.value)
  };
  return <div className="py-5">
    {handelComment()}
    {data && data.content.length>3 && (
      <div className="flex justify-center mb-3 border-1 border-gray-600">
        <button className="btn" onClick={()=>{setLazy(lazyLoad+3)}}>Xem Thêm</button>
      </div>
    )}
    {user&&(
      <form className="DetailComment__formre">
      
      <Row className="justify-between items-center">
        <Col xs={24} sm={8} className="mb-3">
        <div className="flex items-center">
              <img
                className="comment__logo"
                src={user?.avatar ? (user.avatar):(logouser)}
                alt="trump"
              />
              <span className="font-bold text-lg pl-3">{user?.name}</span>
            </div>
        </Col>
        <Col >
        <div>
       <span className="font-bold text-lg pr-3">Evaluate :</span>
       <Rate value={value} onChange={setValue} style={{color:"#404145"}} />
       </div>
        </Col>
      </Row>
      <TextArea
      className="mt-3"
      value={comment}
      onChange={onChange}
      
      style={{ height: 120, resize: 'none' ,borderColor:"#62646a"}}
    />
      <button disabled={comment?false:true} onClick={(e)=>{e.preventDefault()
        const formData = {
          id:0,
          maCongViec:props.id,
          maNguoiBinhLuan:user.id,
          ngayBinhLuan:toDay,
          noiDung:comment,
          saoBinhLuan:value
    }
       addComment(formData);
       setComment("");
       setValue(0);
      }} type="submit" className="btn DetailComment__buttonasb">
        <i data-visualcompletion="css-img" className="x1b0d499 xi3auck" style={{backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/0uJRGjrhtZ5.png?_nc_eui2=AeGd1ktBBPCNY68qtyTWJb73uKGrgKwm-de4oauArCb516832DmRepe1FSt30wUA36_Mu4TtLa9ZEIN2P4foV2rB")', backgroundPosition: '0px -1223px', backgroundSize: 'auto', width: 16, height: 16, backgroundRepeat: 'no-repeat', display: 'inline-block'}} />

      </button>
    </form>
    )}
    </div>;
}
