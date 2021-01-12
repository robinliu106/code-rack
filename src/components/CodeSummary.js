import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectCodeSnippets from "../selectors/expenses";

export const CodeSummary = ({ codeCount }) => {
    const snippetWord = codeCount === 1 ? "snippet" : "snippets";

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{codeCount}</span> {snippetWord}
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">
                        Add Code
                    </Link>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    const visibleSnippets = selectCodeSnippets(state.expenses, state.filters);

    return {
        codeCount: visibleSnippets.length,
    };
};

export default connect(mapStateToProps)(CodeSummary);
