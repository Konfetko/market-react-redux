import React from 'react';
import {IAdress} from "../../models/IAdress";
import Modal from "../Modal";
import {useAppDispatch} from "../../app/hooks";

export interface IAddressFormProps{
    address?:IAdress,
    onClose:()=>void
}

const AddressForm = ({address,onClose}:IAddressFormProps) => {
    const dispatch = useAppDispatch()

    return (
        <Modal
            onCloseModal={onClose}
        >
            {address?.house}gdfgd
        </Modal>
    );
};

export default AddressForm;