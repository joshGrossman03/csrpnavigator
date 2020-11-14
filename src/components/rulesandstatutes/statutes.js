import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Statutes () {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Current Statutes
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup>
                            
                            <ListGroup.Item>
                                <a href="https://statutes.capitol.texas.gov/Docs/TN/htm/TN.391.htm"
                                target="_blank"
                                rel="noreferrer">Highway Beutification on Interstate and Primary Systems and Certain Roads<br/> 
                                Title 6 Texas Transportation Code Subtitle H Chapter 391</a> </ListGroup.Item>
                            <ListGroup.Item><a href="https://statutes.capitol.texas.gov/Docs/TN/htm/TN.394.htm"
                                target="_blank"
                                rel="noreferrer">Regulation of Outdoor Signs on Rural Roads<br/>
                                Title 6 Texas Transportation Code Subtitle H Chapter 394</a> </ListGroup.Item>
                            <ListGroup.Item><a href="https://statutes.capitol.texas.gov/Docs/TN/htm/TN.396.htm"
                                target="_blank"
                                rel="noreferrer">Automobile Wrecking and Salvage Yards<br/>
                                Title 6 Texas Transportation Code Subtitle H Chapter 396</a> </ListGroup.Item>
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

export default Statutes;