import { useState } from 'react';
import authUtils from '../../utils/auth.utils';
import './login.css';

export default function RenderLogin() {
    const [ userInfo, setUserInfo ] = useState({ email: "", password:"" })

    function updateEmail(e) {
        setUserInfo({...userInfo, email:e.target.value})
    }

    function updatePassword(e) {
        setUserInfo({...userInfo, password:e.target.value})
    }

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="login">
                    <h1>Login</h1>
                    <form onSubmit={ () => authUtils.login({ user:userInfo }) } method="post">
                        <input onChange={ updateEmail } type="text" name="email" placeholder="Email" />
                        <input onChange={ updatePassword } type="password" name="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}