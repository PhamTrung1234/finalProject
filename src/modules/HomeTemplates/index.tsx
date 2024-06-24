

import ModalSignin from "../../component/Headers/ModalSignin";
import HomeBanner from "./HomeBanner";
import HomeCarousels from "./HomeCarousel";
import HomeContact from "./HomeContact";
import HomeIdea from "./HomeIdeal";
import HomeTrusted from "./HomeTrusted";




export default function HomeTemplates() {
  const user = localStorage.getItem('user')
  
  
  
  if(!user){
    return(
      <>
      
      <ModalSignin found={true}/>
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
      <HomeCarousels/>
      <HomeTrusted/>
      <HomeBanner/>
      <HomeIdea/>
      <HomeContact/>
    </>
  )
}
