import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Tools () {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Other Useful Tools
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup>
                            
                            <ListGroup.Item><a href="https://txdotconnect.txdot.gov/#/login"
                                target="_blank"
                                rel="noreferrer">TxDOT Connect</a> </ListGroup.Item>

                          
                        </ListGroup>


                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Tools;
