
import {Component} from "react";
import {Alert} from "react-bootstrap"
class Welcome extends Component {
    
    render(){
        console.log("THIS", this);
        
        return (
          <>
            <Alert variant="success text-center">
              <Alert.Heading>
                <h1 className="text-primary">{this.props.title}</h1>
              </Alert.Heading>
              <hr />
              <p>{this.props.description}</p>
            </Alert>
          </>
        );
    }
}

export default Welcome;