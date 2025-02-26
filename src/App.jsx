//1) inserire l'import per bootstrap (da fare ancora)
import {} from "react-bootstrap";
import './App.css'
import TopBar from "./components/topBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";

import fantasy from "./books/fantasy.json";
// import horror from "./books/horror.json";
// import scifi from "./books/scifi.json";
// import history from "./books/history.json";
// import romance from "./books/romance.json";
import SingleBooks from "./components/SignleBooks";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import {Container, Row, Col} from "react-bootstrap";
import { useState } from "react";

const App = () => {
  // state= {
  //   asin : "",
  // }
  const [asin, setAsin] = useState("");

  const changeState = (newAsin)=> {
      setAsin(newAsin)
  }


    return (
      <>
        <TopBar />
        <Welcome title="Benvenuti nella EpicBooks" description="qui puoi comprare tutti i libri che vuoi!" />
        <h2 className="text-center my-5">Libro Selezionato</h2>
        <SingleBooks book={fantasy[0]} asin={asin} changeState={changeState} />
        <Container>
          <Row>
            <Col>
              <BookList books={fantasy} title="Libri Fantasy" asin={asin} changeState={changeState} />
            </Col>
            <Col>
              <CommentArea asin={asin}></CommentArea>
            </Col>
          </Row>
        </Container>
        {/* <AllTheBooks books={fantasy} title="Libri Fantasy" />
      <AllTheBooks books={horror} title="Libri Horror" />
      <AllTheBooks books={scifi} title="Libri Scifi" />
      <AllTheBooks books={history} title="Libri History" />
      <AllTheBooks books={romance} title="Libri Romance" /> */}
        <Footer />
      </>
    );
}


export default App;
