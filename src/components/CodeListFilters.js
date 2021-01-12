import React, { useState } from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";

const CodeListFilters = (props) => {
    const onTextChange = (e) => {
        props.setTextFilter(e.target.value);
    };

    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input type="text" className="text-input" onChange={onTextChange} placeholder="Search Code" />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CodeListFilters);
