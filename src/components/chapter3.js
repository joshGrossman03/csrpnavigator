import Accordion  from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Chapter3 () {
    return(
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Chapter 3 - Complaints and Enforcement
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup>
                            
                            <ListGroup.Item><a href="https://teams.microsoft.com/l/file/E0C3E555-8465-48E2-87E5-CF8633D0B905?tenantId=39dba476-5c09-4c63-91da-ce7a3ab5224d&fileType=pdf&objectUrl=https%3A%2F%2Ftxdot.sharepoint.com%2Fsites%2FCommercialSignsRegulatoryProgram%2FShared%20Documents%2FGeneral%2FStandard%20Working%20Instructions%2FChapter%203%20-%20Complaints%20and%20Enforcement%2F3.1%20Complaint%20Investigation%20Procedure(SWI)%20.pdf&baseUrl=https%3A%2F%2Ftxdot.sharepoint.com%2Fsites%2FCommercialSignsRegulatoryProgram&serviceName=teams&threadId=19:a9dbbb5be37e4ebebb0528d654bf482f@thread.skype&groupId=8a8a9d6f-713a-406d-8c3c-2fc8100a772f"
                                target="_blank"
                                rel="noreferrer">3.1 Complaint Investigation Procedure</a> </ListGroup.Item>
                            <ListGroup.Item><a href="https://teams.microsoft.com/l/file/C7D40269-EA54-4D38-9E29-E359BE65FB5A?tenantId=39dba476-5c09-4c63-91da-ce7a3ab5224d&fileType=pdf&objectUrl=https%3A%2F%2Ftxdot.sharepoint.com%2Fsites%2FCommercialSignsRegulatoryProgram%2FShared%20Documents%2FGeneral%2FStandard%20Working%20Instructions%2FChapter%203%20-%20Complaints%20and%20Enforcement%2F3.2%20Unpermitted%20Sign%20Enforcement(SWI)%20.pdf&baseUrl=https%3A%2F%2Ftxdot.sharepoint.com%2Fsites%2FCommercialSignsRegulatoryProgram&serviceName=teams&threadId=19:a9dbbb5be37e4ebebb0528d654bf482f@thread.skype&groupId=8a8a9d6f-713a-406d-8c3c-2fc8100a772f"
                                target="_blank"
                                rel="noreferrer">3.2 Unpermitted Sign Enforcement</a> </ListGroup.Item>

                        </ListGroup>


                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Chapter3;