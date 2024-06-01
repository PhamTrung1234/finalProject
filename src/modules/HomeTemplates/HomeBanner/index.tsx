import Slider from "react-slick";
import { handelBanner } from "./Roots";
import { memo } from "react";

 function HomeBanner() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        
        adaptiveHeight:true,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="slider-container container p-0 mb-24">
        <h2 className="mb-6 text-3xl font-bold">Popular services</h2>
      <Slider {...settings}>
      
        {handelBanner()}
       
      </Slider>
    </div>
  )
}
export default memo(HomeBanner)