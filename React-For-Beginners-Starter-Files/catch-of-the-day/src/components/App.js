import React from 'react';
import {Header} from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
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
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }

}

export default App;