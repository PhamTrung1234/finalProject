import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import { fetchJobTypeCode } from "../../apis/CallApiMaLoaiCongViec";
import { MaLoaiCongViec } from "../../types";
import NavItems from "./NavItems";

export default function NavBarHeader() {
   const {isPending,data,error} = useQuery({queryKey:['ma-loai-cong-viec'],queryFn:fetchJobTypeCode})
  
    const settings = {
        dots: false,
        accessibility: false,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows:false,
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              arrows:false,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
        ]
      };
    const handelItems = ()=>{
      
        return data?.content.map((item:MaLoaiCongViec)=>{
          return(
            <NavItems data={item} key={item.id}/>
          )
      })
      
    }
    
   if(isPending|| error) return null   
  return (
    <div className="NavBarHeader py-3">
      <div className="slider-container pt-2 NavBarHeader__content container">
    <Slider {...settings}>
      {handelItems()}
    </Slider>
  </div>
    </div>

  )
}
