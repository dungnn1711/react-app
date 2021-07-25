
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { Layout } from "antd";

import HeaderIndex from "./components/header/header-index";
import IndexPage from "./components/index/page-index";
import FooterIndex from "./components/footer/footer-index";
import Login from "./components/login/login-index";
import { getAuthSelector } from "./store/authentication/selector";

import "antd/dist/antd.css";
import "./index.css";

const { Header, Content, Footer } = Layout;

const App = () => {
    const isAuthenticated = useSelector(getAuthSelector) || false;
    const renderIndex = isAuthenticated ? <IndexPage /> : <Login />;

    useEffect(() => {
        console.log("isAuthenticated:", isAuthenticated);
    }, [isAuthenticated]);

    return (
        <Layout className="layout">
            <Header>
                <HeaderIndex />
            </Header>
            <Content id="main-content">
                <div>
                    <div>
                        {renderIndex}
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                <FooterIndex />
            </Footer>
        </Layout>
    );
}

export default connect(null, null)(App);