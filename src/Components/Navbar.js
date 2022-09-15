import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      
      
      <br />
      <Navbar bg="secondary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
             // src="caricon.ico"
             src="Caricon.ico"
              width="85"
              height="50"
              className="d-inline-block align-top"
            />{' '}
           Handover Car 
          </Navbar.Brand>
          <ul class="navbar-nav sm-icons">
           
           <li><i class="bi bi-gear"></i></li>
           </ul>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;