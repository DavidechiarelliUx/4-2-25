import { Container, Row, Card, Button } from "react-bootstrap";
// import CommentArea from "./CommentArea";
// import AddComment from "./AddComment";
const SingleBooks = (props)=> {
    
    // state= {
    //     selected:false
    // }

    // toggleSelected= () => {
    //     if(this.state.selected==false){
    //         this.setState({selected : true});
    //     }else{
    //         this.setState({ selected: false });
    //     }
    // }

        // console.log("THIS : ", this);
        // console.log(this.state.selected);
        return (
          <>
            <Container className="d-flex justify-content-center">
              <Row>
                <Card
                  onClick={() =>{
                    console.log("libro selezionato");
                    props.changeState(props.book.asin)
                  }}
                  style={{ border: props.book.asin === props.asin ? "2px solid red" : "none" }}
                >
                  <Card.Img variant="top" src={props.book.img} />
                  <Card.Body>
                    <Card.Title>{props.book.title}</Card.Title>
                    <Card.Text>{props.book.category}</Card.Text>
                    <Button variant="primary">{props.book.price}</Button>
                  </Card.Body>
                </Card>
                {/* {this.state.selected ? <CommentArea book={this.props.book} /> : ""} */}
                {/* {this.state.selected ? <AddComment/> : ""} */}
              </Row>
            </Container>
          </>
        );
    }

export default SingleBooks;