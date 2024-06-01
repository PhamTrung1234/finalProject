import { Link } from "react-router-dom";
import { NavMenu } from "../../../../../types";



export const explore: NavMenu[] = [
    {href:"/",text:'Discover',key:1,description:"Inspiring projects made on Fiverr"},
    {href:"/",text:'Community',key:2,description:"Connect with Fiverr’s team and community"},
    {href:"/",text:'Guides',key:3,description:'In-depth guides covering business topics'},
    {href:"/",text:'Podcast',key:4,description:'Inside tips from top business minds'},
    {href:"/",text:'Learn',key:5,description:'Professional online courses, led by experts'},
    {href:"/",text:'Blog',key:6,description:'News, information and community stories'},
    {href:"/",text:'Logo Maker',key:7,description:'Create your logo instantly'},

]

export const language: NavMenu[] = [
    {href:"/",text:'English',key:8},
    {href:"/",text:'Deutsch',key:9},
    {href:"/",text:'Español',key:10},
    {href:"/",text:'Français',key:11},
    {href:"/",text:'Italiano',key:12},
    {href:"/",text:'Nederlands',key:13},
    {href:"/",text:'Português',key:14},
]

export const usd:NavMenu[] = [
    {href:"/",text:'USD - US$',key:15},
    {href:"/",text:'EUR - €',key:16},
    {href:"/",text:'GBP - £',key:17},
    {href:"/",text:'AUD - A$',key:18},
    {href:"/",text:'CAD - CA$',key:19},
    {href:"/",text:'ILS - ₪',key:20},
    {href:"/",text:'HKD - HK$',key:21},
    {href:"/",text:'BRL - R$',key:22},
    {href:"/",text:'SEK - SEK',key:23},
    {href:"/",text:'NZD - NZ$',key:24},
    {href:"/",text:'SGD - SGD',key:25},
    
    {href:"/",text:'CHF - CHF',key:26},
    {href:"/",text:'ZAR - ZAR',key:27},
    

]
export const fiverPro: NavMenu[]=[
    {href:"/",text:"I'm looking to hire",key:28,description:"I'd like to work with Pro freelancers and agencies while using free business tools."},
    {href:"/",text:'I want to offer Pro services',key:29,description:"I’d like to work on business projects as a Pro freelancer or agency."}
]
export const bowserCate : NavMenu[] = [
    {href:"/",text:"Graphics & Design",key:30},
    {href:"/",text:"Programming & Tech",key:31},
    {href:"/",text:"Digital Marketing",key:32},
    {href:"/",text:"Video & Animation",key:33},
    {href:"/",text:"Writing & Translation",key:34},
    {href:"/",text:"Music & Audio",key:35},
    {href:"/",text:"Business",key:36},
    {href:"/",text:"Consulting",key:37},
   
]
export const handelNavMenu = (array:NavMenu[])=>{
    return array.map((item:NavMenu)=>{
        return (
            <li key={item.key} className="mb-3">
                <Link target={item.target} to={item.href} >{item.text}</Link>
                {item.description && (
                    <p>{item.description}</p>
                )}
            </li>
        )
    })
}

