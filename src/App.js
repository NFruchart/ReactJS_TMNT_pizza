import React, { Component } from 'react';

// Stylesheets
import './stylesheets/App.scss';

// import des icônes de Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShippingFast, faFire, faEuroSign ,faPizzaSlice, faArrowLeft, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

import tiles from './Tiles'
import Tile from "./components/Tile";
import Header from "./components/Header";

//ajout des icônes que l'on utilise dans l'ensemble de l'app
library.add(faEuroSign, faFire, faShippingFast, faPizzaSlice, faArrowLeft, faEdit, faTrash);

class App extends Component {

  handleClick = action => {
    this.props.history.push(action)
  }
  
  renderTiles = () => {
    return tiles.map(item => 
    <Tile key={item.action} name={item.name} icon={item.icon} desc={item.description} bgColor={item.bgColor} action={() => this.handleClick(item.action)}/>)
  }

  render() {
    return (
      <div className="App">
        <Header isHome={true}/>
        <div className="tiles-wrapper">
          {this.renderTiles()}
        </div>
      </div>
    );
  }

}

export default App;
