import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header className="header" id="Top">
            <a href="" className="tel">
                <FontAwesomeIcon icon={['fab', 'whatsapp']} size="2x" /> 
                +8 765 445 21 32
            </a>
            <nav className="header-menu">
                <a className="header-menu__item" href="#AboutUs">О нас</a>
                <a className="header-menu__item" href="#Services">Наши услуги</a>
                <a className="header-menu__item" href="#Contacts">Где нас найти</a>
            </nav>
            <a href="" className="socials">
                Наш instagram: 
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
            </a>
        </header>
    )
}

export default Header
