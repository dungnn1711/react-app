
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

import HeaderIndex from "./components/header/header-index";
import IndexPage from "./components/index/page-index";
import FooterIndex from "./components/footer/footer-index";
import Login from "./components/login/login-index";
import { getAuthSelector } from "./store/authentication/selector";

import "./index.css";

const App = () => {
    const isAuthenticated = useSelector(getAuthSelector);
    const renderIndex = isAuthenticated ? <IndexPage /> : <Login />;

    useEffect(() => {
        console.log("isAuthenticated:", isAuthenticated);
    }, [isAuthenticated]);

    return (
        <IndexPage />
    );
}

export default connect(null, null)(App);