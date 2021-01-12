import { createStore, combineReducers } from "redux";

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// const expenseOne = store.dispatch(
//     addSnippet({ description: "Rent", amount: 100, createdAt: -1000 })
// );
// const expenseTwo = store.dispatch(
//     addSnippet({ description: "Coffee", amount: 300, createdAt: 1000 })
// );

// store.dispatch(removeSnippet({ id: expenseOne.expense.id }));
// store.dispatch(editSnippet(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));
