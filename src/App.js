
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Chapter1 from '../src/components/chapter1';
import Chapter2 from '../src/components/chapter2';
import Chapter3 from '../src/components/chapter3';
import Chapter4 from '../src/components/chapter4';
import FileStructureNamingConvention from '../src/components/filestructureandnamingconventions';



function App() {
  return (
    <div className="App">


      <div className="container-md">

        <div className="row" >
        
          <div className="col-sm">
            <h4 style={{ color: "#1e265b", }}>Standard Working Instructions (SWI)</h4>
            <Chapter1></Chapter1>
            <Chapter2></Chapter2>
            <Chapter3></Chapter3>
            <Chapter4></Chapter4>
            <FileStructureNamingConvention></FileStructureNamingConvention>
          </div>
          <div className="col-sm">
            <h4 style={{ color: "#1e265b", textAlign: "left" }}>Official Policies and Guidance</h4>
          </div>
          <div className="col-sm">
            <h4 style={{ color: "#1e265b", textAlign: "left" }}>Useful Tools</h4>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
