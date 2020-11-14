import Tools from './tools';
import Vehicles from './vehicles';

function UsefulTools () {
    return(
        <div className="col-sm">
            <h4 style={{ color: "#1e265b"}}>Useful Tools</h4>
            <Vehicles/>
            <Tools/>
          </div>
    )
}

export default UsefulTools;