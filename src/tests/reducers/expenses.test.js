import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense by id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: -1,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
    const expense = {
        id: "4",
        description: "Game",
        note: "",
        amount: 7000,
        createdAt: 0,
    };

    const action = {
        type: "ADD_EXPENSE",
        expense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses.concat(expense));
    // expect(state).toEqual([...expenses, expense]); //also valid
});

test("Should edit an expense", () => {
    const amount = 909090;
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates: {
            amount,
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(amount);
});

test("Should not edit expense if id not found", () => {
    const updates = {
        amount: 9090234,
    };

    const action = {
        type: "EDIT_EXPENSE",
        id: "123",
        updates,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should set expenses", () => {
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]],
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});
