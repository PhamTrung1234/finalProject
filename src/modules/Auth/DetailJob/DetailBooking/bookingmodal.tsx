import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd'
import { useEffect, useState } from 'react'
import "../style.css"
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../store/hook';
import dayjs from 'dayjs';
import { usePostJobHired } from '../../../../apis/CallApiJobHired/jobhire';
export default function BookingModal(props:any) {
    const {id} = useParams();
    const user = useAppSelector(state=>state.currentUser.user)
    const [open, setOpen] = useState(false);
    const [quantity,setQuantity] = useState(1)
    const {show,price,found} = props;

    const {mutate:postJob} = usePostJobHired() 

    useEffect(()=>{
          setOpen(found)
    },[found])
    const onClose = () => {
      setOpen(false);
      props.onClose(false)
    };
    
    const title = ()=>{
        if(show===1){
            return ('Basic')
        }else if(show===2){
            return('Standard')
        }else if(show===3){
            return ("Premium")
        }
    }
    const onClickQuantity =(found:boolean)=>{
        if(found){
            setQuantity(quantity +1);
        }else{
            if(quantity>1){
                setQuantity(quantity-1);
            }
        }
    }
    const priceBooking = ()=>{
        if(show===1) {
            return (price*quantity)
        }else if(show===2 || show===3){
            return (price*quantity*90/100)
        }
    }
    const today = new Date();
   
    const success = () => {
        const formData = {
            id:0,
            maCongViec:id,
            maNguoiThue:user?.id,
            ngayThue:dayjs(today).format("DD/MM/YYYY"),
            hoanThanh:false
        }
        postJob(formData);
        
        setOpen(false);
        props.onClose(false)
        
        
      };
  return (
    <div className='BookingModal'>
       <Drawer title="Order options" onClose={onClose} open={open}>
        <p className='flex justify-between'><span className='text-lg  font-semibold'>{title()}</span> <span className='text-base font-normal'>{priceBooking()} $</span></p>
        <p className='text-sm font-normal'><span className='  font-semibold'>Minimalist Logo Design {title()}</span> Our agency will do modern, minimalist and business logo design</p>
        <h5 className='font-semibold text-base'>How often do you need this order?</h5>
        <div>
            <p className='flex justify-between'><span className='text-base font-semibold'>Single order</span><span className='text-base font-normal'>{priceBooking()} $</span></p>
            <div className='flex justify-between text-base'>
                <span >Gig Quantity</span>
                <div><button onClick={()=>{onClickQuantity(false)}}><LeftCircleOutlined /></button>
                <span className='px-3'>{quantity}</span>
                <button onClick={()=>{onClickQuantity(true)}}><RightCircleOutlined /></button></div>
            </div>
        </div>
        <div className='DetailBooking__button flex justify-center pt-4'>
        
      
        <Button onClick={success}>Continue ({priceBooking()}$)</Button>
      
      
        </div>
      </Drawer>
    </div>
  )
}
