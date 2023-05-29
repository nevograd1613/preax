import { Container, Row, } from "react-bootstrap";
import Header from "./Components/Header/Header.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import BasicExample from "./Components/Spinners/Spinners.jsx";
import BookPage from "./Components/BookPage/BookPage.jsx";
import PaginationButtons from "./Components/PaginationButtons/PaginationButtons.jsx";
import Sorting from "./Components/Sorting/Sorting.jsx";

function App() {
   const [arr, setArr] = useState([])
   const [numberOfPage, setNumberOfPage] = useState(10);
   const [sortByAuthor, setSortByAuthor] = useState(false);
   const [sortByName, setSortByName] = useState(false);
   const [initialArr, setInitialArr] = useState([]);
   const [search, setSearch] =useState('');
   useEffect(() => {
      const fetchContent = async () => {
        try {
          const { data } = await axios.get(`https://example-data.draftbit.com/books?_limit=${numberOfPage}`);
          setArr(data);
          setInitialArr(data);
        } catch (e) {
          console.log(e);
        }
      };
      fetchContent();
    }, [numberOfPage]);
   return (
      <div className="App">
         <Header setSearch={setSearch} search={search} initialArr={initialArr} setArr={setArr} arr={arr} setSortByAuthor={setSortByAuthor} setSortByName={setSortByName} />
         <Container className="mt-4">
            <Row>
               <PaginationButtons numberOfPage={numberOfPage} setNumberOfPage={setNumberOfPage} setSortByAuthor={setSortByAuthor} setSortByName={setSortByName} />
               <Sorting arr={arr} sortByAuthor={sortByAuthor} setSortByAuthor={setSortByAuthor} sortByName={sortByName} setSortByName={setSortByName} />
            </Row>
         </Container>
         <Container>
            <Row>
               {arr.length === 0 ? <BasicExample /> : arr.map((book) => <BookPage key={book.id} obj={book} />)}
            </Row>
         </Container>
      </div>
   );
}

export default App;
