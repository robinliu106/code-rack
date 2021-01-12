import uuid from "uuid";
import database from "../firebase/firebase";

//ADD_SNIPPET
export const addSnippet = (expense) => ({
    type: "ADD_SNIPPET",
    expense,
});

export const startAddSnippet = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database
            .ref(`users/${uid}/expenses`)
            .push(expense)
            .then((ref) => {
                dispatch(addSnippet({ id: ref.key, ...expense }));
            });
    };
};

//REMOVE_SNIPPET
export const removeSnippet = ({ id } = {}) => ({
    type: "REMOVE_SNIPPET",
    id,
});

export const startRemoveSnippet = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //return async action
        return database
            .ref(`users/${uid}/expenses/${id}`)
            .remove()
            .then(() => {
                dispatch(removeSnippet({ id }));
            });
    };
};

//EDIT_SNIPPET
export const editSnippet = (id, updates) => ({
    type: "EDIT_SNIPPET",
    id,
    updates,
});

export const startEditSnippet = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database
            .ref(`users/${uid}/expenses/${id}`)
            .update(updates)
            .then(() => {
                dispatch(editSnippet(id, updates));
            });
    };
};

//SET_SNIPPETS
export const setExpenses = (expenses) => ({
    type: "SET_SNIPPETS",
    expenses,
});

// export const startSetSnippets;
export const startSetSnippets = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database
            .ref(`users/${uid}/expenses`)
            .once("value")
            .then((snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val(),
                    });
                });
                dispatch(setExpenses(expenses));
            });
    };
};
