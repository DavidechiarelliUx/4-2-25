import {Component} from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {

    render(){
        return (
          <>

            <ul>
            {this.props.comments.map((comment, index)=>{
            
                return (
                    <SingleComment key={index}  comment={comment} />
                );
            })}
            </ul>
          </>
        );
    }
}

export default CommentList;