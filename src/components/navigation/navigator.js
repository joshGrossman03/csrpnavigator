import React from 'react';
import NavLink from '../navigation/navigationlink';
import Billboard from '../../images/advertising.png';
import Policy from '../../images/policy.png'
import Rules from '../../images/lawbook.png';
import MapPic from '../../images/map.svg';
import CompPic from '../../images/accela.png';
import UsefulTools from '../../images/toolbox.png';
import '../navigation/navigation.css';



function Navigator (props) {
   
  
   
       
        return(
            <div>
                <div className="row">
            <div className="col-lg">
                <NavLink linkName="SWIs"clicked={props.navLinkClicked}to="/" source={Billboard}></NavLink> 
                <NavLink linkName="Policies"clicked={props.navLinkClicked} to="/policies" source={Policy}></NavLink>
                <NavLink linkName="Rules and Statutes"clicked={props.navLinkClicked}to="/rulesandstatutes" tooltip="Rules and Statutes" source={Rules}></NavLink>
                <NavLink linkName="Maps" clicked={props.navLinkClicked}to="/maps" source={MapPic}></NavLink>
                
            </div>
        </div>
        <div className="row">
            <div className="col-lg">
            <NavLink linkName="Accela" clicked={props.navLinkClicked}to="/accela" source={CompPic}></NavLink>
            <NavLink linkName="Useful Tools" clicked={props.navLinkClicked}to="/usefultools" source={UsefulTools}></NavLink>
            
            

            </div>
        </div>
            </div>
        )
    }
   


export default Navigator;