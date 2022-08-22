import React from 'react';
import Card from "../Card";
import {IAdress} from "../../models/IAdress";
//@ts-ignore
import classes from '../styles/Adress.module.scss'

export interface IAdressProps{
    adress:IAdress
}

const Address = ({adress}:IAdressProps) => {
    return (
        <Card classNames={[classes.addressCard]}>
            Адрес
            <div
                className={classes.addressInnerCard}
            >
                <div>
                    город:{adress.city}
                </div>
                <div>
                    улица:{adress.street}
                </div>
                <div>
                    дом:{adress.house}
                </div>
                <div>
                    квартира:{adress.flatNumber}
                </div>
            </div>

        </Card>
    );
};

export default Address;