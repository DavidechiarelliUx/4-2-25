
import { Container, Row, Col } from "react-bootstrap";
import SingleBooks from "./SignleBooks";
// import { useState } from "react";

const BookList = (props)=> {

    // state = {
    //     search:"",
    // }

    // const [search, setSearch] = useState("");
   
    console.log("THIS ALL THE BOOKS");
    // console.log("search :", setSearch(search));
    return (
      <>
        <h2 className="text-center mt-5">{props.title}</h2>
        <Container>
          <Row>
            {props.books.map((element, index) => {
              return (
                <Col key={index}>
                  <SingleBooks book={element} asin={props.asin} changeState={props.changeState} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }


export default BookList;
