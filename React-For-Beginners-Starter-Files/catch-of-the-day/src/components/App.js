import React from 'react';
import {Header} from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import fishes from '../sample-fishes.js';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    loadSampleFishes = () => {
        this.setState({fishes});
    }
    addFish = (fish) => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({fishes});
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                <Header tagline="Fresh seafood market"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }

}

export default App;