import React from 'react';
import {ISelect} from "../../models/ISelect";
//@ts-ignore
import classes from '../styles/Selector.module.scss'
//const classes = require('../styles/Selector.module.scss')

export interface ISelectorProps{
    selectors:ISelect[],
    handleSelect:(event:React.ChangeEvent<HTMLSelectElement>)=>void
}

const Selector = ({selectors,handleSelect}:ISelectorProps) => {

    return (
        <div>
            <div className={classes.sort}>
                <p>Сортировать по: </p>
                <select name="" id="" onChange={handleSelect}>
                    {
                        selectors.map((item)=>
                            <option
                                key={item.name}
                                value={item.value}>
                                {item.name}
                            </option>
                        )
                    }
                </select>
            </div>
        </div>
    );
};

export default Selector;