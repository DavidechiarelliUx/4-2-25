import {Component} from "react";
import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";
class CommentList extends Component {

    render(){
        return (
          <>
            <ListGroup className="align-center text-center">
              {this.props.comments.map((comment, index) => {
                return <SingleComment key={index} comment={comment} />;
              })}
              </ListGroup>
          </>
        );
    }
}

export default CommentList;