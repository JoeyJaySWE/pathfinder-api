import Button from '../components/Button/index';

const Login = ()=>{
    return (
        <section className="login">

            <input type="text" name='username'/>
            <br/>
            <input type="password" name='password'/>
            <br/>
            <Button color="red_die" text="Login"></Button>
        </section>
    );
}

export default Login;