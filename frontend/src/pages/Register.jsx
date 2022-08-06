import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeButton from "../components/Nav/HomeButton";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import styled from "styled-components";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    password2: "",
  });

  const { username, email, fullname, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const userData = {
        fullname,
        username,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <HomeButton />
      <LoginBox>
        <section className="heading container">
          <Heading>
            <h1>Sign Up Page</h1>
            <Heading2>Sign up now to be a member of Pomodoro!</Heading2>
          </Heading>
        </section>

        <section className="form">
          <ToastContainer autoClose={3000} />
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={onChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={onChange}
                placeholder="Enter your user name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                onChange={onChange}
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-block">Sign Up</button>
            </div>
          </form>
          <p className="container">
            Already have an account? <Link to="/login">Sign in</Link>{" "}
          </p>
        </section>
      </LoginBox>
    </>
  );
}

export default Register;

const LoginBox = styled.div`
  margin-top: 70px;
`;
const Heading = styled.div`
  color: #a92323;
`;
const Heading2 = styled.div`
  color: #824646;
`;
