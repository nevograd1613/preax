import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Header = ({setSearch, search, initialArr, setArr, arr, setSortByAuthor, setSortByName}) => {
   return (
      <header className="App-header">
         <Container className="mt-5">
            <Row className='d-flex justify-content-end'>
               <Col sm={8} md={6}>
                  <Form className="d-flex gap-1" onSubmit={(e) => {
                           e.preventDefault();
                           const newArr = arr.filter((obj) => obj.authors.toLowerCase().includes(search.toLowerCase()) || obj.title.toLowerCase().includes(search.toLowerCase()));
                           setArr(newArr);
                           setSearch('');
                           setSortByAuthor(false);
                           setSortByName(false);
                        }}>
                     <Form.Control
                        type="search"
                        placeholder="Search by author or name"
                        className="me-2 rounded-pill"
                        aria-label="Search"
                        value={search}
                        onChange={(e) => {
                           setSearch(e.target.value);
                        }}
                     />
                     <Button className="rounded-pill d-flex justify-content-center align-items-center" variant="primary" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                     </Button>
                     <Button onClick={() => {
                        setArr(initialArr);
                     }} className="rounded-pill d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                           <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                     </Button>
                  </Form>
               </Col>
            </Row>
         </Container>
      </header>
   );

};

export default Header;