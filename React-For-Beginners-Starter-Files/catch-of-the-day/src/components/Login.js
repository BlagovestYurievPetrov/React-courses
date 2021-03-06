import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
        <nav className="login">
            <h2>Inventory login</h2>
            <p>Sign in to manage your store's inventory</p>
            <button className="facebook" onClick={ () => props.authenticate("Facebook")}>Sign in with facebook</button>
        </nav>
)

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;