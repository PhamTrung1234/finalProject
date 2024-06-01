import { CheckCircleOutlined } from "@ant-design/icons";

type IdeaRoot ={
    title:string;
    description : string;
    key:number
}

const dataIdea:IdeaRoot[] = [
  {title:'Stick to your budget',description:'Find the right service for every price point. No hourly rates, just project-based pricing.',key:0},
  {title:'Get quality work done quickly',description:'Hand your project over to a talented freelancer in minutes, get long-lasting results.',key:1},
  {title:"Pay when you're happy",description:'Upfront quotes mean no surprises. Payments only get released when you approve.',key:2},
  {title:'Count on 24/7 support',description:'Our round-the-clock support team is available to help anytime, anywhere.',key:3},
]

export const handelIdea = ()=>{
    return dataIdea.map(item=>{
        return (
            <li key={item.key}>
                 <p><CheckCircleOutlined /><span className="pl-2 text-lg font-bold">{item.title}</span></p>
                 <p className="text-lg" style={{color:'#62646a'}}>{item.description}</p>
            </li>
        )
    })
}