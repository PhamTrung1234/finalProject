import { StorageEnum } from "../types/enum"


export const getItem=<T>(key: StorageEnum): T | null=>{
    let value=null;
    try{
        const result=window.localStorage.getItem(key);
        if(result){
            value=JSON.parse(result);
        }
    }
    catch(error){console.error(error);}
    return value;
}