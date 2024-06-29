import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext);

    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
    }
    return (
        <div className="w-[40%] mx-auto min-w[500px] border-2 border-red-400 p-2 rounded-lg">
        <form onSubmit={handleLogin}>
          <div>
            <p>Email</p>
            <input
            name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <p>Password</p>
            <input
            name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mt-2">
          <button type="submit" className="btn btn-primary w-full ">Login</button>
          </div>
        </form>
      </div>
    );
};

export default Login;