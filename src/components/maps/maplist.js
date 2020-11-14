import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MapList () {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Maps
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup>
                            
                            <ListGroup.Item><a href="https://txdot.maps.arcgis.com/apps/webappviewer/index.html?id=7a8924173d404751bf00c54b66b37d1f"
                                target="_blank"
                                rel="noreferrer">Commercial Signs Regulatory Program Map</a></ListGroup.Item>
                                <ListGroup.Item><a href="https://apps3.txdot.gov/apps-cq/project_tracker/"
                                target="_blank"
                                rel="noreferrer">TxDOT Project Tracker</a></ListGroup.Item>
                                <ListGroup.Item><a href="https://www.txdot.gov/apps/statewide_mapping/StatewidePlanningMap.html"
                                target="_blank"
                                rel="noreferrer">TxDOT Statewide Planning Map</a></ListGroup.Item>
                                <ListGroup.Item><a href="https://www.txdot.gov/inside-txdot/district.html"
                                target="_blank"
                                rel="noreferrer">TxDOT District Map</a></ListGroup.Item>
                           
                        </ListGroup>


                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            
        </Accordion>
        
        

    )
}

export default MapList;