import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const CodeListItem = ({ id, description, note, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format("ddd, MMM YYYY")}</span>
        </div>
        <div>
            <h3 className="list-item__data">{`${note.slice(0, 20)}...`}</h3>
        </div>
    </Link>
);

export default CodeListItem;
