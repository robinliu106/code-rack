import React from "react";
import { Link } from "react-router-dom";

//stateless component can be a function
const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;
