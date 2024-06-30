import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, loggingWithGoogle, setUser, user } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  const handleGoogleSignIn = () => {
    loggingWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (user) {
      navigate(location.state)
    }
  }, [location.state, navigate, user]);

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
          <button type="submit" className="btn btn-primary w-full ">
            Login
          </button>
        </div>
      </form>
      <button className="btn" onClick={handleGoogleSignIn}>
        Login With Google
      </button>
    </div>
  );
};

export default Login;
