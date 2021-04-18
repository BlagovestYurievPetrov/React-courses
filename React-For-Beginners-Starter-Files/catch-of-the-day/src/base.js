import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmbwFxxhzy3iN4uRsmg5l4Reji06Uch64",
    authDomain: "cotd-b-petrov.firebaseapp.com",
    databaseURL: "https://cotd-b-petrov-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;