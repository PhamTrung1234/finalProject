import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import "../style.css"
export default function DetailFaq() {
    type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'what details you need from me?',
   
    children: [
        { key: '1', label: 'i will need requirements document and access to server. ' },
      
    ],
  },
  {
    key: 'sub2',
    label: 'Do you provide maintenance after completion of work?',
   
    children: [
      { key: '2', label: 'Yes, i provide support upto 5 days and will fix any bug. After 5 days it will have small amount of price for fixing any bug. ' },
      
      
    ],
  },
  {
    key: 'sub3',
    label: 'Can i ask for additional features other than the description?',
   
    children: [
      { key: '3', label: 'Yes, you can write me and we will discuss it together.  ' },
      
      
    ],
  },
  {
    key: 'sub4',
    label: 'Which payment gateways you integrate?',
   
    children: [
      { key: '4', label: 'I can integrate any payment gateway in your website. For example Stripe, Paypal, Paystack, Mollie and many more which are countries specific as well.  ' },
      
      
    ],
  },
  {
    key: 'sub5',
    label: 'Do you provide services of Vuejs?',
   
    children: [
      { key: '5', label: 'Yes, i have 3+ years of experience in Vuejs.  ' },
      
      
    ],
  },
  {
    key: 'sub6',
    label: 'Do you provide server configuration services?',
   
    children: [
      { key: '6', label: 'Yes, i can configure servers from scratch.  ' },
      
      
    ],
  },
  
  
];
  return (
    <div className='DetailFaq pb-5'>
      <h2>FAQ</h2>
      <Menu
      
      
     
      mode="inline"
      items={items}
    />
    </div>
  )
}
