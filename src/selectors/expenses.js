import moment from "moment";

//Get visible expenses
export default (expenses, { text }) => {
    return expenses
        .filter((expense) => {
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
            return textMatch;
        })
        .sort((a, b) => {
            return a.createdAt < b.createdAt ? 1 : -1;
        });
};
