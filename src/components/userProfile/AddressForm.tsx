import React, {useReducer} from 'react';
import {IAdress} from "../../models/IAdress";
import Modal from "../Modal";
import {useAppDispatch} from "../../app/hooks";
import {removeAddress} from "../../store/user/userSlice";
import Input from "../ToolBar/Input";
import AddressReducer, {AddressAction, initializationAddressValue} from "../../app/reducers/addressReducer";
//@ts-ignore
import classes from '../styles/AddressForm.module.scss'


export interface IAddressFormProps{
    address?:IAdress,
    onClose:()=>void
}

const AddressForm = ({address,onClose}:IAddressFormProps) => {
    const [addressState,dispatchAddress] = useReducer(AddressReducer,initializationAddressValue)
    const dispatch = useAppDispatch()

    const deleteAddress=()=>{
        if(address === undefined) return
        dispatch(removeAddress(address?.idAdress))
    }
    return (
        <Modal
            onCloseModal={onClose}
        >
            {
                !address &&
                <div
                    className={classes.addressBlock}
                >
                    <Input title={"Введите город"} onChange={(e)=>{}}/>
                    <Input title={"Введите улицу"} onChange={(e)=>{}}/>
                    <Input title={"Введите дом"} onChange={(e)=>{}}/>
                    <Input title={"Введите квартиру"} onChange={(e)=>{}}/>
                    <button>Добавить адрес</button>
                </div>


            }
            {
                address &&
                <button
                    onClick={deleteAddress}>
                    delete
                </button>
            }
        </Modal>
    );
};

export default AddressForm;