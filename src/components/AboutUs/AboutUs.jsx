import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AboutUs.scss';

function AboutUs() {
    return (
        <div className="container">
            <h2 className="section-title">О нас</h2>
            <p className="section-description">
                Brow&face это уникальный узкопрофильный салон красоты, 
                специализирующийся исключительно на дизайне бровей, 
                <br/>
                наращивании и ламинировании ресниц, 
                перманентном макияже, а так же макияже и укладках волос.
            </p>
            <div className="section-content">
                <div className="about-us">
                    <div className="servic">
                        <div className="servic__icon">
                            <FontAwesomeIcon icon={['far', 'clock']} size="5x" /> 
                        </div>
                        <h4 className="servic__name">???</h4>
                        <div className="servic__description">
                            Brow&face имеет удобное местоположение в огромнейшем торговом центре Москвы, 
                            отвечающее потребностям жителей мегаполиса!
                        </div>
                    </div>
                    <div className="servic">
                        <div className="servic__icon">
                            <FontAwesomeIcon icon={['far', 'clock']} size="5x" /> 
                        </div>
                        <h4 className="servic__name">Гарантированное качество</h4>
                        <div className="servic__description">
                            Мы гарантируем профессиональный подход к каждому гостю нашего салона, 
                            качественное оказание услуг, и хорошее настроение!
                        </div>
                    </div>
                    <div className="servic">
                        <div className="servic__icon">
                            <FontAwesomeIcon icon={['far', 'thumbs-up']} size="5x" /> 
                        </div>
                        <h4 className="servic__name">Высокий уровень обслуживания</h4>
                        <div className="servic__description">
                            Наши мастера- профессионалы своего дела! Все наши мастера прошли профильное 
                            обучение у ведущих международных специалистов, и имеют большой опыт в своей сфере!
                        </div>
                    </div>
                    <div className="servic">
                        <div className="servic__icon">
                            <FontAwesomeIcon icon={['far', 'heart']} size="5x" /> 
                        </div>
                        <h4 className="servic__name">Мы любим вас</h4>
                        <div className="servic__description">
                            Мы с гордостью заявляем о любви к своему делу, 
                            и к каждому гостю, пришедшему в наш салон!
                        </div>
                    </div>
                    <div className="servic">
                        <div className="servic__icon">
                            <FontAwesomeIcon icon={['far', 'clock']} size="5x" /> 
                        </div>
                        <h4 className="servic__name">Мы ждем вас</h4>
                        <div className="servic__description">
                            Приходите к нам посмотреть, каким может быть ваш Brow&face!
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default AboutUs