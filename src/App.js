
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Chapter1 from '../src/components/chapter1';
import Chapter2 from '../src/components/chapter2';
import Chapter3 from '../src/components/chapter3';
import Chapter4 from '../src/components/chapter4';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {AmplifySignOut} from '@aws-amplify/ui-react';


function App() {
  return (
    <div className="App">
<AmplifySignOut button-text="Custom Text"></AmplifySignOut>

      <div className="container-md">

        <div className="row" >
        
          <div className="col-sm">
            <h4 style={{ color: "#1e265b", }}>Standard Working Instructions (SWI)</h4>
            <Chapter1></Chapter1>
            <Chapter2></Chapter2>
            <Chapter3></Chapter3>
            <Chapter4></Chapter4>
          </div>
          <div className="col-sm">
            <h4 style={{ color: "#1e265b", textAlign: "left" }}>Official Policies and Guidance</h4>
          </div>
          <div className="col-sm">
            <h4 style={{ color: "#1e265b", textAlign: "left" }}>Useful Tools</h4>
          </div>
        </div>

      </div>

    </div>
  );
}

export default withAuthenticator(App);
