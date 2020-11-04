
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CsrpTitle from '../src/components/csrptitle';
import Chapter1 from '../src/components/chapter1';
import Chapter2 from '../src/components/chapter2';
import Chapter3 from '../src/components/chapter3';
import Chapter4 from '../src/components/chapter4';
import Fsnc from '../src/components/fsanc';
import UsefulTools from '../src/components/tools';
import Policies from '../src/components/policies';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);








function App() {
  return (
    <div className="App" style={{backgroundColor:'#ECEDED'}}>


      <div className="container-fluid" >
      <AmplifySignOut style={{backgroundColor:'#CC7B29'}}></AmplifySignOut>
        <CsrpTitle/>
        
      
        <div className="row" >
       
          <div className="col-sm">
            <h4 style={{ color: "#1e265b"}}>Standard Working Instructions (SWI)</h4>
            <Chapter1/>
            <Chapter2/>
            <Chapter3/>
            <Chapter4/>
            <Fsnc/>
          </div>
          <div className="col-sm">
            <h4 style={{ color: "#1e265b"}}>Official Policies and Guidance</h4>
            <Policies/>
          </div>
          <div className="col-sm">
            <h4 style={{ color: "#1e265b"}}>Useful Tools</h4>
            <UsefulTools/>
          </div>
        </div>

      </div>

    </div>
  );
}

export default withAuthenticator(App);
