import { FC } from "react";
import { connect } from "react-redux";

interface IndexProps {
    message?: string
}

const Footer: FC<IndexProps> = () => {
    return (
        <div>
            Reference Application ©2021 Created by Nguyen Ngoc Dung
        </div>
    );
};

export default connect(null, null)(Footer);