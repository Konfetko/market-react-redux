import React from 'react';
//@ts-ignore
import classes from "../styles/Selector.module.scss";
import {ISelect} from "../../models/ISelect";

export interface ISelectorProps{
    selectors:ISelect[],
    handleSelect:(event:React.ChangeEvent<HTMLSelectElement>)=>void
}

const Selector = ({selectors,handleSelect}:ISelectorProps) => {

    return (
        <div>
            <div className={classes.sort}>
                Сортировать по: <br/>
                <select name="" id="" onChange={handleSelect}>
                    {
                        selectors.map((item)=>
                            <option value={item.value}>{item.name}</option>
                        )
                    }
                </select>
            </div>
        </div>
    );
};

export default Selector;