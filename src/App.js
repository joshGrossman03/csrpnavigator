
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Chapter1 from '../src/components/chapter1';
import Chapter2 from '../src/components/chapter2';
import Chapter3 from '../src/components/chapter3';
import Chapter4 from '../src/components/chapter4';
import Fsnc from '../src/components/fsanc';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);








function App() {
  return (
    <div className="App">


      <div className="container-md">

        <div className="row" >
        <AmplifySignOut style={{backgroundColor:'blue'}} />
          <div className="col-sm">
            <AmplifySignOut/>
            <h4 style={{ color: "#1e265b", }}>Standard Working Instructions (SWI)</h4>
            <Chapter1/>
            <Chapter2/>
            <Chapter3/>
            <Chapter4/>
            <Fsnc/>
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
