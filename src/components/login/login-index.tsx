
import { FC } from 'react';
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface LoginProps {
    handleLogin: any
}

let [username, passwrod, remember]: any = '';

const Login: FC<LoginProps> = ({ handleLogin }) => {
    const onFinish = (values: any) => {
        username = values.username;
        passwrod = values.password;
        remember = values.remember;
        handleLogin();
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div id='login-content'>
            <Form
                name="basic"
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

const mapStateToProps = (state: any) => ({ state });

const mapDispatchToProps = (dispatch: any) => {
    return {
        // Dispatch login action
        handleLogin: () => dispatch({ type: 'REQUEST_LOGIN', payload: { username: username, password: passwrod } })
    }
};

export default connect(null, mapDispatchToProps)(Login);