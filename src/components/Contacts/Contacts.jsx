import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contacts.scss';

function Contacts() {
    return (
        <div className="container">
            <h2 className="section-title">Где нас найти</h2>
            <div className="section-content">
                <div className="contacts">
                    <a href="" className="tel">
                        <FontAwesomeIcon icon={['fab', 'whatsapp']} size="2x" /> 
                        +8 765 445 21 32
                    </a>
                    <a href="" className="socials">
                        Наш instagram: 
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                    </a>
                </div>
                <div className="location">                
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2084c6fafd5df2d1d231be81448a127cbde3226059747f94a96db0ef48bdb3cc&amp;source=constructor" width="100%" height="450" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacts
