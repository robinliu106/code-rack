import React from "react";
import { connect } from "react-redux";
import CodeListItem from "./CodeListItem";
import selectSnippets from "../selectors/expenses";

export const CodeList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Snippets</div>
            <div className="show-for-desktop">Snippet</div>
            <div className="show-for-desktop">Description</div>
        </div>
        <div className="list-body">
            {props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No Snippets</span>
                </div>
            ) : (
                props.expenses.map((expense) => {
                    return <CodeListItem key={expense.id} {...expense} />;
                })
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectSnippets(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(CodeList);
