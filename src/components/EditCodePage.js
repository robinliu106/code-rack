import React from "react";
import { connect } from "react-redux";
import CodeForm from "./CodeForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditCodePage = (props) => {
    const onSubmit = (expense) => {
        props.startEditExpense(props.expense.id, expense);
        props.history.push("/"); //has access to history api because history is passed into the component because the component is registered to a route
    };
    const onRemove = () => {
        props.startRemoveExpense({ id: props.expense.id });
        props.history.push("/");
    };

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Code</h1>
                </div>
            </div>
            <div className="content-container">
                <CodeForm expense={props.expense} onSubmit={onSubmit} />

                <button className="button button--secondary" onClick={onRemove}>
                    Remove Expense
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCodePage);
