import React, {useState} from 'react';
import { useAppSelector} from "../hooks";
import {getUserState} from "../../store/user/userSlice";
import Layout from "../../components/Layout/Layout";
import UserDetails from "../../components/userProfile/UserDetails";
//@ts-ignore
import classes from '../../components/styles/Profile.module.scss'
import AddressList from "../../components/userProfile/AddressList";
import {IAdress} from "../../models/IAdress";
import AddressForm from "../../components/userProfile/AddressForm";

export enum FormShowed{
    AddressForm,
    OrdersForm
}

const ProfilePage = () => {
    const userState = useAppSelector(getUserState)
    const [visibleForm,setVisibleForm] = useState(false)
    const [currentAddress,setCurrentAddress] = useState<IAdress | undefined>(undefined)
    const [currentForm,setCurrentForm] = useState<FormShowed>(FormShowed.AddressForm)

    const switchVisibleAddForm = (address?:IAdress)=>{
        setVisibleForm(prev=>!prev)
        setCurrentAddress(address)
    }
    const showAddresses = ()=>setCurrentForm(FormShowed.AddressForm)
    const showOrders = ()=>setCurrentForm(FormShowed.OrdersForm)


    //const adresses:IAdress[] = [{idAdress:1,city:'Minsk',flatNumber:60,house:'2b',street:'gdsgds'},{idAdress:2,city:'Minsk',flatNumber:60,house:'2b',street:'gdsgds'},{idAdress:3,city:'Minsk',flatNumber:60,house:'2b',street:'gdsgds'},{idAdress:3,city:'Minsk',flatNumber:60,house:'2b',street:'gdsgds'}]


    return (
        <>
            <Layout>
                <div className={classes.outer}>
                    <div className={classes.content}>

                        <UserDetails
                            showForm={switchVisibleAddForm}
                            user={userState.user}
                        />
                        <div
                            className={classes.navPanel}
                        >
                            <div
                                className={classes.innerPanel}
                            >
                                <div
                                    onClick={showAddresses}
                                >
                                    Адреса
                                </div>
                                <div
                                    onClick={showOrders}
                                >
                                    Заказы
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                currentForm === FormShowed.AddressForm && <AddressList
                                    //adresses={adresses}
                                    showForm={switchVisibleAddForm}
                                    adresses={userState.user.details === undefined? [] as IAdress[]:userState.user.details.adresses}
                                />
                            }
                            {
                                currentForm === FormShowed.OrdersForm && <div>заказы</div>
                            }

                        </div>

                    </div>
                </div>

            </Layout>
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

export default ProfilePage;