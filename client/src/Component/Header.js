import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" bg='white'>
      
        <Link to="/"  className='no-underline italic'><Navbar.Brand>Snap-Trove</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto w-full justify-center sm:gap-0 md:gap-1 lg:gap-4 xl:gap-5">
           <Nav.Link><Link to="/" className='no-underline text-black'>Home</Link></Nav.Link> 
           <Nav.Link><Link to="/create" className='no-underline text-black'>Create</Link></Nav.Link> 
           <Nav.Link><Link to="/about" className='no-underline text-black'>About</Link></Nav.Link> 
           <Nav.Link><Link to="/contact" className='no-underline text-black'>Contact</Link></Nav.Link> 


            <NavDropdown title="Genere" className='text-black' id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link><Link to="/login" className='no-underline text-black'>Login</Link></Nav.Link> 

          <Nav.Link><Link to="/signUp" className='no-underline text-black'>Signup</Link></Nav.Link> 

          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;