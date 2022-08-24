import styles from "./Header.module.css";
import logo from '../../assets/logo.png';
import { useState } from "react";

import NavItem from "./NavItem";


const HEADER_TEXTS = [
    "MÁS RECIENTES | トップ",
    "ENTRETENIMIENTO | エンタメ",
    "DEPORTES | スポーツ",
    "LOGIN | ログイン",
];

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);
    const listClickHandler = () => {
        setShowLinks(prevState => !prevState);
    };
    // Adds .hidden to .links if needed
    const linksNavClassName = styles.links + (showLinks ? ` ${styles.hidden}` : '');
    return (
        <header className={styles.header}>
            <nav className={styles.logoNav}>
                <img src={logo} alt="kusa-news logo" className={styles.logo}/>
            </nav>
            <nav className={linksNavClassName}>
                {HEADER_TEXTS.map(
                    (value, index) => {
                        return <NavItem text={value} key={value + index}/>
                    }
                )}
            </nav>
            <nav className={styles.list} onClick={listClickHandler}>sexo</nav>
        </header>
    );
};

export default Header;