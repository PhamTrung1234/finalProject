
import { handelBookingDescription } from '../bookingDescription'

export default function BookingHomes(props:any) {
  return (
    <div className='mt-5'>
      <nav>
    <div className="nav nav-tabs font-bold " id="nav-tab" role="tablist">
      <button className="nav-link active w-1/3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Basic</button>
      <button className="nav-link w-1/3" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Standard</button>
      <button className="nav-link w-1/3" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Premium</button>
    
    </div>
  </nav>
  <div className="tab-content pt-5" id="nav-tabContent">
    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>{handelBookingDescription(1,props.price)}</div>
    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>{handelBookingDescription(2,25)}</div>
    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>{handelBookingDescription(3,75)}</div>
    
  </div>
    </div>
  )
}
