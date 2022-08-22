import React, {useState} from 'react';
import {IAdress} from "../../models/IAdress";
import Address from "./Address";
//@ts-ignore
import classes from '../styles/Adress.module.scss'
import AddressForm from "./AddressForm";

export interface IAdressesProps{
    adresses:IAdress[]
}

const AddressList = ({adresses}:IAdressesProps) => {
    const [visibleForm,setVisibleForm] = useState(false)
    const [currentAddress,setCurrentAddress] = useState<IAdress | undefined>(undefined)
    const switchVisibleAddForm = (address?:IAdress)=>{
        setVisibleForm(prev=>!prev)
        setCurrentAddress(address)
    }


    return (
        <>
            <div className={classes.addressList}>
                {
                    adresses.length>0
                    ?
                        adresses.map(adress=>
                            <Address
                                onOpenChangeForm={switchVisibleAddForm}
                                key={adress.idAdress}
                                adress={adress}
                            />
                        )
                    :
                        <p>У вас нет адресов, добавьте их</p>
                }
            </div>
            {
                visibleForm &&
                <AddressForm
                    address={currentAddress}
                    onClose={switchVisibleAddForm}
                />
            }
        </>
    );
};

export default AddressList;