import { memo } from "react"

 function HomeTrusted() {
  return (
    <div className="HomeTrusted mb-24">
        <div className="container flex items-center justify-center">
      <span>Trusted by:</span>
       <ul className="pl-0 mb-0">
       
        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta2x.b364aec.png" alt="meta" /></li>
        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google2x.4fa6c20.png" alt="google" /></li>
        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix2x.6b36ad6.png" alt="nextfit" /></li>
        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg2x.0d06f7b.png" alt="p&g" /></li>
        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal2x.d2fa54d.png" alt="paypal" /></li>
       </ul>
    </div>
    </div>
  )
}
export default memo(HomeTrusted)