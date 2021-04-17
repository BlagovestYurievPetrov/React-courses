import React from 'react';
import { Header } from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import fishes from '../sample-fishes.js';
import Fish from './Fish.js';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    loadSampleFishes = () => {
        this.setState({ fishes });
    }
    addFish = (fish) => {
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
    }
    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market" />
                    <ul className="fishes">
                       {Object.keys(this.state.fishes).map(key=><Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        )
    }

}

export default App;