import React from "react";
import { Button, Col } from "react-bootstrap";

const Sorting = ({
   sortByAuthor,
   sortByName,
   setSortByAuthor,
   setSortByName,
   arr,
}) => {
   return (
      <Col lg={6} className="d-flex gap-2 justify-content-end mb-3">
         {sortByAuthor ? <Button onClick={() => {
            arr.sort(function (x, y) {
               if (x.id < y.id) {
                   return -1;
               }
               if (x.name > y.name) {
                   return 1;
               }
               return 0;
           });
            setSortByAuthor(false);
         }}>Sort by author</Button> : <Button onClick={() => {
            arr.sort((x, y) => x.authors.localeCompare(y.authors));
            setSortByAuthor(true);
            setSortByName(false);
         }} variant="secondary">Sort by author</Button>}
         {sortByName ? <Button onClick={() => {
            arr.sort(function (x, y) {
               if (x.id < y.id) {
                   return -1;
               }
               if (x.name > y.name) {
                   return 1;
               }
               return 0;
           });
            setSortByName(false);
         }}>Sort by name</Button> : <Button onClick={() => {
            arr.sort((x, y) => x.title.localeCompare(y.title));
            setSortByName(true);
            setSortByAuthor(false);
         }} variant="secondary">Sort by name</Button>}
      </Col>
   );
};

export default Sorting;