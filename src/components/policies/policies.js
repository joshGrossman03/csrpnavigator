import HumanResourcesPolicies from './hrpolicies';
import IndustryPolicies from './industrypolicies'


function Policies () {
    return (
        <div className="col-sm">
            <h4 style={{ color: "#1e265b"}}>Official Policies and Guidance</h4>
            <IndustryPolicies/>
            <HumanResourcesPolicies/>
          </div>
    )
}

export default Policies;