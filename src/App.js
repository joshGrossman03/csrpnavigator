
import SWI from '../src/components/swi/swi'
import Policies from '../src/components/policies/policies';
import RulesAndStatutes from '../src/components/rulesandstatutes/rulesandstatutes';
import Maps from '../src/components/maps/maps';
import Accela from '../src/components/accela/accela';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Layout from '../src/components/layout/layout';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {Route, Switch} from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import UsefulTools from './components/usefultools/usefultools';
Amplify.configure(awsconfig);



function App() {
  return (
    <div>
    <Layout>
      <Switch>
            <Route path="/" exact component={SWI}></Route>
            <Route path="/policies" exact component={Policies}></Route>
            <Route path="/rulesandstatutes" exact component={RulesAndStatutes}></Route>
            <Route path="/maps" exact component={Maps}></Route>
            <Route path="/accela" exact component={Accela}></Route>
            <Route path="/usefultools" exact component={UsefulTools}></Route>
            
      </Switch>
    </Layout>
    </div>
    
    
  );
}

export default withAuthenticator(App);
