import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchProducts, getProductsState} from "../../store/product/productSlice";
import Product from "./Product";
//@ts-ignore
import classes from '../styles/ProductList.module.scss'

const ProductList = () => {
    const store = useAppSelector(getProductsState)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <div className={classes.list}>
            {
                store.modifiedProducts.length===0
                ?<h3>Товары отсутствуют</h3>
                :store.modifiedProducts.map(x=><Product key={x.id} product={x}/>)
            }

        </div>
    );
};

export default ProductList;