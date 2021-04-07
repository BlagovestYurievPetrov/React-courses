import React from 'react';

export class StorePicker extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>Fish!</p>
                <form className="store-selector">
                    <h2>Please enter a store!</h2>
                    <input type="text" required placeholder="store name"></input>
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>

        )
    }
}