import React from "react";
import { Button, Col } from "react-bootstrap";

const PaginationButtons = ({numberOfPage, setNumberOfPage, setSortByAuthor, setSortByName}) => {
   const btnsArr = [10, 50, 100]
   return (
      <Col lg={6} className="d-flex gap-2 mb-3">
         <h3>Show books per page</h3>
         {btnsArr.map((btnCount) => {
            if (btnCount === numberOfPage) {
               return <Button key={btnCount} onClick={() => {
                  setNumberOfPage(btnCount);
                  setSortByAuthor(false);
                  setSortByName(false);
               }} variant="primary">{btnCount}</Button>
            }
            return <Button key={btnCount} onClick={() => {
               setNumberOfPage(btnCount);
               setSortByAuthor(false);
               setSortByName(false);
            }} variant="secondary">{btnCount}</Button>
         })}
      </Col>
   );
};

export default PaginationButtons;