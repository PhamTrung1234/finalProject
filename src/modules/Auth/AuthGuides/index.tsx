import Slider from "react-slick";
import { handelSlick } from "./Roots";
import "./style.css"
export default function AuthGuides() {
    const settings = {
        dots: false,
        
        arrows:false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                 
                }
              },
         
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              
            }
          }
        ]
      };
  return (
    <div className="slider-container pb-5 pt-20 AuthGuides">
    <h2 className="mb-5 uppercase font-bold">Guides related to Website Development</h2>
    <Slider {...settings}>
        {handelSlick()}
    </Slider>
  </div>
  )
}
