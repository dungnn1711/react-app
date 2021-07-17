
import { FC } from 'react';
import { connect } from "react-redux";

interface IndexProps {
    message?: string
}

const IndexPage: FC<IndexProps> = () => {
    return (
        <div>Wellcome! You're login successfully...</div>
    );
};

export default connect(null, null)(IndexPage);