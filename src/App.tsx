
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import IndexPage from "./components/index/index-page";

import Login from "./components/login";
import { getAuthSelector } from "./store/authentication/selector";

const App = () => {
    const isAuthenticated = useSelector(getAuthSelector);
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