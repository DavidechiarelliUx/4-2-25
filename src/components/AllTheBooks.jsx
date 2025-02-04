import { Component } from "react";
import {Card, Button, Container, Row,Col} from "react-bootstrap"


class AllTheBooks extends Component{

    render(){
        console.log("THIS ALL THE BOOKS", this);
        return (
          <>
            <h2 className="text-center mt-5">{this.props.title}</h2>
            <Container>
              <Row>
                {this.props.books.map((element, index) => {
                  return (
                    <Col key={index}>
                      <Card className="mb-2" style={{ width: "18rem", height: "450px" }}>
                        <Card.Img variant="top" src={element.img} style={{ height: "250px" }} />
                        <Card.Body>
                          <Card.Title>{element.title}</Card.Title>
                          <Card.Text>{element.category}</Card.Text>
                          <Button variant="primary">{`Acquista al prezzo di ${element.price}€`}</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </>
        );
    }
}

export default AllTheBooks