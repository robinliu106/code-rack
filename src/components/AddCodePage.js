import React from "react";
import { connect } from "react-redux";
import CodeForm from "./CodeForm";
import { startAddExpense } from "../actions/expenses";

const AddSnippetPage = (props) => {
    const onSubmit = (expense) => {
        props.startAddExpense(expense);
        props.history.push("/"); //redirect to dashboard upon submit
    };

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Code</h1>
                </div>
            </div>
            <div className="content-container">
                <CodeForm onSubmit={onSubmit} />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddSnippetPage);
