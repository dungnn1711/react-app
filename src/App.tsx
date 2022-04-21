
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import HeaderIndex from "./components/header/header-index";
import IndexPage from "./components/index/page-index";
import FooterIndex from "./components/footer/footer-index";
import Login from "./components/login/login-index";
import { REQUEST_GET_CHECKLIST } from "./store/checklist/actionTypes";
import { getAuthSelector } from "./store/authentication/selector";
import { getChecklistSelector } from "./store/checklist/selector";

import "./index.css";

const App = (props: any) => {
    const isAuthenticated = useSelector(getAuthSelector);
    const renderIndex = isAuthenticated ? <IndexPage /> : <Login />;

    useEffect(() => {
        props.fetchChecklist();
    }, []);

    return (
        <IndexPage />
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchChecklist: () => dispatch({ type: REQUEST_GET_CHECKLIST })
    }
};

export default connect(null, mapDispatchToProps)(App);