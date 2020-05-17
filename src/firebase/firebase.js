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

// database.ref("expenses").on("value", (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
//     });
//     console.log(expenses);
// });

//Expense Removed
database.ref("expenses").on("child_removed", (snapshot) => {
    console.log("REMOVED ", snapshot.key, snapshot.val());
});

//Expense Changed
database.ref("expenses").on("child_changed", (snapshot) => {
    console.log("CHANGED ", snapshot.key, snapshot.val());
});

//Expense Added //also gets called for existing children in addition to new ones
database.ref("expenses").on("child_added", (snapshot) => {
    console.log("ADDED ", snapshot.key, snapshot.val());
});

// database.ref("expenses").push({
//     description: "bills",
//     note: "this note",
//     amount: 1000,
//     createdAt: 1234,
// });
// database.ref("expenses").push({
//     description: "rent",
//     note: "this note",
//     amount: 10000,
//     createdAt: 1234,
// });
// database.ref("expenses").push({
//     description: "food",
//     note: "this note",
//     amount: 1000,
//     createdAt: 1234,
// });

// database.ref("notes/-M7YpJfaFcXvdAeaiTLR").update({ body: "buy food" });

// database.ref("notes").push({ title: "course topics", body: "react redux" });

// const firebaseNotes = {
//     notes: {
//         asdlijlkj: {
//             title: "first note",
//             body: "this is the note",
//         },
//         asdfdsd: {
//             title: "second note",
//             body: "this is second note",
//         },
//     },
// };

// const notes = [
//     { id: "12", title: "first note", body: "this is the note" },
//     { id: "12", title: "second note", body: "this is the second note" },
// ];

// database.ref().set(firebaseNotes);

// database.ref().on("value", (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on(
//     "value",
//     (snapshot) => {
//         console.log(snapshot.val());
//     },
//     (e) => {
//         console.log("Error with data fetching", e);
//     }
// );

// database.ref().on("value", (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref().off(onValueChange); //get a snapshot of the data when calling off
// }, 1000);

// setTimeout(() => {
//     database.ref().off();
// }, 1000);

// database
//     .ref()
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log("error fetching data", error);
//     });

// database
//     .ref()
//     .set({
//         name: "Robin Liu",
//         age: 24,
//         job: { title: "Software Dev", company: "Athenium" },
//         stressLevel: 6,
//         isSingle: false,
//         location: {
//             city: "Boston",
//             country: "United States",
//         },
//     })
//     .then(() => {
//         console.log("Data is saved");
//     })
//     .catch((error) => {
//         console.log("Error in saving data: ", error);
//     });

// database.ref("age").set(27);
// database.ref("location/city").set("Hong Kong");
// database
//     .ref("attributes")
//     .set({ height: "5'7", weight: 160 })
//     .catch((e) => {
//         console.log("Things didnt work for second error");
//     });

// database
//     .ref("isSingle")
//     .remove()
//     .then(() => {
//         console.log("data was removed");
//     })
//     .catch((e) => {
//         console.log("error: ", e);
//     });

// database.ref().update({
//     stressLevel: 10,
//     "job/company": "FBI",
//     "location/city": "Venice",
// });
