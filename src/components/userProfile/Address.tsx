import React from 'react';
import Card from "../Card";
import {IAdress} from "../../models/IAdress";
//@ts-ignore
import classes from '../styles/Adress.module.scss'
//const classes = require('../styles/Adress.module.scss')


export interface IAdressProps{
    adress:IAdress,
    onOpenChangeForm:(adress:IAdress)=>void
}

const Address = ({adress,onOpenChangeForm}:IAdressProps) => {
    const getString=(str:string)=>{
        return str.length >11 ? str.slice(0,11)+'...':str
    }

    return (
        <Card
            classNames={[classes.addressCard]}
        >
            <div
                className={classes.addressBlock}
                onClick={()=>onOpenChangeForm(adress)}
            >
                <div>
                    Адрес
                </div>
                <div
                    className={classes.addressInnerCard}
                >
                    <div className={classes.title}>
                        город:{getString(adress.city)}
                    </div>
                    <div>
                        улица:{getString(adress.street)}
                    </div>
                    <div>
                        дом:{getString(adress.house)}
                    </div>
                    <div>
                        квартира:{adress.flatNumber}
                    </div>
                </div>

            </div>

        </Card>
    );
};

export default Address;