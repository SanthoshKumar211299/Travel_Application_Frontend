import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/config';

const ForgotPassword = () => {
  const [credentials, setCredentials] = useState({
    email: '',
  });
  
  const navigate = useNavigate();
  const { dispatch, loading, error, message } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'FORGOT_PASSWORD_START' });
  
    try {
      const res = await fetch(`${BASE_URL}/auth/forgotPassword`, {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
  
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned an unexpected response');
      }
  
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
  
      dispatch({ type: 'FORGOT_PASSWORD_SUCCESS', payload: 'Password reset link sent!' });
      alert('Password reset link sent!');
      navigate('/login');
    } catch (err) {
      dispatch({ type: 'FORGOT_PASSWORD_FAILURE', payload: err.message });
      alert(err.message);
    }
  };
  

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className='login__img'>
                <img src={loginImg} alt='' />
              </div>
              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt='' />
                </div>
                <h2>Forgot Password</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Input
                      type='email'
                      placeholder='Email'
                      required
                      id='email'
                      value={credentials.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit' disabled={loading}>
                    {loading ? 'Sending...' : 'Send Reset Link'}
                  </Button>
                </Form>
                {error && <p className='text-danger mt-2'>{error}</p>}
                {message && <p className='text-success mt-2'>{message}</p>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ForgotPassword;
