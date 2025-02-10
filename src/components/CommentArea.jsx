import { Component } from "react";
import CommentList from "./CommentList";


class CommentArea extends Component {

    state = {
        comment : "",
        rate : "",
        elementId: "",
        comments : [],
    }
    
    fetchComment = async () => {
        console.log("Props ricevuti da SingleBooks:", this.props);
        try {
          const headers = {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0YzNmOWNhMDcwNDAwMTU4YmY5MmMiLCJpYXQiOjE3Mzg4NTEzMjEsImV4cCI6MTc0MDA2MDkyMX0.8rd3Aqp_mu4Zua5wBkFOEA4m1EH5-AMKFfxIAr06JCc",
          };
          const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
            headers: headers,
          });
          if (resp.ok) {
            const comments = await resp.json();
            console.log("comments dopo await", comments);
            console.log("settaggio dello stato : ");
            this.setState({ comments });
            console.log("comment dopo set state", comments);
          }
        } catch (error) {
          console.log("errore nel catch", error);
        }
    }
    componentDidMount = async () => {
        if (this.props.asin) {
            console.log("seleziona un libro")
            this.fetchComment()
        }
    }
    componentDidUpdate(prevProps){
        console.log("componentDidUpdate");
        console.log("asin", prevProps.asin);

        if(prevProps.asin !== this.props.asin){
            console.log("PROP DIVERSE, Aggiorniamo!");
            this.fetchComment()
        }

    }
    render(){
        return (
          <>
            <h2 className="text-center mt-5">Sono Comment Area</h2>
            <CommentList comments={this.state.comments} />
          </>
        );
    }
}

export default CommentArea ;