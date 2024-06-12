import { FieldTimeOutlined, SyncOutlined } from "@ant-design/icons"










export const handelBookingDescription = (found : number)=>{
    return (
        <div>
            {found===1 && (
                <div>
                    <h3>US$10</h3>
                    <p><span className="font-bold">Logo Design Starter</span> 2 Basic logo designs JPEG/PNG/Vector/Sources. (*Check out Extras*)</p>
                    <div>
                        <span><FieldTimeOutlined />  3-day delivery</span>
                    <span><SyncOutlined />  5 Revisions</span>
                    </div>
                </div>
            )}
            {found===2 && (<div>
                <h3>US$22.50</h3>
                <span>US$25</span>
                <p><span className="font-bold">Logo Design Starter</span> 2 Basic logo designs JPEG/PNG/Vector/Sources. (*Check out Extras*)</p>
                <div>
                        <span><FieldTimeOutlined />  3-day delivery</span>
                    <span><SyncOutlined />  9 Revisions</span>
                    </div>
            </div>)}
            {found ===3 && (
                <div>
                    <h3>US$67.50</h3>
                    <span>US$75</span>
                    <p><span className="font-bold">Must Have & Branding</span> 4 logo designs + All Files+Sources+ Social Kit+ 3DMockup+Stationery design</p>
                    <div>
                        <span><FieldTimeOutlined />  3-day delivery</span>
                    <span><SyncOutlined />  Unlimited Revisions</span>
                    </div>
                </div>
            )}
            
        </div>
    )
}
