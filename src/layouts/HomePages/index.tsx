

import Footer from '../../component/Footer'
import FooterEnd from '../../component/FooterEnd'

import { Outlet } from 'react-router-dom'
import Header from '../../component/Headers'

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
