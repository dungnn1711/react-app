import axios from "axios";
import { User, UserState } from "../store/authentication/types";
import _ from 'lodash';

export const getUsers = async () =>
    axios.get<UserState>("https://60ed613fa78dc700178ade89.mockapi.io/api/users");

export const loginToServer = (inputUser: User) => {
    const validUser: User = {
        username: "admin",
        password: "admin"
    }
    if (_.isEqual(inputUser, validUser)) {
        return {
            data: {
                data: {
                    username: "admin",
                    password: "admin"
                },
                isAuthenticated: true
            }
        };
    }
    return {
        data: {
            isAuthenticated: false
        }
    }
};
