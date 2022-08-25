import React from 'react';
import Card from "../Card";
import {IAdress} from "../../models/IAdress";
//@ts-ignore
import classes from '../styles/Adress.module.scss'
import {useAppDispatch} from "../../app/hooks";
import {removeAddress} from "../../store/user/userSlice";

export interface IAdressProps{
    adress:IAdress,
    onOpenChangeForm:(adress:IAdress)=>void
}

const Address = ({adress,onOpenChangeForm}:IAdressProps) => {

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

            </div>

        </Card>
    );
};

export default Address;