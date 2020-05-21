import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";

import configureStore from "./store/configureStore";

import { startSetExpenses } from "./actions/expenses";
import { setTextFilter, sortByDate, sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
let renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User logged in");

        store.dispatch(startSetExpenses()).then(() => {
            //load expenses from firebase
            renderApp();
            if (history.location.pathname === "/") {
                //user is on the login page
                history.push("/dashboard");
            }
        });
    } else {
        console.log("User logged out");
        renderApp();
        history.push("/");
    }
});
