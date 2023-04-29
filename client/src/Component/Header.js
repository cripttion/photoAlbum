import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className='bg-transparent shadow-lg h-20'  expand="lg">
      <Container>
        <Link to="/" className='font-semibold text-black no-underline text-xl'>Flashback Gallery</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto font-semibold w-full ml-16  text-lg">
            <Link className='pl-10 text-black no-underline pr-10' to ="/create">Create</Link>
            <Link className='pl-10 text-black no-underline pr-10' to ="/contact">Contact</Link>
            <Link className='pl-10 text-black no-underline pr-10' to ="/about">About</Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;