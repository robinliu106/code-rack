import React from "react";
import CodeListFilters from "./CodeListFilters";
import CodeSummary from "./CodeSummary";
import CodeList from "./CodeList";

const CodeDashboardPage = () => (
    <div>
        <CodeSummary />
        <CodeListFilters />
        <CodeList />
    </div>
);

export default CodeDashboardPage;
