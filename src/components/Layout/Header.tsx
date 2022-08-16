import React from 'react';
//@ts-ignore
import classes from '../styles/Header.module.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to={"/"}>logo</Link>
            </div>
            <div>
                <ul className={classes.list}>
                    <li><Link to={"/"}>Главная</Link></li>
                    <li><Link to={"/"}>О нас</Link></li>
                    <li className={classes.userFunc}>
                        <div className={classes.userAccount}></div> USER | AUTHORIZATION
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;