
import { useWindowScroll } from "@uidotdev/usehooks";
import ModalSignin from "../../component/Headers/ModalSignin";
import HomeBanner from "./HomeBanner";
import HomeCarousels from "./HomeCarousel";
import HomeContact from "./HomeContact";
import HomeIdea from "./HomeIdeal";
import HomeTrusted from "./HomeTrusted";
import NavBarHeader from "../../component/NavBarHeader";



export default function HomeTemplates() {
  const user = localStorage.getItem('user')
  
  const [{y}] = useWindowScroll();
  
  if(!user){
    return(
      <>
      
      <ModalSignin found={true}/>
      {y&& y>100&&(
        <div className=" NavBarHeader " >
          <div className="container">
          <NavBarHeader/>
          </div>
        </div>
      )}
      <HomeCarousels/>
      <HomeTrusted/>
      <HomeBanner/>
      <HomeIdea/>
      <HomeContact/>
    </>
    )
     
  }
  return (
    <>
      {y&& y>100&&(
        <div className=" NavBarHeader " >
          <div className="container">
          <NavBarHeader/>
          </div>
        </div>
      )}
      <HomeCarousels/>
      <HomeTrusted/>
      <HomeBanner/>
      <HomeIdea/>
      <HomeContact/>
    </>
  )
}
