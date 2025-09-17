import React from 'react';
import style from "./Header.module.css"
import logoIcon from '/logo.svg'
import type { HeaderProps } from '../../types';

const Header: React.FC<HeaderProps> = ({navigation, contactButton}) => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>
                    <div className={style.logoIcon}>
                        <img src={logoIcon} alt="logo" />
                    </div>
                </div>
                <nav className={style.navigation}>
                    {navigation.map((item, index) => (
                        <a key={index} href={item.href} className={style.navLink}>
                            {item.text}
                        </a>
                    ))}
                </nav>
                <button className={style.contactButton}>
                    {contactButton.text}
                </button>
            </div>
        </header>
    )
}

export default Header