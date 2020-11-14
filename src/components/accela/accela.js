import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Accela () {
    return (
        <div className="col-sm">
        <h4 style={{ color: "#1e265b"}}>Accessing EPS (Accela)</h4>
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Accela
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup>
                            
                            <ListGroup.Item><a href="https://txdot-prod-av.accela.com/security/hostSignon.do?signOff=true"
                                target="_blank"
                                rel="noreferrer">Accela Automation (Back Office Login)</a> </ListGroup.Item>

                          
                        </ListGroup>


                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </div>
    )
}

export default Accela;
