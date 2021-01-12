import React from "react";
import ExpenseListFilters from "./ExpenseListFilters";
import CodeSummary from "./CodeSummary";
import ExpenseList from "./ExpenseList";

const CodeDashboardPage = () => (
    <div>
        <CodeSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default CodeDashboardPage;
