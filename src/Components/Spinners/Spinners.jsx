import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Spinner animation="border" role="status" className='d-flex justify-content-center align-items-center'>
         <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default BasicExample;