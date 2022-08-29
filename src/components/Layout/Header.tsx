import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";
import SmallCart from "../Products/SmallCart";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getUserState, logout} from "../../store/user/userSlice";
import Arrow, {Direction} from "../Arrow";
//@ts-ignore
import classes from '../styles/Header.module.scss'

export interface IHeaderProps{
    onAboutClick:()=>void,
}

const Header = ({onAboutClick}:IHeaderProps) => {
    const [logOutVisible,setLogOutVisible]=useState(false)
    const dispatch = useAppDispatch()
    const userState = useAppSelector(getUserState)
    const showLogOut = ()=>setLogOutVisible(prev=>!prev)
    const closeLogOut = ()=>setLogOutVisible(false)

    const userLogout=()=>{
        dispatch(logout())
        document.location.reload()
    }


    useEffect(()=>{
        document.addEventListener('click',(event)=>{
            //@ts-ignore
            if(event.target.id ==='root')
                closeLogOut()
        })
    },[])
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link
                    to={"/"}>
                    Yeroshevich V.A.
                </Link>
            </div>
            <div>
                <ul className={classes.list}>
                    <li>
                        <Link
                            onClick={()=>document.location.reload()}
                            to={"/"}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <a
                            style={{cursor:'pointer'}}
                            onClick={onAboutClick}
                        >
                            О нас
                        </a>
                    </li>

                        {
                                userState.user.username
                                &&
                            <li>
                                <SmallCart/>
                            </li>
                        }
                    {
                        userState.user.username
                        ? <li className={classes.userFunc}
                              onClick={showLogOut}

                            >
                                <div
                                    className={classes.userEmailBlock}
                                >
                                    <a
                                        href={"#"}
                                    >
                                        {userState.user.email}
                                        <Arrow
                                            className={classes.arrow}
                                            direction={
                                                logOutVisible? Direction.toUp : Direction.toBottom}
                                        />
                                    </a>


                                </div>
                                <ul
                                    className={classes.innerList + " "+((logOutVisible)?classes.visibleList:classes.hiddenList)}>
                                    <li>
                                        <div>
                                            <Link to={"/profile"}>
                                                Профиль
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link
                                                onClick={userLogout}
                                                to={"/"}>
                                                Выйти
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            :<li>
                                <Link
                                    to={"/auth"}>
                                    Авторизация
                                </Link>
                            </li>
                    }
                </ul>
            </div>
        </header>
    );
};

export default Header;