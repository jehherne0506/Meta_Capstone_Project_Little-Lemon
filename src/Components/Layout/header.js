import './header.css'
import HeaderLogoImg from "../Pages/Home/Header/header_logo_img";
import Navbar from "../Pages/Home/Header/header_nav";
import HeaderCartImg from "../Pages/Home/Header/header_shopping_cart_img";
import HamburgerMenu from "../Pages/Home/Header/hamburger_menu";
import {  useState } from 'react'


function Header(){
    const [open,withOpen] = useState(false)
    if (open){
        return (
            <>
                <div className="header">
                    <HeaderLogoImg />
                    <HeaderCartImg />
                    <HamburgerMenu value={open} setValue={withOpen}/>
                </div>
                <Navbar classname='open' value={open} setValue={withOpen} />
            </>

        )
    }
    else{
        return (
            <div className="header">
                <HeaderLogoImg />
                <Navbar classname='close'/>
                <HeaderCartImg />
                <HamburgerMenu value={open} setValue={withOpen}/>
            </div>
        )
    }

}

export default Header