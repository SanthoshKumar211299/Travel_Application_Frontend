
import React, { useState ,useContext} from 'react'
import { Col, Container,Form,FormGroup,Button, Input, Row } from 'reactstrap'
import '../styles/login.css'
import RegImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Register = () => {
  const[credentials,setCredentials] =useState({
    username:undefined,
    email:undefined,
    password:undefined,
});

const navigate =useNavigate()

const {dispatch} = useContext(AuthContext)

  const handleChange = e => {
    setCredentials(prev => ({...prev,[e.target.id]:e.target.value}))
};

  const handleClick = async (e) => {
     e.preventDefault();
     try{
        const res = await fetch(`${BASE_URL}/auth/register`,{
          method:'post',
          headers:{
            'content-type': 'application/json',
            
          },
          body: JSON.stringify(credentials),
        })
        const result = await res.json()

        if(!res.ok) alert(result.message)
         dispatch({type:'REGISTER_SUCCESS'})
         navigate('/login')
     }
     catch(err){
      alert(err.message)
     }
  };

  return <section>
      <Container>
        <Row>
          <Col lg='8'className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className='login__img'>
                <img src={RegImg} alt=''/>
              </div>
              <div className='login__form'>
               <div className='user'>
                <img src={userIcon} alt='' />
               </div>
               <h2>Login</h2>
               <Form onSubmit={handleClick}>
               <FormGroup>
                  <Input type='text' placeholder='Username' required id='username' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <Input type='email' placeholder='Email' required id='email' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <Input type='password' placeholder='Password' required id='password' onChange={handleChange}/>
                </FormGroup>
                <Button className='btn secondary__btn auth__btn' type='submit'>
                  Create
                </Button>
               </Form>
               <p>Already Have an Account?<Link to='/login'>Login</Link> </p>
              </div>
            </div>
          </Col>

        </Row>
      </Container>

     </section>
};


export default Register
