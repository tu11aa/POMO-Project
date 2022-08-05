import {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
// import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import styled from "styled-components";

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  
  const {username, password} = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    // Redirect when logged in
    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e) =>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      username,
      password
    }

    dispatch(login(userData))
  }

  if(isLoading) {
    return <Spinner />
  }

    return (
      <>
      <LoginBox>
        <section className="heading">
        <Heading>
          <h1>
            Sign In Page
          </h1>
          <Heading2>Sign in for more features</Heading2>
        </Heading>
        </section>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input 
              type="username" 
              className="form-control" 
              id='username' 
              name='username' 
              value={username} 
              onChange={onChange} 
              placeholder='Enter your username' 
              required 
              />
            </div>
            <div className="form-group">
              <input 
              type="password" 
              className="form-control" 
              id='password' 
              name='password' 
              value={password} 
              onChange={onChange} 
              placeholder='Enter your password' 
              required 
              />
            </div>
            <div className="formgroup">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
        </section>
      </LoginBox>
        
      </>
    )
  }
  export default Login


const LoginBox = styled.div`
  margin-top: 70px;
`;
const Heading = styled.div`
  color: #a92323
`
const Heading2 = styled.div`
  color: #824646
`