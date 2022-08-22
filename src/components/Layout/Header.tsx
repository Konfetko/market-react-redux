import React, {useEffect, useState} from 'react';
//@ts-ignore
import classes from '../styles/Header.module.scss'
import {Link} from "react-router-dom";
import SmallCart from "../Products/SmallCart";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getUserState, logout} from "../../store/user/userSlice";
import Arrow, {Direction} from "../Arrow";

const Header = () => {
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
                                    <Link
                                        to={"/"}>
                                        {userState.user.email}
                                        <Arrow
                                            className={classes.arrow}
                                            direction={
                                                logOutVisible? Direction.toUp : Direction.toBottom}
                                        />
                                    </Link>


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