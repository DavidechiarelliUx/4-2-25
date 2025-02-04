import {Container, Row, Col} from "react-bootstrap";

const Footer = ()=> {

    return (
        <>
        <Container fluid className="bg-dark text-light text-center">
            <Row>
                <Col>
                    <p>SONO IL FOOTER</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Footer;