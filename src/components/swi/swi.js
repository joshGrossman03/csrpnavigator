import Chapter1 from './chapter1';
import Chapter2 from './chapter2';
import Chapter3 from './chapter3';
import Chapter4 from './chapter4';
import Fsnc from './fsanc';



function SWI () {
    return (
        <div className="col-sm">
            <h4 style={{ color: "#1e265b"}}>Standard Working Instructions (SWI)</h4>
            <Chapter1/>
            <Chapter2/>
            <Chapter3/>
            <Chapter4/>
            <Fsnc/>
          </div>   
        

    )
}

export default SWI;