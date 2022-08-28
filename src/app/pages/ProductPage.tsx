import React, {useEffect} from 'react';
//@ts-ignore
import classes from '../../components/styles/ProductPage.module.scss'
import {useParams} from "react-router";
import Layout from "../../components/Layout/Layout";
import {useAppDispatch, useAppSelector} from "../hooks";
import {fetchProduct, getProductState} from "../../store/product/productSlice";


const ProductPage = () => {
    const dispatch = useAppDispatch()
    const productState = useAppSelector(getProductState)
    const {id} = useParams()
    useEffect(()=>{
        dispatch(fetchProduct(Number(id)))
    },[])

    return (
        <Layout>
            <div className={classes.content}>
                <div className={classes.productBlock + ' '+classes.grid}>
                    <div className={classes.productImage}>
                        <img src={productState.product.image} alt=""/>
                    </div>
                    <div className={classes.description}>
                        <h2>{productState.product.title}</h2>
                        <h3>Категория: {productState.product.category}</h3>
                        <p>{productState.product.description}
                        </p>
                        <div className={classes.price}>
                            <div>Стоимость: {productState.product.price} руб.</div>
                            <div><button>
                                Добавить в корзину
                            </button></div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default ProductPage;