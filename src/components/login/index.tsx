
import { FC, useState } from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

interface LoginProps {
    usernameValue?: string,
    passwrodValue?: string,
    handleLogin?: any
}

let [username, setUsername, passwrod, setPassword]: any = '';

const Login: FC<LoginProps> = ({ handleLogin }) => {
    [username, setUsername] = useState('');
    [passwrod, setPassword] = useState('')

    return (
        <form noValidate autoComplete="off">
            <Card>
                <CardHeader title="Login From" />
                <CardContent>
                    <div>
                        <TextField
                            fullWidth
                            id="username"
                            type="email"
                            label="Username"
                            placeholder="Username"
                            margin="normal"
                            onChange={event => setUsername(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Password"
                            margin="normal"
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={handleLogin}>
                        Login
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
};

const mapStateToProps = (state: any) => ({ state })

const mapDispatchToProps = (dispatch: any) => {
    return {
        // Dispatch login action
        handleLogin: () => dispatch({ type: 'REQUEST_LOGIN', payload: { username: username, password: passwrod } })
    }
}

export default connect(null, mapDispatchToProps)(Login);