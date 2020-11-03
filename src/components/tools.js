import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function UsefulTools () {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Vehicles
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup>
                            
                            <ListGroup.Item><a href="https://forms.gle/zNYbnhKUtjwFwK4Y8"
                                target="_blank"
                                rel="noreferrer">Monthly Mileage Reporting</a> </ListGroup.Item>
                          
                        </ListGroup>


                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default UsefulTools;
