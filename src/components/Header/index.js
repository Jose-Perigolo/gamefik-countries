import React from 'react';
import './styles.css';

// import { Container } from './styles';

function Header() {
  return (
    <header>
    <div className="view intro-2">
        <div className="full-bg-img">
            <div className="mask rgba-indigo-slight flex-center">
                <div className="container">
                    <div className="text-white text-left wow fadeInUp">
                        <h2>GAMEFIK</h2>
                        <h5>Atividade - GraphCountries</h5>
                        <br/>
                        <p>Software em React utilizando GraphQl</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  );
}

export default Header;