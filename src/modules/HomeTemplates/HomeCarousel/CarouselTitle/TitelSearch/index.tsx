import type { SearchProps } from 'antd/es/input/Search';
import { Input, Space } from 'antd';


export default function TitelSearch() {
    const { Search } = Input;
    const onSearch: SearchProps['onSearch'] = (value) => {
        console.log(value)
        
    };
  return (
    <Space direction="vertical" className='w-full my-3'>
   
  
    
    <Search placeholder="input search text" onSearch={onSearch}  enterButton />
    
    
  </Space>
  )
}

