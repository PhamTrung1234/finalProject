import { useWindowScroll } from "@uidotdev/usehooks";
import BookingHomes from "./BookingHome";









export default function DetailBooking(props:any) {
  const [{y}] = useWindowScroll();
  
 
  return (
    
  <div className={y&&y>100&&y<=2000?"ml-5 mt-3 DetailBooking fixed__booking":"ml-5 mt-3 DetailBooking"}>
     <BookingHomes price = {props.price}/>
     
</div>


    
  )
}
