import React, {useEffect, useState} from 'react';

const classes = require('../styles/Arrow.module.scss')

export enum Direction{
    toBottom,
    toUp,
    toLeft,
    toRight
}

export interface IArrowProps{
    direction:Direction,
    className:string
}

const Arrow = ({direction,className}:IArrowProps) => {
    const [rowClassName,setRowClassName] = useState('')
    useEffect(()=>{
        switch (direction){
            case Direction.toBottom:
                setRowClassName(classes.toBottom)
                break
            case Direction.toLeft:
                setRowClassName(classes.toLeft)
                break
            case Direction.toRight:
                setRowClassName(classes.toRight)
                break
            case Direction.toUp:
                setRowClassName(classes.toUp)
                break
            default:
                break
        }
    },[direction])

    return (
        <svg className={rowClassName +" "+className} xmlns="http://www.w3.org/2000/svg" width="10.033" height="5"><path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z"/></svg>
    );
};

export default Arrow;