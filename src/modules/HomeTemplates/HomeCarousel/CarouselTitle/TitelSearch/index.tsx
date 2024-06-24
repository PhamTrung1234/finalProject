
import { Col, Row } from "antd"


import { useForm } from "react-hook-form"
import {  useNavigate } from "react-router-dom"

export default function TitelSearch() {
  const navigate=useNavigate(); 
  const{handleSubmit,register } = useForm()
   const onSubmit = (event:any)=>{
       navigate(`/auth/detail/${event.search}`)
      
   }
   
  return (
   <form  className="py-4 TitelSearch" onSubmit={handleSubmit(onSubmit)}>
    <Row>
      <Col xs={24} md={{flex:'90%'}}>
      <input className="form-control me-2" type="search" placeholder="Search for any service..." aria-label="Search" {...register('search')}/>
      </Col>
      <Col xs={24} md={{flex:'10%'}}>
      <button className="btn btn-outline-success w-full h-100" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#fff" className="bi bi-search ml-2" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
</svg>
</button>
      </Col>
    </Row>
  
  
</form>

  )
}

