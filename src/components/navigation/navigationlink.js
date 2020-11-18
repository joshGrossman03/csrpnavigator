import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../navigation/navigation.css';


function NavLink (props) {
    
        return(

            <Card style={{ width: '18rem', display: 'inline-block' }}>
  <Card.Body>
    <Card.Title>{props.linkName}</Card.Title>
    <Link  onClick={props.clicked} to={props.to} ><img className="navicon"src={props.source} alt={props.desc}></img></Link>
  </Card.Body>
</Card>
            
                                    
                                    
                             
        )

    
    
    
}
export default NavLink;