import React from 'react';
import {getFunName} from '../helpers.js'; 
export class StorePicker extends React.Component {
    
    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <React.Fragment>
                <p>Fish!</p>
                <form onSubmit={this.goToStore} className="store-selector">
                    <h2>Please enter a store!</h2>
                    <input ref={this.myInput}type="text" required placeholder="store name" defaultValue={getFunName()}></input>
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>

        )
    }
}