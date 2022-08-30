import React, {memo} from 'react';
import {IAdress} from "../../models/IAdress";
import Address from "./Address";
//@ts-ignore
import classes from '../styles/Adress.module.scss'
//const classes = require('../styles/Adress.module.scss')

export interface IAdressesProps{
    adresses:IAdress[],
    showForm:(address?:IAdress)=>void
}

const AddressList = memo(({adresses,showForm}:IAdressesProps) => {

    return (
        <>
           <div
               className={classes.addressListBlock}>
               <div
                   className={classes.titleCount}
               >
                   {adresses.length}/3
               </div>
               <div className={classes.addressList}>
                   {
                       adresses.length>0
                           ?
                           adresses.map(adress=>
                               <Address
                                   onOpenChangeForm={showForm}
                                   key={adress.idAdress}
                                   adress={adress}
                               />
                           )
                           :
                           <p>У вас нет адресов, добавьте их</p>
                   }
               </div>
           </div>

        </>
    );
});

export default AddressList;