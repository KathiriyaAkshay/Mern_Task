import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/login')
  }
  
  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
  }, [userLogin])

  return (
    <>
    {userInfo?
      <Navbar>
        <Container>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <Nav.Link>
                <Link to='/home'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/about'>About Us</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/HandT'>H and T</Link>
              </Nav.Link>
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>:""}
    </>
  )
}

export default Header
