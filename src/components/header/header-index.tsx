import { FC } from "react";
import { connect } from "react-redux";
import { PageHeader } from "antd";

interface IndexProps {
    message?: string
}

const Header: FC<IndexProps> = () => {
    const pageheader = <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
    />;

    return (
        <div>
            <h2 id="title-app">Refs Application</h2>
        </div>
    );
};

export default connect(null, null)(Header);