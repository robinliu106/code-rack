import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
    startAddExpense,
    addExpense,
    editExpense,
    startEditExpense,
    removeExpense,
    startRemoveExpense,
    setExpenses,
    startSetExpenses,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const uid = "testuid";
const defaultAuthState = { auth: { uid } };

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database
        .ref(`users/${uid}/expenses`)
        .set(expensesData)
        .then(() => done()); //use done to make sure test cases after the data is loaded in firebase
});

test("Should setup add expense action object w/ provided values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2],
    });
});

test("Should add expense to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: "Mouse",
        note: "this the mouse",
        amount: 3000,
        createdAt: 1000,
    };

    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "ADD_EXPENSE",
                expense: { id: expect.any(String), ...expenseData },
            });
            return database
                .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
                .once("value");
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});
test("Should add expense with defaults to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0,
    };

    store
        .dispatch(startAddExpense())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "ADD_EXPENSE",
                expense: { id: expect.any(String), ...expenseDefaults },
            });
            return database
                .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
                .once("value");
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });
});

// test("Should setup add expense action object w/o provided values", () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: "",
//             amount: 0,
//             createdAt: 0,
//             note: "",
//         },
//     });
// });

test("Should setup removeExpense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123abc" });
});
//objects and array cannot be compared with === , must use toEqual

test("Should remove expense from firebase", (done) => {
    //add done variable for async tests
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store
        .dispatch(startRemoveExpense({ id }))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "REMOVE_EXPENSE",
                id,
            });
            return database.ref(`users/${uid}/expenses/${id}`).once("value");
        })
        .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
});

test("Should setup editExpense action object", () => {
    const action = editExpense("321cba", {
        description: "new description",
    });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "321cba",
        updates: {
            description: "new description",
        },
    });
});

test("Should edit expense from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 21045 };

    store
        .dispatch(startEditExpense(id, updates))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "EDIT_EXPENSE",
                id,
                updates,
            });
            return database.ref(`users/${uid}/expenses/${id}`).once("value");
        })
        .then((snapshot) => {
            expect(snapshot.val().amount).toBe(updates.amount);
            done();
        });
});

test("Should setup set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({ type: "SET_EXPENSES", expenses });
});

test("Should fetch the expenses from firebase", (done) => {
    //add done to tell jest not to consider it a pass/fail until is done is called
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        //.then to wait for data to actually be fetched
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses,
        });
        done();
    });
});
