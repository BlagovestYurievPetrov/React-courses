import React from 'react';
import { Header } from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import fishes from '../sample-fishes.js';
import Fish from './Fish.js';
import base from '../base.js';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    componentDidMount() {
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        if (localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'

        })
    }
    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order));
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    loadSampleFishes = () => {
        this.setState({ fishes });
    }
    addFish = (fish) => {
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
    }
    updateFish = (key, updatedFish) => {
        const fishes = { ...this.state.fishes };
        fishes[key] = updatedFish;
        this.setState({ fishes });
    }
    deleteFish = (key) => {
        const fishes = { ...this.state.fishes };
        fishes[key] = null;
        this.setState({ fishes });
    }
    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }
    deleteOrder = (key) => {
        const order = { ...this.state.order };
        delete order[key];
        this.setState({ order });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} deleteOrder={this.deleteOrder} />
                <Inventory 
                addFish={this.addFish}
                deleteFish={this.deleteFish} 
                updateFish={this.updateFish} 
                loadSampleFishes={this.loadSampleFishes} 
                fishes={this.state.fishes}
                storeId={this.props.match.params.storeId}/>
            </div>
        )
    }

}

export default App;