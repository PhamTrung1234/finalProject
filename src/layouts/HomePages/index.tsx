

import Footer from '../../component/Footer'
import FooterEnd from '../../component/FooterEnd'
import { Outlet } from 'react-router-dom'
import Header from '../../component/Headers'
import { useWindowScroll, useWindowSize } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import NavBarHeader from '../../component/NavBarHeader'


export default function HomePages() {
   const [found,setfound] = useState(false)
   const [{y}] = useWindowScroll()
   const size = useWindowSize() ;
   const width = size.width ? size.width : 0;
   const scroll = y ? y:0;
   
   useEffect(()=>{
    if(scroll===0 && width>=864){
      setfound(true)
    }else if(scroll>0 && width >=864){
      setfound(false)
    }else if(scroll ===0 && width <864){
      setfound(false)
    }else if(scroll >0 && width <864){
      setfound(false)
    }

   },[scroll,width])

  return (
    <div className='HomePages' >
      <div className={scroll>0 ?"fixed-top-header mt-0 pt-0":"" || width >=864 ?"":"HomePages__block" }>
      <Header found = {found}/>
       {scroll>100&& (<NavBarHeader/>)}
      </div>
       
       <Outlet/>
       <Footer/>
       <FooterEnd/>
    </div>
  )
}
