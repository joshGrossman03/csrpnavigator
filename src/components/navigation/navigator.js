import React from 'react';
import NavLink from '../navigation/navigationlink';
import Billboard from '../../images/advertising.png';
import Policy from '../../images/policy.png'
import Rules from '../../images/lawbook.png';
import MapPic from '../../images/map.svg';
import '../navigation/navigation.css';



function Navigator (props) {
   
  
   
       
        return(
            <div className="row">
            <div className="col-lg">
                 <NavLink  clicked={props.navLinkClicked}to="/" tooltip="Standard Working Instructions" source={Billboard}></NavLink> 
                <NavLink clicked={props.navLinkClicked} to="/policies" tooltip="CSRP Program Policies" source={Policy}></NavLink>
                <NavLink clicked={props.navLinkClicked}to="/rulesandstatutes" tooltip="Rules and Statutes" source={Rules}></NavLink>
                <NavLink clicked={props.navLinkClicked}to="/maps" tooltip="Maps" source={MapPic}></NavLink>
            </div>
        </div>
        )
    }
   


export default Navigator;