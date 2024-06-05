import { MenuProps, Radio, Space } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const serviceoOptions: MenuItem[] = [
  {
    key: 1,
    label: "Service options",
    children: [
      {
        key: 2,
        label: "Website type",
        children: [
          { key: 3, label: "Business" },
          { key: 4, label: "E-Commerce store" },
          { key: 5, label: "Landing page" },
          { key: 6, label: "Blog" },
        ],
      },
      {
        key: 7,
        label: "Service offerings",
        children: [
          { key: 8, label: "Offers subscriptions" },
          { key: 9, label: "Paid video consultations" },
        ],
      },
      {
        key: 10,
        label: "Service includes",
        children: [
          { key: 11, label: "Functional website" },
          { key: 12, label: "Responsive design" },
          { key: 13, label: "Content upload" },
          { key: 14, label: "E-commerce functionality" },
        ],
      },
      {
        key: 15,
        label: "Plugins",
        children: [
          { key: 16, label: "Elementor" },
          { key: 17, label: "Contact form 7" },
          { key: 18, label: "WooCommerce" },
          { key: 19, label: "WordPress SEO by Yoast" },
        ],
      },
      {
        key: 20,
        label: "Website features",
        children: [
          { key: 21, label: "Social media" },
          { key: 22, label: "Payment" },
          { key: 23, label: "Marketing" },
          { key: 24, label: "Form" },
        ],
      },
    ],
  },
];

export const sellerDetails: MenuItem[] = [
  {
    key: 25,
    label: "Seller details",

    children: [
      {
        key: 26,
        label: "Seller level",
        children: [
          { key: 27, label: "Top Rated Seller" },
          { key: 28, label: "Level 2" },
          { key: 29, label: "Level 1" },
          { key: 30, label: "New Seller" },
        ],
      },
      {
        key: 31,
        label: "Seller Type",
        children: [{ key: 32, label: "Agency" }],
      },
      {
        key: 33,
        label: "Seller availability",
        children: [{ key: "1", label: "Online Now" }],
      },
      {
        key: 34,
        label: "Seller speaks",
        children: [
          { key: 35, label: "English" },
          { key: 36, label: "Urdu" },
          { key: 37, label: "Hindi" },
          { key: 38, label: "Bengali" },
        ],
      },
      {
        key: 39,
        label: "Seller lives in",
        children: [
          { key: 40, label: "Vietnam" },
          { key: 41, label: "United States" },
          { key: 42, label: "United Kingdom" },
          { key: 43, label: "Canada" },
        ],
      },
    ],
  },
];

export const budget: MenuItem[] = [
  {
    key: 44,
    label: "Budget",
    children: [
      {
        key: 45,
        label: (
          <Radio.Group value={1}>
            <Space direction="vertical">
               <Radio value={1}>Value </Radio>
            <Radio value={2}>Mid-range </Radio>
            <Radio value={3}>High-end </Radio>
            <Radio value={4}>Custom </Radio> 
            </Space>
            
          </Radio.Group>
        ),
      },
      
    ],
  },
];

export const  deliveryTime : MenuItem[] = [
    {
      key: 46,
      label: "Delivery time",
      children: [
        {
          key: 47,
          label: (
            <Radio.Group value={1}>
              <Space direction="vertical">
                 <Radio value={1}>Express 24H </Radio>
              <Radio value={2}>Up to 3 days </Radio>
              <Radio value={3}>Up to 7 days </Radio>
              <Radio value={4}>Anytime </Radio> 
              </Space>
              
            </Radio.Group>
          ),
        },
        
      ],
    },
  ];