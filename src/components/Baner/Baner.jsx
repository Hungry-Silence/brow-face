import React from 'react';
import './Baner.scss';

function Baner() {
    return (
        <div className="container">
            <div className="section-content">
                <div className="baner">
                    <div className="baner-logo">
                        <div className="baner-logo__img">
                            Brow<small> & </small>Face
                        </div>
                        Студия дизайна бровей
                    </div>
                    <p>Запишитесь на прием к нашим специалистам</p>
                    <a className="btn btn-pink" href="">
                        Записаться
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Baner