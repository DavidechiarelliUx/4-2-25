import {Component} from "react";
import { ListGroup } from "react-bootstrap";
class SingleComment extends Component{

    render(){
        return (
          <>
            <ListGroup.Item className="bg-warning">
              {this.props.comment.comment}
              <span className="text-success"> {this.props.comment.rate}</span>
            </ListGroup.Item>
          </>
        );
    }
}

export default SingleComment