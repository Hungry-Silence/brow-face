import React from 'react';
import './Services.scss';
import data from './assets/data/data';

function Services() {
    return (
        <div className="container">
            <h2 className="section-title">Меню услуг</h2>
            <p className="section-description">Ознакомьтесь с возможностями наших специалистов и ценовой политикой</p>
            <div className="section-content">
                <div className="services">
                    {
                        data.map(({id, img, title , main, other}) => (
                            <div className="service" key={id}>
                                <div className="service-preview">
                                    <img src={ require(`./assets/imgs/${img}.jpeg`).default } alt=""/>
                                </div>
                                <div className="service-info">
                                    <h3 className="service-info__title">{title}</h3>
                                    <ul className="service-price-list">
                                        {
                                            main.map(({id, price, title}) => (
                                                <li className="service-price-list-item" key={id}>
                                                    <div className="price">{price}</div>
                                                    <div className="name">{title}</div>
                                                </li>
                                            ))
                                        }
                                    </ul>                            
                                    {                                
                                        other && other.map(({title, items}) => (
                                            <React.Fragment key={title}>
                                                <h4>{title}</h4>
                                                <ul>
                                                {
                                                    items.map(({id, price, title}) => (
                                                        <li className="service-price-list-item" key={id}>
                                                            <div className="price">{price}</div>
                                                            <div className="name">{title}</div>
                                                        </li>
                                                    ))
                                                }
                                                </ul>
                                            </React.Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>    
            </div>
        </div> 
    )
}

export default Services
