import React from "react";
import { Col,Card } from "react-bootstrap";

const BookPage = ({obj}) => {
   return (
      <Col className="mb-3 d-flex justify-content-center align-items-center">
         <Card style={{ width: '15rem', height: '30rem' }}>
                  <Card.Img variant="top" src={obj.image_url} />
                  <Card.Body>
                  <Card.Title>
                     {obj.title}
                  </Card.Title>
                  <Card.Text>
                  {obj.authors}
                  </Card.Text>
                  </Card.Body>
               </Card>
      </Col>
   );
};

export default BookPage;