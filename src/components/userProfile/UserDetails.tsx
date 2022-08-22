import React, {useState} from 'react';
import {IUser} from "../../models/IUser";
//@ts-ignore
import classes from '../styles/UserDetails.module.scss'
import AddressForm from "./AddressForm";

export interface IUserDetailsProps {
    user:IUser,
}

const UserDetails = ({user}:IUserDetailsProps) => {
    const [visibleForm,setVisibleForm] = useState(false)
    const switchVisibleAddForm = ()=>{
        setVisibleForm(prev=>!prev)
    }

    return (
        <>
            <div
                className={classes.block}>
                <div
                    className={classes.dataContainer}>
                    <div
                        className={classes.detail +" "+classes.img}>
                        img
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
                <button
                    onClick={switchVisibleAddForm}
                >
                    Добавить адрес
                </button>
            </div>
            {
                visibleForm &&
                <AddressForm address={undefined} onClose={switchVisibleAddForm}/>
            }
        </>
    );
};

export default UserDetails;