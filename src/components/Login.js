import React from "react";
import { useState} from "react";
import {login} from "../utils"

const Login = ({setter}) => {
    const [username, setUserName] = useState ();
    const [email, setEmail] = useState ();
    const [password, setPassword] = useState ();

    const submitHandler = async (event) => {
        event.preventDefault();
        await login(username, email, password, setter)
    }

    return (
        <form onSubmit = {submitHandler}>
            <label>username
                <input onChange = {(event) => setUserName (event.target.value)} />
            </label>

            <label>Email
                <input onChange = {(event) => setEmail (event.target.value)} />
            </label>

            <label>Password:
                <input onChange = {(event) => setPassword (event.target.value)} />
            </label>
            <br></br>
            <button type="submit">Click here to login</button>
        </form>
    )
}

export default Login;