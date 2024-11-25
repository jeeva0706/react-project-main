
import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";
import './Navbar.css';

function NavbarData() {
  const [showSubjectsDropdown, setShowSubjectsDropdown] = useState(false);
  const dropdownRef = useRef(null); // Ref for detecting clicks outside

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setShowSubjectsDropdown(!showSubjectsDropdown);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSubjectsDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='d-inline'>
      <Container fluid className='Navbar-data'>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand className='ms-5 me-md-auto me-sm-auto'>
            <h1 className='letter d-lg-none'>
              <span>E</span>COURSES
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Row className="align-items-center w-100 mt-1">
              <div
                className={`navbar-dropdown-padding ${showSubjectsDropdown ? 'dropdown-active' : ''}`}
                onClick={handleDropdownToggle}
                ref={dropdownRef}
              >
                <Col xs="auto" className="d-none d-lg-flex align-items-center me-3 col-for-subjrct-dropdown">
                  <FaBookOpen className='icon-book-data' />
                  <NavDropdown
                    title="Subjects"
                    className='SUBJCT-FOR-DROP'
                    show={showSubjectsDropdown}
                    onMouseLeave={() => setShowSubjectsDropdown(false)}
                    ref={dropdownRef}
                  >
                    <NavDropdown title="Web Design" className='navbar-list-subjects'>
                      <NavDropdown.Item>HTML</NavDropdown.Item>
                      <NavDropdown.Item>CSS</NavDropdown.Item>
                      <NavDropdown.Item>jQuery</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item>App Design</NavDropdown.Item>
                    <NavDropdown.Item>Marketing</NavDropdown.Item>
                    <NavDropdown.Item>Research</NavDropdown.Item>
                    <NavDropdown.Item>SEO</NavDropdown.Item>
                  </NavDropdown>
                </Col>
              </div>

              <Col className="me-auto">
                <Nav className="ms-4">
                  <Nav.Link as={Link} to="/" className='list-1 ms-2'>Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" className='list-2 ms-2'>About</Nav.Link>
                  <Nav.Link as={Link} to="/courses" className='list-2 ms-2'>Courses</Nav.Link>
                  <Nav.Link as={Link} to="/teachers" className='list-2 ms-2'>Teachers</Nav.Link>
                  <NavDropdown
                    title="Blog"
                    className='list-3 ms-2'
                  >
                    <NavDropdown.Item as={Link} to="/blog-list" className='list-4'>Blog List</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/blog-details" className='list-4'>Blog Details</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contact" className='list-2 ms-2'>Contact</Nav.Link>
                  <Nav.Link as={Link} to="/login" className='list-2 ms-2'>Login</Nav.Link>
                </Nav>
              </Col>
              <Col xs="auto" className="d-none d-lg-block">
                <Button className="mt-1" style={{ backgroundColor: '#FF6600', borderColor: '#FF6600', padding: "8px 25px" }}>
                  Join Now
                </Button>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavbarData;
