import React from 'react';
import './Main.scss';
import Baner from '../Baner/Baner';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Contacts from '../Contacts/Contacts';

function Main() {
    return (
        <main id="main" className="main">

            <section className="section" id="Home">

                <Baner/>

            </section>

            <section className="section" id="AboutUs">

                <AboutUs/>

            </section>

            <section className="section" id="Services">
                
                <Services/>

            </section> 
            
            <section className="section" id="Contacts">
                
                <Contacts/>

            </section>

        </main>
    )
}

export default Main
