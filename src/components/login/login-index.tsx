
import { FC } from 'react';
import { connect, RootStateOrAny } from "react-redux";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Dispatch } from 'redux';

interface LoginProps {
    handleLogin: Function
}

type LoginData = {
    username: string,
    password: string,
    remember: boolean
}

const Login: FC<LoginProps> = (props) => {
    const initUserData: LoginData = {
        username: '',
        password: '',
        remember: false
    }

    const onFinish = (data: LoginData) => {
        initUserData.username = data.username;
        initUserData.password = data.password;
        initUserData.remember = data.remember;
        props.handleLogin(initUserData);
    };

    const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div id='login-content'>
            <Form
                name="normal_login"
                initialValues={{ remember: false }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    wrapperCol={{ offset: 9, span: 6 }}
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ offset: 9, span: 6 }}
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="unchecked" wrapperCol={{ offset: 9, span: 6 }}>
                    <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 9, span: 6 }}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Submit
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
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