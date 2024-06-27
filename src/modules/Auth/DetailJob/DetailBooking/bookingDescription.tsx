import { ArrowRightOutlined, CheckOutlined, FieldTimeOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Collapse, CollapseProps } from "antd";
import { useState } from "react";

import "../style.css"
import ModalSignin from "../../../../component/Headers/ModalSignin";
import { useAppSelector } from "../../../../store/hook";
import BookingModal from "./bookingmodal";

export const handelBookingDescription = (found: number,price:number) => {
    const user = useAppSelector((state)=>state.currentUser.user)
    const included = (found:number) =>{
        return (
            <div>
           <ul>
            <li><CheckOutlined />   {found===1 && (3)} {found===2&& (4) }{found===3 && (5)} concepts included</li>
            <li><CheckOutlined />   Logo transparency</li>
            <li><CheckOutlined />   Vector file</li>
            <li><CheckOutlined />   Printable file</li>
            <li><CheckOutlined />   Include 3D mockup</li>
            <li><CheckOutlined />   Include source file</li>
            <li><CheckOutlined />   Stationery designs</li>
            <li><CheckOutlined />   Include social media kit
            </li>
           </ul>

        </div>
        )
    }
    const items1: CollapseProps['items'] = [
        {key:1,label:"What's Included",children:included(1)}
    ]
    const items2: CollapseProps['items'] = [
        {key:2,label:"What's Included",children:included(2)}
    ]
    const items3: CollapseProps['items'] = [
        {key:3,label:"What's Included",children:included(3)}
    ]
    const [open, setOpen] = useState(false);
    
  const showDrawer = () => {
    setOpen(!open);
  };
  const callbackMOdal= (found:boolean)=>{
    setOpen(found)
  }
  const onchangeShow = (found:boolean)=>{
    setOpen(found);
  }
  return (
    <div className="px-3">
      {found === 1 && (
        <div className="DetailBooking__items">
          <h3>US${price}</h3>
          <p>
            <span className="font-bold">Logo Design Starter</span> 2 Basic logo
            designs JPEG/PNG/Vector/Sources. (*Check out Extras*)
          </p>
          <div className="font-bold text-base" style={{color:"#62646a"}}>
            <span>
              <FieldTimeOutlined /> 3-day delivery
            </span>
            <span className="ml-3">
              <SyncOutlined /> 5 Revisions
            </span>
            
          </div>
          <div className="DetailBooking__Basic py-3">
          <Collapse items={items1}   />
          </div>
        </div>
      )}
      {found === 2 && (
        <div className="DetailBooking__items">
          <h3>US${price*90/100}</h3>
          <span>US${price}</span>
          <p>
            <span className="font-bold">Logo Design Starter</span> 2 Basic logo
            designs JPEG/PNG/Vector/Sources. (*Check out Extras*)
          </p>
          <div className="font-bold text-base"style={{color:"#62646a"}}>
            <span >
              <FieldTimeOutlined /> 3-day delivery
            </span>
            <span className="ml-3">
              <SyncOutlined /> 9 Revisions
            </span>
          </div>
          <div className="DetailBooking__Standard py-3">
          <Collapse items={items2}   />
          </div>
        </div>
      )}
      {found === 3 && (
        <div className="DetailBooking__items">
          <h3>US${price*90/100}</h3>
          <span>US${price}</span>
          <p>
            <span className="font-bold">Must Have & Branding</span> 4 logo
            designs + All Files+Sources+ Social Kit+ 3DMockup+Stationery design
          </p>
          <div className="font-bold text-base" style={{color:"#62646a"}}>
            <span >
              <FieldTimeOutlined />  3-day delivery
            </span>
            <span className="ml-3">
              <SyncOutlined /> Unlimited Revisions
            </span>
          </div>
          <div className="DetailBooking__Premium py-3">
          <Collapse items={items3}   />
          </div>
        </div>
      )}
      <div className=" mt-3 DetailBooking__button">
      <Button onClick={showDrawer} className="px-0">
        <span>Continue <ArrowRightOutlined /></span>
      </Button>
      {user ? (<BookingModal found={open} price = {price}  show = {found} onClose= {onchangeShow}/>):(
        <ModalSignin found={open} callbackMOdal={callbackMOdal}/>
      )}
      
      
      </div>
    </div>
  );
};
