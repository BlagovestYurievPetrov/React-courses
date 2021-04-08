import React from 'react';
import {getFunName} from '../helpers.js'; 
export class StorePicker extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>Fish!</p>
                <form className="store-selector">
                    <h2>Please enter a store!</h2>
                    <input type="text" required placeholder="store name" defaultValue={getFunName()}></input>
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>

        )
    }
}