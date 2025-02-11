import {Alert} from "react-bootstrap"
const Welcome = (props)=>{
    

        
        return (
          <>
            <Alert variant="success text-center">
              <Alert.Heading>
                <h1 className="text-primary">{props.title}</h1>
              </Alert.Heading>
              <hr />
              <p>{props.description}</p>
            </Alert>
          </>
        );
    }



export default Welcome;