import React, {useEffect, useState} from 'react';
import Selector from "./Selector";
import {ISelect} from "../../models/ISelect";
import Input from "./Input";
import Categories from "./Categories";
import {useAppDispatch} from "../../app/hooks";
import {
    clearModified, filterByName,
    filterProductsByCategory,
    sortProductsByField
} from "../../store/product/productsSlice";
//@ts-ignore
import classes from '../styles/ToolBar.module.scss'
//const classes = require('../styles/ToolBar.module.scss')

const ToolBar = () => {
    const [isOpenToolBar,setOpenToolBar] = useState(true)
    const [selectors,setSelectors] = useState<ISelect[]>([
                                                        {name:"Названию",value:"title"},
                                                        {name:"Цене",value:"price"}
                                                    ])
    const [width,setWidth]= useState(window.innerWidth)
    const dispatch = useAppDispatch()

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
        dispatch(sortProductsByField(event.target.value))
    }
    const handleInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(filterByName(event.target.value))
    }
    const handleCategory=(category:string)=>{
        dispatch(filterProductsByCategory(category))
    }
    const clearProducts=()=>{
        dispatch(clearModified())
    }
    return (
        <>

            <div
                className={classes.toolBar + " "+(isOpenToolBar?classes.active:classes.hidden)}>
                <div className={classes.title}>
                    Вспомогательная панель
                </div>
                <div className={classes.innerBar}>
                    <div>
                        <Input title={"Поиск по названию"} onChange={handleInput}/>
                    </div>
                    <div>
                        <Selector selectors={selectors} handleSelect={handleSelect}/>
                    </div>
                    <Categories handleCategory={handleCategory}/>
                </div>
                <div
                    onClick={switchToolBar}
                    className={classes.button}>
                    <div className={classes.buttonContent}>
                        {isOpenToolBar?"<<<":">>>"}
                    </div>
                </div>
                <button
                    className={classes.clearButton}
                    onClick={clearProducts}>
                    Сбросить
                </button>
            </div>

        </>
    );
};

export default ToolBar;