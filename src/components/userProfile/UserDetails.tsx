import React, {useState} from 'react';
import {IUser} from "../../models/IUser";
//@ts-ignore
import classes from '../styles/UserDetails.module.scss'
import {IAdress} from "../../models/IAdress";

export interface IUserDetailsProps {
    user:IUser,
    showForm:(address?:IAdress)=>void
}

const UserDetails = ({user,showForm}:IUserDetailsProps) => {

    return (
        <>
            <div
                className={classes.block}>
                <div
                    className={classes.dataContainer}>
                    <div
                        className={classes.detail +" "+ classes.img}>
                        <img src={require('../images/pnguser.png')} alt=""/>
                    </div>
                    <div
                        className={classes.detail}>
                        <div>
                            {user.fio}
                        </div>
                        <div>
                            {user.email}
                        </div>
                    </div>
                    <div
                        className={classes.detail}
                        style={{borderLeftStyle:'solid',borderWidth:'1px',paddingLeft:'15px'}}
                    >
                        {
                            user.details &&
                            user.details.countOrders>0
                                ?user.details?.countOrders
                                :"Сделайте свой первый заказ!"
                        }
                    </div>
                </div>
                {
                    user.details?.adresses &&
                    user.details.adresses.length >= 3
                    ? <p className={classes.warning}>У вас уже {user.details.adresses.length}/3 адресов</p>
                    :<button
                        onClick={()=>showForm(undefined)}
                        >
                        Добавить адрес
                    </button>
                }
            </div>

        </>
    );
};

export default UserDetails;