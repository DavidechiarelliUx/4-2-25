import {Component} from "react";

import { Container, Row, Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";
import AddComment from "./AddComment";
class SingleBooks extends Component{
    
    state= {
        selected:false
    }

    toggleSelected= () => {
        if(this.state.selected==false){
            this.setState({selected : true});
        }else{
            this.setState({ selected: false });
        }
    }
    render(){
        // console.log("THIS : ", this);
        console.log(this.state.selected);
        return (
          <>
            <Container className="d-flex justify-content-center">
              <Row>
                <Card onClick={this.toggleSelected} style={{ border: this.state.selected ? "2px solid red" : "none" }}>
                  <Card.Img variant="top" src={this.props.book.img} />
                  <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>{this.props.book.category}</Card.Text>
                    <Button variant="primary">{this.props.book.price}</Button>
                  </Card.Body>
                </Card>
                {this.state.selected ? <CommentArea book={this.props.book} /> : ""}
                {this.state.selected ? <AddComment/> : ""}
              </Row>
            </Container>
          </>
        );
    }
}

export default SingleBooks;