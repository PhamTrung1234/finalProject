
import { Breadcrumb } from 'antd'


export default function AccountSetting() {
  return (
    <>
    <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            {
              title: "Trang chủ",
              path: "/admin",
            },
            {
              title: "Quản lý Tài Khoản",
            },
          ]}
        />
        
    </div>
    <div>AccountSetting</div>
    </>
  )
}
