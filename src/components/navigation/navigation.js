
import { Route} from 'react-router-dom';
import NavLink from '../navigation/navigationlink';
import SWI from '../swi/swi';
import Policies from '../policies/policies';
import RulesAndStatutes from '../rulesandstatutes/rulesandstatutes';
import Maps from '../maps/maps';
import '../navigation/navigation.css';
import Billboard from '../../images/advertising.png';
import Policy from '../../images/policy.png'
import Rules from '../../images/lawbook.png';
import MapPic from '../../images/map.svg';


function Navigation() {


    return (
        <div>
            <div className="row">
                <div className="col-lg">
                    <NavLink to="/" tooltip="Standard Working Instructions" source={Billboard}></NavLink>
                    <NavLink to="/policies" tooltip="CSRP Program Policies" source={Policy}></NavLink>
                    <NavLink to="/rulesandstatutes" tooltip="Rules and Statutes" source={Rules}></NavLink>
                    <NavLink to="/maps" tooltip="Maps" source={MapPic}></NavLink>
                </div>
            </div>
           

            


            <Route path="/" exact component={SWI}></Route>
            <Route path="/policies" exact component={Policies}></Route>
            <Route path="/rulesandstatutes" exact component={RulesAndStatutes}></Route>
            <Route path="/maps" exact component={Maps}></Route>

        </div>

    )
}

export default Navigation;