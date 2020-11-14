import {OverlayTrigger,Tooltip} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavLink (props) {
    return(
        <>
                        {['right'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        {props.tooltip}
                                        </Tooltip>
                                }
                            >
                                <Link to={props.to}><img className="navicon"src={props.source} alt={props.desc}></img></Link>
                            </OverlayTrigger>
                        ))}
                    </>
    )
}
export default NavLink;