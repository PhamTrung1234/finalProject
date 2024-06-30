

import ModalSignin from "../../component/Headers/ModalSignin";
import { useAppSelector } from "../../store/hook";
import HomeBanner from "./HomeBanner";
import HomeCarousels from "./HomeCarousel";
import HomeContact from "./HomeContact";
import HomeIdea from "./HomeIdeal";
import HomeTrusted from "./HomeTrusted";




export default function HomeTemplates() {
  const user = useAppSelector(state=>state.currentUser.user)
  return (
    <>
     <ModalSignin found={user?false:true}/>
      <HomeCarousels />
      <HomeTrusted/>
      <HomeBanner/>
      <HomeIdea/>
      <HomeContact/>
    </>
  )
}
