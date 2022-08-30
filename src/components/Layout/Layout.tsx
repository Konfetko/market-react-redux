import React, {memo, useRef} from 'react';
import Header from "./Header";
import Footer from "./Footer";

export interface ILayoutProps{
    children:React.ReactNode
}

const Layout = memo(({children}:ILayoutProps) => {
    const footerRef = useRef<HTMLDivElement>(null)
    const toFooter = ()=>{
        if(footerRef !==null)
            { // @ts-ignore
                footerRef.current.scrollIntoView();
            }
    }

    return (
        <>

            {children}
            <Header onAboutClick={toFooter}/>
            <Footer footerRef={footerRef}/>
        </>
    );
});

export default Layout;