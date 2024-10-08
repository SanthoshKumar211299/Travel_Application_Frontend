import React, { useEffect, useRef ,useContext} from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import { Button, Container,Row } from 'reactstrap'
import logo from '../../assets/images/Fighter Travel.png'
import './Header.css'
import { AuthContext } from '../../context/AuthContext'
const nav__links = [
    { path: '/home', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/tours', display: 'Tours' },
  ];
  
  const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const {user,dispatch} = useContext(AuthContext)

    const logout = () =>{
      dispatch({type:'LOGOUT'})
      navigate('/')
    }
  
    useEffect(() => {
      const handleScroll = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          if (headerRef.current) {
            headerRef.current.classList.add('sticky__header');
          }
        } else {
          if (headerRef.current) {
            headerRef.current.classList.remove('sticky__header');
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
     
    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')


  return (
    <header className='Header'>
    <Container>
        <Row>
            <div className='nav__wrapper d-flex align-items-center justify-content-between'>
                {/*======logo=====*/}
                <div className='logo'>
                    <img src={logo} alt=''/>

                </div>
                 {/*======logoend=====*/}
                  {/*======menu start=====*/}
                  <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                    <ul className='menu d-flex  align-items-center gap-5'>
                        {nav__links.map((item,index)=>(
                            <li className='nav__item' key={index}>
                                <NavLink to ={item.path} className={navClass=>navClass.isActive ? 'active__link':" "}>{item.display}</NavLink >

                            </li>
                        ))}
                    </ul>
                  </div>
                   {/*======menu end=====*/}
                   <div className='nav__right d-flex align-items-center gap-4'>
                    <div className='nav__btns d-flex align-items-center gap-4'>
                      {
                        user?(
                        <>
                        <h5 className='mb-0'>{user.username}</h5>
                        <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                        </>
                        ):(
                          <>
                          <Button className='btn secondary__btn'>
                        <Link to='/login'>Login</Link>
                        </Button>
                        <Button className='btn primary__btn'>
                        <Link to='/register'>Register</Link>
                        </Button>
                        </>
                        )
                      }
                        
                    </div>
                    <span className='mobile__menu' onClick={toggleMenu}>
                    <i className="ri-menu-line"></i>
                    </span>
                   </div>

            </div>
        </Row>
    </Container>

   </header>
  )
}

export default Header
