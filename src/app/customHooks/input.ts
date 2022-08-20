import {ChangeEvent, useState} from "react";

export function useInput(initValue:string){
    const [value,setValue] = useState(initValue)
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    return {
        value,
        onChange
    }

}