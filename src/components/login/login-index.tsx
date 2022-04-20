
import { FC } from 'react';
import { connect, RootStateOrAny } from "react-redux";
import { Dispatch } from 'redux';

interface LoginProps {
    handleLogin: Function
}

type LoginData = {
    username: string,
    password: string,
    remember: boolean
}

const Login: FC<LoginProps> = (props: LoginProps) => {
    return (
        <div id='login-content'>
        </div>
    );
};

const mapStateToProps = (state: RootStateOrAny) => ({ state });

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // Dispatch login action
        handleLogin: (data: LoginData) => dispatch({ type: 'REQUEST_LOGIN', payload: { username: data.username, password: data.password } })
    }
};

export default connect(null, mapDispatchToProps)(Login);