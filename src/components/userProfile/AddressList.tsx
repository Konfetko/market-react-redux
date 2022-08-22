import React from 'react';
import {IAdress} from "../../models/IAdress";
import Address from "./Address";
//@ts-ignore
import classes from '../styles/Adress.module.scss'

export interface IAdressesProps{
    adresses:IAdress[]
}

const AddressList = ({adresses}:IAdressesProps) => {
    return (
        <div className={classes.addressList}>
            {
                adresses.map(adress=>
                    <Address adress={adress}/>
                )
            }
        </div>
    );
};

export default AddressList;