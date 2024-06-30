import {  dsNhomChiTietLoai } from "../../../types"
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from "react-router-dom";


export default function NavItems(props:any) {
  // console.log(props.data.dsNhomChiTietLoai)
  
  const items: MenuProps['items'] = [];
  const handelItem = ()=>{
      props?.data.dsNhomChiTietLoai.map((item:dsNhomChiTietLoai)=>{ 
        const option : MenuProps['items']=[]
        item.dsChiTietLoai.map((job:{id:number|string,tenChiTiet:string})=>{
           option.push({
            key:job.id,
            label:(
              <Link to={`/auth/detail/${job.id}`}>{job.tenChiTiet}</Link>
            )
          }) 
        })
       
        items.push({
          key:item.id,
          label:item.tenNhom,
          children:option
        })
        
    })
  }
  handelItem();
  if(items.length===0){
    items.push({
      key:100,
      label:(
        <Link to="/auth/list-job">
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
