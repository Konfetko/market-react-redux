import React, {useEffect, useState} from 'react';
//@ts-ignore
import classes from '../styles/ToolBar.module.scss'
import Selector from "./Selector";
import {ISelect} from "../../models/ISelect";
import Input from "./Input";

const ToolBar = () => {
    const [isOpenToolBar,setOpenToolBar] = useState(true)
    const [selectors,setSelectors] = useState<ISelect[]>([
                                                        {name:"Названию",value:"name"},
                                                        {name:"Цене",value:"cost"}
                                                    ])
    const [width,setWidth]= useState(window.innerWidth)
    const switchToolBar=()=>{
        setOpenToolBar(prev=>!prev)
    }
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setWidth(window.innerWidth)
        })
    },[])
    useEffect(()=>{
        if(width>1260)
            setOpenToolBar(true)
        else
            setOpenToolBar(false)
    },[width])

    const handleSelect=(event:React.ChangeEvent<HTMLSelectElement>)=>{

    }
    const handleInput=(event:React.ChangeEvent<HTMLInputElement>)=>{

    }
    return (
        <>

            <div
                className={classes.toolBar + " "+(isOpenToolBar?classes.active:classes.hidden)}>
                Toolbar
                <div className={classes.innerBar}>
                    <div>
                        <Input title={"sa"} onChange={handleInput}/>
                    </div>
                    <div>
                        <Selector selectors={selectors} handleSelect={handleSelect}/>
                    </div>
                    <ul>
                        <li>gfds</li>
                        <li>gfds</li>
                        <li>gfds</li>
                    </ul>
                </div>
                <div
                    onClick={switchToolBar}
                    className={classes.button}>
                    {isOpenToolBar?"<<<<<":">>>>>"}
                </div>
            </div>

        </>
    );
};

export default ToolBar;