
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (
    <div className="App">

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="https://www.google.com">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.google.com">SWI</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.google.com">Policies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.google.com">Tools</a>
        </li>
      </ul>
      <div className="container-md">
        <div className="row">

          <div className="col-sm" style={{ backgroundColor: "#88829c" }}>
            <h2 style={{ color: "#1e265b" }}>Commercial Signs Regulatory Program Navigator</h2>
          </div>

        </div>
        <div className="row" >
          <div className="col-sm" style={{ backgroundColor: "#88829c", marginLeft: "0px" }}>
            <h4 style={{ color: "#1e265b", }}>Standard Working Instructions (SWI)</h4>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Chapter 1 - Program Administration
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>

                    <ListGroup>
                      <ListGroup.Item><a href="https://teams.microsoft.com/l/file/AFF3B28A-2F48-4C1F-A12B-1C317643E28E?tenantId=39dba476-5c09-4c63-91da-ce7a3ab5224d&fileType=pdf&objectUrl=https%3A%2F%2Ftxdot.sharepoint.com%2Fsites%2FCommercialSignsRegulatoryProgram%2FShared%20Documents%2FGeneral%2FStandard%20Working%20Instructions%2FChapter%201%20-%20Program%20Administration%2F1.1%20Processing%20Of%20Paper%20Lockbox%20Receipts(SWI)%20.pdf&baseUrl=https%3A%2F%2Ftxdot.sharepoint.com%2Fsites%2FCommercialSignsRegulatoryProgram&serviceName=teams&threadId=19:a9dbbb5be37e4ebebb0528d654bf482f@thread.skype&groupId=8a8a9d6f-713a-406d-8c3c-2fc8100a772f"
                        target="_blank"
                        rel="noreferrer">1.1 Processing of Paper Lockbox Reciepts</a></ListGroup.Item>
                      <ListGroup.Item><a href="https://teams.microsoft.com/l/file/574EFBA4-1EF0-437B-9ACB-78A80D35C121?tenantId=39dba476-5c09-4c63-91da-ce7a3ab5224d&fileType=pdf&objectUrl=https%3A%2F%2Ftxdot.sharepoint.com%2Fsites%2FCommercialSignsRegulatoryProgram%2FShared%20Documents%2FGeneral%2FStandard%20Working%20Instructions%2FChapter%201%20-%20Program%20Administration%2F1.2%20Processing%20Of%20Electronic%20Comptroller%20Receipts(SWI)%20.pdf&baseUrl=https%3A%2F%2Ftxdot.sharepoint.com%2Fsites%2FCommercialSignsRegulatoryProgram&serviceName=teams&threadId=19:a9dbbb5be37e4ebebb0528d654bf482f@thread.skype&groupId=8a8a9d6f-713a-406d-8c3c-2fc8100a772f"
                        target="_blank"
                        rel="noreferrer">1.2 Processing of Electronic Comptroller Reciepts</a></ListGroup.Item>
                      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>


                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Chapter 2 - Inspections
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>


          </div>
          <div className="col-sm" style={{ backgroundColor: "#88829c" }}>
            <h4 style={{ color: "#1e265b", textAlign: "left" }}>Official Policies and Guidance</h4>
          </div>
          <div className="col-sm" style={{ backgroundColor: "#88829c" }}>
            <h4 style={{ color: "#1e265b", textAlign: "left" }}>Useful Tools</h4>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
