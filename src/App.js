
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter}from 'react-router-dom';
import './App.css';
import CsrpTitle from '../src/components/csrptitle';
import Navigation from '../src/components/navigation/navigation';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);








function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{backgroundColor:'#ECEDED'}}>
      
    
      <div className="container-fluid" >
      <AmplifySignOut style={{backgroundColor:'#CC7B29'}}></AmplifySignOut>
        <CsrpTitle/>
        <Navigation/>
       
        
        
      </div>
      Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
    </BrowserRouter>
    
  );
}

export default withAuthenticator(App);
