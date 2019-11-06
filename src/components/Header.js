import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withRouter} from 'react-router-dom';

const Header = ( {isHome = false, history}) => {

    const goToHome = () => {
        history.push("/");
    }

    return (
        <header className="App-header">
            {!isHome &&
            <FontAwesomeIcon icon="arrow-left" size="2x" className="back-button"
            onClick={() => goToHome()} />
            }
            <div className="title-wrapper">
                <FontAwesomeIcon icon="pizza-slice" />
                <h1>TMNT Pizza</h1>
            </div>
        </header>
    );
};

// Utilisation du HOC (High Order Component) proposé par React Routeur DOM qui permet d'avoir accès aux props match, location et history sans les passer dans le composant Header
export default withRouter(Header);