import { Col, Row } from 'antd'
import TitelSearch from './TitelSearch'
import NavCarousel from './NavCarousel'


export default function CarouselTitel() {
  return (
    <Row className='container'>
        <Col xs={24} lg={16} xl={12}>
          <h1 className='text-white'>Find the right <i>freelance</i> service, right away</h1>
          <TitelSearch/>
          <NavCarousel/>
        </Col>
        
    </Row>
  )
}

