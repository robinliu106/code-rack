import * as firebase from "firebase"; //* takes all named exports and dumps into "firebase"

const config = {
    apiKey: "AIzaSyDdxPkoT2-hZvA9TVr1aNzJtt5xrExr63M",
    authDomain: "expensify-dc8b6.firebaseapp.com",
    databaseURL: "https://expensify-dc8b6.firebaseio.com",
    projectId: "expensify-dc8b6",
    storageBucket: "expensify-dc8b6.appspot.com",
    messagingSenderId: "46222880901",
    appId: "1:46222880901:web:6436459cf876782abe39ec",
    measurementId: "G-XS9NWVGPW1",
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
