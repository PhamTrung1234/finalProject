import { Outlet } from "react-router-dom";
import Header from "../../component/Headers";
import Footer from "../../component/Footer";
import FooterEnd from "../../component/FooterEnd";
import NavBarHeader from "../../component/NavBarHeader";




export default function AuthenLayouts() {
    
    
    
  return (
    <>
      <Header found={false}/>
      <div className="NavBarHeader">
      <div className="container ">
      <NavBarHeader/>
      </div>
      </div>
       <Outlet/>
       <Footer/>
       <FooterEnd/>
    </>
  )
}
