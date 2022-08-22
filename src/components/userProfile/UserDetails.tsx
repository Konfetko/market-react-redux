import React from 'react';
import {IUser} from "../../models/IUser";
//@ts-ignore
import classes from '../styles/UserDetails.module.scss'

export interface IUserDetailsProps {
    user:IUser
}

const UserDetails = ({user}:IUserDetailsProps) => {
    return (
        <div className={classes.block}>
           <div className={classes.dataContainer}>
               <div className={classes.detail +" "+classes.img}>
                   img
               </div>
               <div className={classes.detail}>
                   <div>
                       {user.fio}
                   </div>
                   <div>
                       {user.email}
                   </div>
               </div>
               <div className={classes.detail}>
                   {
                       user.details &&
                       user.details.countOrders>0
                           ?user.details?.countOrders
                           :"Сделайте свой первый заказ!"
                   }
               </div>
           </div>
        </div>
    );
};

export default UserDetails;