import React, {LegacyRef, memo} from 'react';
//@ts-ignore
import classes from '../styles/Footer.module.scss'


export interface IFooterProps{
    footerRef:LegacyRef<HTMLDivElement>
}

const Footer = memo(({footerRef}:IFooterProps) => {
    return (
        <footer
            className={classes.footer}
            ref={footerRef}>
            <div
                className={classes.innerContent}>
                <h3
                    className={classes.title}>
                    Учебный проект для развития навыков работы с React и Redux.
                </h3>
                <div
                    className={classes.description}>
                    Сайт эмулирует работы интернет-магазина. Отсутствует backend, в качестве API используются данные взятые
                    с сайта fakeapi.com. Так как сайт служил для развития навыков разработки frontend, backend не разрабатывался
                </div>
                <div
                    className={classes.producedBy}>
                    Разработчик: Ерошевич В.А. / Yeroshevich V.A.
                    <div
                        className={classes.links}>
                        <a
                            href="https://github.com/yeroshevich">
                            <img src={require('../images/GitHub-Mark-Light-64px.png')} alt=""/>
                        </a>
                        <a
                            href="https://t.me/Konfetk0">
                            <img src={require('../images/logo_telegram_airplane_air_plane_paper_airplane_icon_143169.png')} alt=""/>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
