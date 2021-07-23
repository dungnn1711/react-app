
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import IndexPage from "./components/index/page-index";

import Login from "./components/login/login-index";
import { getAuthSelector } from "./store/authentication/selector";

const App = () => {
    const isAuthenticated = useSelector(getAuthSelector) || false;
    const render = isAuthenticated ? <IndexPage /> : <Login />;

    useEffect(() => {
        console.log("isAuthenticated:", isAuthenticated);
    }, [isAuthenticated]);

    return (
        <div style={{ padding: "15px" }}>
            {render}
        </div>
    );
}

export default connect(null, null)(App);