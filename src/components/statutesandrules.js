import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function StatutesRules () {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Current Rules and Statutes
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup>
                            
                            <ListGroup.Item><a href="https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=5&ti=43&pt=1&ch=21&sch=I&div=1&rl=Y"
                                target="_blank"
                                rel="noreferrer">Interstate and Primary Road Rules<br/> 
                                Title 43 Texas Administrative Code Chapter 21 Subchapter I</a> </ListGroup.Item>
                            <ListGroup.Item><a href="https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=5&ti=43&pt=1&ch=21&sch=K&rl=Y"
                                target="_blank"
                                rel="noreferrer">Rural Road Rules<br/>
                                Title 43 Texas Administrative Code Chapter 21 Subchapter K</a> </ListGroup.Item>
                            <ListGroup.Item><a href="https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=5&ti=43&pt=1&ch=21&sch=H&rl=Y"
                                target="_blank"
                                rel="noreferrer">Control and Screening of Junyards<br/>
                                Title 43 Texas Administrative Code Chapter 21 Subchapter H</a> </ListGroup.Item>
                                <ListGroup.Item><a href="https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=5&ti=43&pt=1&ch=21&sch=Q&rl=Y"
                                target="_blank"
                                rel="noreferrer">Regulation of Directional Signs<br/>
                                Title 43 Texas Administrative Code Chapter 21 Subchapter Q</a> </ListGroup.Item>
                        </ListGroup>


                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

export default StatutesRules;