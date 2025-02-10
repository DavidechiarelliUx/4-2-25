import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBooks from "./SignleBooks";

class BookList extends Component {

    state = {
        search:"",
    }

   
  render() {
    console.log("THIS ALL THE BOOKS", this);
    console.log("search :", this.state.search);
    return (
      <>
        <h2 className="text-center mt-5">{this.props.title}</h2>
        <Container>
          <Row>
            {this.props.books.map((element, index) => {
              return (
                <Col key={index}>
                  <SingleBooks book={element} asin={this.props.asin} changeState={this.props.changeState} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
