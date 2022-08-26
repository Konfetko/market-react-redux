import React, {useEffect, useReducer} from 'react';
import {IAdress, IAdressAdd} from "../../models/IAdress";
import Modal from "../Modal";
import {useAppDispatch} from "../../app/hooks";
import {removeAddress,addAddress,changeDataAddress} from "../../store/user/userSlice";
import Input from "../ToolBar/Input";
import AddressReducer, {
    AddressAction,
    IAddressFormState,
    initializationAddressValue
} from "../../app/reducers/addressReducer";

const classes = require('../styles/AddressForm.module.scss')

export interface IAddressFormProps{
    address?:IAdress,
    onClose:()=>void
}

const AddressForm = ({address,onClose}:IAddressFormProps) => {
    const [addressState,dispatchAddress] =
        useReducer(
            AddressReducer,
            !address
                ?initializationAddressValue
                :{
                    street:address.street,
                    house:address.house,
                    flatNumber:address.flatNumber,
                    city:address.city
                }as IAddressFormState
        )
    const dispatch = useAppDispatch()

    const deleteAddressHandler=()=>{
        if(!address) return

        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Вы уверены что хотите удалить адрес?")
        if(!result) return

        dispatch(removeAddress(address?.idAdress))
        document.location.reload()
    }
    const addAddressHandler=()=>{
        const action:IAdressAdd = {city:addressState.city,house:addressState.house,street:addressState.street,flatNumber:addressState.flatNumber}
        dispatch(addAddress(action))
    }
    const changeAddress=()=>{
        if(!address) return

        const action:IAdressAdd = {city:addressState.city,house:addressState.house,street:addressState.street,flatNumber:addressState.flatNumber}
        dispatch(changeDataAddress({sourceAdress:address,changedAdress:action}))
    }
    useEffect(()=>{

    })
    return (
        <Modal
            onCloseModal={onClose}
        >
            {
                !address &&
                <div
                    className={classes.addressBlock}
                >
                    <Input title={"Введите город"} onChange={(e)=>{dispatchAddress({type:AddressAction.InputCity,payload:e.target.value})}}/>
                    <Input title={"Введите улицу"} onChange={(e)=>{dispatchAddress({type:AddressAction.InputStreet,payload:e.target.value})}}/>
                    <Input title={"Введите дом"} onChange={(e)=>{dispatchAddress({type:AddressAction.InputHouse,payload:e.target.value})}}/>
                    <Input title={"Введите квартиру"} onChange={(e)=>{dispatchAddress({type:AddressAction.InputFlatNumber,payload:Number(e.target.value)})}}/>
                    <button
                        onClick={addAddressHandler}
                    >
                        Добавить адрес
                    </button>
                </div>
            }
            {

                address &&
                <div className={classes.addressBlock}>
                    <Input
                        title={"Город"}
                        value={addressState.city}
                        onChange={(e)=>{dispatchAddress({type:AddressAction.InputCity,payload:e.target.value})}}/>
                    <Input
                        title={"Улица"}
                        value={addressState.street}
                        onChange={(e)=>{dispatchAddress({type:AddressAction.InputStreet,payload:e.target.value})}}/>
                    <Input
                        title={"Дом"}
                        value={addressState.house}
                        onChange={(e)=>{dispatchAddress({type:AddressAction.InputHouse,payload:e.target.value})}}/>
                    <Input
                        title={"Квартира"}
                        value={addressState.flatNumber+''}
                        onChange={(e)=>{dispatchAddress({type:AddressAction.InputFlatNumber,payload:Number(e.target.value)})}}/>
                    <button
                        onClick={changeAddress}>
                        Сохранить изменения
                    </button>
                    <button
                        onClick={deleteAddressHandler}>
                        Удалить
                    </button>
                </div>
            }
        </Modal>
    );
};

export default AddressForm;