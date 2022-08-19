import React, {useEffect, useState} from 'react';
//@ts-ignore
import classes from '../styles/Header.module.scss'
import {Link} from "react-router-dom";
import SmallCart from "../Products/SmallCart";

const Header = () => {
    const [logOutVisible,setLogOutVisible]=useState(false)
    const showLogOut = ()=>setLogOutVisible(true)
    const closeLogOut = ()=>setLogOutVisible(false)
    useEffect(()=>{
        document.addEventListener('click',closeLogOut)
    },[])
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to={"/"}>logo</Link>
            </div>
            <div>
                <ul className={classes.list}>
                    <li>
                        <Link
                            to={"/"}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/"}>
                            О нас
                        </Link>
                    </li>
                    <li>
                        <SmallCart/>
                    </li>
                    <li className={classes.userFunc}
                        >
                        <div
                            className={classes.userAccount} onMouseEnter={showLogOut}>
                        </div>
                         <div>
                             <Link

                                 to={"/"}>
                                 &&
                                 USER) ||
                             </Link>

                             <Link
                                 to={"/"}>
                                 AUTHORIZATION
                             </Link>
                         </div>
                        <ul
                            className={classes.innerList + " "+((logOutVisible)?classes.visibleList:classes.hiddenList)}
                        >
                            <li>
                                <div>
                                    <Link to={"/32"}>
                                        Выйти
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;