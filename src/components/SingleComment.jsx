
import { ListGroup } from "react-bootstrap";
const SingleComment = (props) => {
        return (
          <>
            <ListGroup.Item className="bg-warning">
              {props.comment.comment}
              <span className="text-success"> {props.comment.rate}</span>
            </ListGroup.Item>
          </>
        );
    }


export default SingleComment