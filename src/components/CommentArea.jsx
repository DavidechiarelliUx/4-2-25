import { useEffect, useState } from "react";
import CommentList from "./CommentList";


const CommentArea = (props) =>  {

    // state = {
    //     comment : "",
    //     rate : "",
    //     elementId: "",
    //     comments : [],
    // }
    
    const [comments,setComments] = useState([]);


 
    const fetchComment = async () => {
        console.log("Props ricevuti da SingleBooks:");
        try {
          const headers = {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0YzNmOWNhMDcwNDAwMTU4YmY5MmMiLCJpYXQiOjE3Mzg4NTEzMjEsImV4cCI6MTc0MDA2MDkyMX0.8rd3Aqp_mu4Zua5wBkFOEA4m1EH5-AMKFfxIAr06JCc",
          };
          const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.asin}`, {
            headers: headers,
          });
          if (resp.ok) {
            const comments = await resp.json();
            console.log("comments dopo await", comments);
            console.log("settaggio dello stato : ");
            setComments( comments );
            console.log("comment dopo set state", comments);
          }
        } catch (error) {
          console.log("errore nel catch", error);
        }
    }
    useEffect(() => {
        
        if (props.asin) {
            console.log("seleziona un libro")
            fetchComment()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.asin])


    // }⁄
    // componentDidUpdate(prevProps){
    //     console.log("componentDidUpdate");
    //     console.log("asin", prevProps.asin);

    //     if(prevProps.asin !== this.props.asin){
    //         console.log("PROP DIVERSE, Aggiorniamo!");
    //         this.fetchComment()
    //     }

    // } use Effect//
        return (
          <>
            <h2 className="text-center mt-5">Sono Comment Area</h2>
            <CommentList comments={comments} />
          </>
        );
    }

export default CommentArea ;