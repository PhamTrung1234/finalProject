
import FooterMd from './FooterSm'
import FooterXs from './FooterXs'
import { memo } from 'react'
 function Footer() {
  return (
    <div>
        <FooterMd/>
        <FooterXs/>
    </div>
  )
}
export default memo(Footer)