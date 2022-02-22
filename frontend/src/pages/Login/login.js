import './login.css';

export default function RenderLogin() {
    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="login">
                    <h1>Login</h1>
                    <form method="post">
                        <input type="text" name="username" placeholder="Username" required="required"/>
                        <input type="password" name="password" placeholder="Password" required="required"/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}