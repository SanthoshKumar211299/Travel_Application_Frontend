import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import { BASE_URL } from '../utils/config'; // Import BASE_URL
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const ResetPassword = () => {
  const [credentials, setCredentials] = useState({
    password: '',
    confirmPassword:'',
    token:''
  });
  const handleChange = e => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
};
  const { dispatch, loading, error, message } = useContext(AuthContext);
  const { token } = useParams(); // Get the token from URL parameters
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    dispatch({ type: 'RESET_PASSWORD_START' });

    try {
      const res = await fetch(`${BASE_URL}auth/resetPassword/${token}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        credentials:'include',
        body: JSON.stringify({token,password:credentials.password,confirmPassword:credentials.confirmPassword}), // Include token and password in the body
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      dispatch({ type: 'RESET_PASSWORD_SUCCESS', payload: 'Password has been reset successfully!' });
      navigate('/login'); // Redirect to login after a successful reset
    } catch (err) {
      dispatch({ type: 'RESET_PASSWORD_FAILURE', payload: err.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className='login__img'>
                <img src={loginImg} alt=''/>
              </div>
              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt='' />
                </div>
                <h2>Reset Password</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Input
                      type='password'
                      placeholder='Enter the new Password'
                      required
                      id='password'
                      value={credentials.password}
                      onChange={handleChange}
                    />
                  </FormGroup>
                 <FormGroup>
                    <Input
                      type='password'
                      placeholder='Confirm the new Password'
                      required
                      id='confirmPassword'
                      value={credentials.confirmPassword}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className='btn secondary__btn auth__btn'
                    type='submit'
                    disabled={loading}
                  >
                    {loading ? 'Resetting...' : 'Reset Password'}
                  </Button>
                </Form>
                {message && <p>{message}</p>}
                {error && <p>{error}</p>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ResetPassword;

