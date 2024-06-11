
import { DetaiJob } from "../../../../types"
import { Col, Rate, Row } from "antd";
import "../style.css"
import { StarOutlined } from "@ant-design/icons";
type Props ={
    data:DetaiJob
}
export default function DetailReview(props:Props) {
    const {data} = props;
  return (
    <div className="DetailReview pb-5">
      <h2>Reviews</h2>
      <div className="flex justify-between items-center py-2">
        <span className="font-bold">{data.danhGia} reviews for this Gig</span>
        <span>< Rate defaultValue={data.saoCongViec} disabled={true} style={{color:"#404145"}} /></span>
      </div>
      <div>
        <Row gutter={30}>
          <Col span={12}>
            <table className="DetailReview__table">
              <tbody>
                <tr>
                  <td><button className="font-bold">5 start</button></td>
                  <td>
                    <div className="DetailReview__grandfather">
                      <div className="DetailReview__father">
                        <span className="DetailReview__child" style={{width:'95.454545%'}}></span>
                      </div>
                    </div>
                  </td>
                  <td className="pt-1.5">({data.danhGia-3})</td>
                </tr>
                <tr>
                  <td><button className="font-bold">4 start</button></td>
                  <td> <div className="DetailReview__grandfather">
                      <div className="DetailReview__father">
                        <span className="DetailReview__child" style={{width:'4.545454%'}}></span>
                      </div>
                    </div></td>
                  <td className="pt-1.5">(3)</td>
                </tr>
                <tr  className="DetailReview__disable">
                  <td><button disabled>3 start</button></td>
                  <td> <div className="DetailReview__grandfather">
                      <div className="DetailReview__father">
                        <span className="DetailReview__child" style={{width:'0'}}></span>
                      </div>
                    </div></td>
                  <td className="pt-1.5">(0)</td>
                </tr>
                <tr className="DetailReview__disable">
                  <td><button disabled>2 start</button></td>
                  <td> <div className="DetailReview__grandfather">
                      <div className="DetailReview__father">
                        <span className="DetailReview__child" style={{width:'0'}}></span>
                      </div>
                    </div></td>
                  <td className="pt-1.5">(0)</td>
                </tr>
                <tr className="DetailReview__disable">
                  <td><button disabled>1 start</button></td>
                  <td> <div className="DetailReview__grandfather">
                      <div className="DetailReview__father">
                        <span className="DetailReview__child" style={{width:'0'}}></span>
                      </div>
                    </div></td>
                  <td className="pt-1.5">(0)</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col span={12} className="DetailReview__right">
            <h4>Rating Breakdown</h4>
            <h6 className="flex justify-between"><span>Seller communication level</span>
            <span><StarOutlined /> {data.saoCongViec}</span>
            </h6>
            <h6 className="flex justify-between"><span>Recommend to a friend</span>
            <span><StarOutlined /> {data.saoCongViec}</span>
            </h6>
            <h6 className="flex justify-between"><span>Service as described</span>
            <span><StarOutlined /> {data.saoCongViec}</span>
            </h6>
          </Col>
        </Row>
      </div>
    </div>
  )
}
