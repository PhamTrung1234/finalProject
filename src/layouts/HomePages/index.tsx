

import Footer from '../../component/Footer'
import FooterEnd from '../../component/FooterEnd'
import Header from '../../component/Headers'
import { Outlet } from 'react-router-dom'

export default function HomePages() {
   
  return (
    <>
       <Header/>
       <Outlet/>
       <Footer/>
       <FooterEnd/>
    </>
  )
}
