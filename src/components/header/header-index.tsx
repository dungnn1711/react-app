import { FC } from "react";
import { connect } from "react-redux";

interface IndexProps {
    message?: string
}

const Header: FC<IndexProps> = () => {
    return (
        <div>
            <h2 id="title-app">Refs Application</h2>
        </div>
    );
};

export default connect(null, null)(Header);