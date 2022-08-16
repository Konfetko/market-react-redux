import React, {useState} from 'react';
import {IProduct} from "../../models/IProduct";
import Card from "../Card";
// @ts-ignore
import classes from '../styles/Product.module.scss'
import {Link} from "react-router-dom";

export interface IProductProps{
    product:IProduct
}

const Product = ({product}:IProductProps) => {
   // const [visibleDescription,setVisibleDescription] = useState(false)
    const showDescription=()=>{
        //setVisibleDescription(prev=>!prev)
    }
    const [s,setS] = useState(classes.flipContainer)


    return (
        <Card >
            <div className={classes.card+" "+classes.center}>
                <div className={classes.front}>
                    <img src={product.image} className={classes.image} alt=""/>
                </div>
                <div className={classes.back}>
                    <div className={classes.backContent+" "+classes.center}>
                        {
                            <div
                                className={classes.description}>
                                {
                                    product.description.length>370
                                    ?<span>
                                            {product.description.substring(0,370)}
                                            <Link
                                                to={'/'}
                                                className={classes.descriptionLink}>
                                                ...
                                            </Link>
                                    </span>
                                    :product.description
                                }
                            </div>
                        }

                    </div>
                </div>
            </div>

           <div >
               <header
                   className={classes.titleBlock}>
                   {
                       product.title.length > 63
                       ?product.title.substring(0,63)
                       :product.title
                   }
               </header>

               <div className={classes.priceBlock}>
                   <div>Стоимость:</div>
                   <div>{product.price} руб.</div>
               </div>
               <div>
                   <button className={classes.addToCartButton}>Добавить в корзину</button>
               </div>
           </div>
        </Card>
    );
};

export default Product;