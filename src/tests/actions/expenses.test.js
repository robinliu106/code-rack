import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup add expense action object w/ provided values", () => {
    const expenseData = {
        description: "rent",
        amount: 140000,
        createdAt: 1000,
        note: "last months rent",
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            ...expenseData,
        },
    });
});

test("Should setup add expense action object w/o provided values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            amount: 0,
            createdAt: 0,
            note: "",
        },
    });
});

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
