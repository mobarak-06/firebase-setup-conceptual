import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser, setUser } = useContext(AuthContext);
  
  const [registerError, setRegisterError] = useState("")
  const [emailError, setEmailError] = useState('')

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, photo, email, password, confirmPassword);

    setEmailError('')
    setRegisterError('')

    // if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
    //     setEmailError('provide a valid email like ..@gmail.com')
    //     return;
    // }
    // if (password.length < 6) {
    //     setRegisterError('password should be 6 characters')
    //     return;
    // }
    // if (password !== confirmPassword) {
    //     setRegisterError('password do not match')
    //     return;
    // }
    // if (!/\d{2}$/.test(password)) {
    //     setRegisterError("password must end at least 2 digit")
    //     return
    // }
    // if (!/[@#%&!]/.test(password)) {
    //     setRegisterError('please add a special character like @,#,%,!')
    //     return
    // }

    
    registerUser(email, password)
    .then(result => {
        console.log(result);
        setUser(result.user);
    })
    .catch(error => {
        console.log(error);
        setRegisterError(error.message);
    })
  };
  return (
    <div className="w-[40%] mx-auto min-w[500px] border-2 border-red-400 p-2 rounded-lg">
      <form onSubmit={handleRegister}>
        <div>
          <p>Name</p>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Photo</p>
          <input
            name="photo"
            type="text"
            placeholder="Photo"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
        {emailError && <p className="text-red-600 font-bold">{emailError}</p>}
        <div>
          <p>Password</p>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mt-2">
          <button type="submit" className="btn btn-primary w-full ">
            Register
          </button>
          {
            registerError && <p className="text-red-600 font-bold">{registerError}</p>
          }
        </div>
      </form>
    </div>
  );
};

export default Register;
