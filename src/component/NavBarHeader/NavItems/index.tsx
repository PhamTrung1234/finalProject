import {  dsNhomChiTietLoai } from "../../../types"
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from "react-router-dom";


export default function NavItems(props:any) {
  
  
  const items: MenuProps['items'] = [];
  const handelItem = ()=>{
      props?.data.dsNhomChiTietLoai.map((item:dsNhomChiTietLoai)=>{ 
        
       
        items.push({
          key:item.id,
          label:(
            <Link to={`/auth/detail/${item.id}`}>
            {item.tenNhom}
            </Link>
          )
        })
        
    })
  }
  handelItem();
  if(items.length===0){
    items.push({
      key:100,
      label:(
        <Link to="/">
           Business 
            </Link>
      )
    })
  }
  
  return (
    <Dropdown menu={{ items }} className="cursor-pointer">
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {props?.data.tenLoaiCongViec}
        
      </Space>
    </a>
  </Dropdown>
  )
}
