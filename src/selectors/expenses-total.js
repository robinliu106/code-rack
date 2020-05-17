/*getExpensesTotal*/
export default (expenses) =>
    expenses.reduce((sum, expense) => sum + expense.amount, 0);
// .map((expense) => expense.amount)
