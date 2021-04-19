import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm.js';
import EditFishForm from './EditFishForm.js';

class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        deleteFish: PropTypes.func,
        updateFish: PropTypes.func,
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    }
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(key =>
                    <EditFishForm
                        deleteFish={this.props.deleteFish}
                        updateFish={this.props.updateFish}
                        index={key} key={key}
                        fish={this.props.fishes[key]} />)}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;