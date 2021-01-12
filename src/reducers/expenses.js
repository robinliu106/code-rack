//Expenses Reducer
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_SNIPPET":
            return [...state, action.expense];
        case "REMOVE_SNIPPET":
            return state.filter(({ id }) => action.id !== id);
        case "EDIT_SNIPPET":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates, //override amount (passed in through action.updates)
                    };
                } else {
                    return expense;
                }
            });
        case "SET_SNIPPETS":
            return action.expenses;

        default:
            return state;
    }
};
