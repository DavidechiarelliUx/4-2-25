
import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";
const CommentList = (props)=>{

        return (
          <>
            <ListGroup className="align-center text-center">
              {props.comments.map((comment, index) => {
                return <SingleComment key={index} comment={comment} />;
              })}
              </ListGroup>
          </>
        );
    }


export default CommentList;