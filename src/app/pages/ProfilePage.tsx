import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {getUserState} from "../../store/user/userSlice";
import Layout from "../../components/Layout/Layout";
import UserDetails from "../../components/userProfile/UserDetails";
//@ts-ignore
import classes from '../../components/styles/Profile.module.scss'
import AddressList from "../../components/userProfile/AddressList";
import {IAdress} from "../../models/IAdress";

const ProfilePage = () => {
    const userState = useAppSelector(getUserState)
    const dispatch = useAppDispatch()
    const adresses:IAdress[] = [{city:'Minsk',flatNumber:60,house:'2b',street:'gdsgds'},{city:'Minsk',flatNumber:60,house:'2b',street:'gdsgds'},{city:'Minsk',flatNumber:60,house:'2b',street:'gdsgds'}]

    return (
        <Layout>
               <div className={classes.outer}>
                   <div className={classes.content}>

                       <UserDetails user={userState.user}/>
                       <div>
                           <AddressList
                               adresses={adresses}
                               //adresses={userState.user.details === undefined? [] as IAdress[]:userState.user.details.adresses}
                           />
                           adress
                       </div>
                   </div>
               </div>
        </Layout>
    );
};

export default ProfilePage;