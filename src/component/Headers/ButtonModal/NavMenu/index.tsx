
import { Link } from 'react-router-dom'
import{explore,usd,language,handelNavMenu, fiverPro, bowserCate} from "./Roots/index"
import { GlobalOutlined } from '@ant-design/icons'
export default function NavMenu() {
  return (
   <div className="accordion mt-5" id="accordionExample">
  <div className='accordion-item'>
    <h2 className='accordion-header accordion-body accordion'>
    <Link to={"/"} >Sign in</Link>
    </h2>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
      Browse categories
      </button>
    </h2>
    <div id="collapse6" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <ul>
        {handelNavMenu(bowserCate)}
       </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Fiverr Pro
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <ul>
        {handelNavMenu(fiverPro)}
       </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Explore
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
        {handelNavMenu(explore)}
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
      <div>
      <GlobalOutlined />
      <span className='ml-2'>English</span>
      </div>
      </button>
    </h2>
    <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
        {handelNavMenu(language)}
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
      US$ USD
      </button>
    </h2>
    <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
        {handelNavMenu(usd)}
        </ul>
      </div>
    </div>
  </div>
  <div className='accordion-item'>
    <h2 className='accordion-header accordion-body accordion'>
    <Link to={"/"} >Become a Seller</Link>
    </h2>
  </div>
</div>

  )
}
