import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

test("Should setup add expense action object w/ provided values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2],
    });
});

test("Should add expense to database and store", (done) => {
    const store = createMockStore({});
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
                .ref(`expenses/${actions[0].expense.id}`)
                .once("value");
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});
test("Should add expense with defaults to database and store", (done) => {
    const store = createMockStore({});
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
                .ref(`expenses/${actions[0].expense.id}`)
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
