
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import Chapter1 from '../src/components/chapter1';
import Chapter2 from '../src/components/Chapter2';

function App() {
  return (
    <div className="App">


      <div className="container-md">

        <div className="row" >
          <div className="col-sm">
            <h4 style={{ color: "#1e265b", }}>Standard Working Instructions (SWI)</h4>
            <Chapter1></Chapter1>
            <Chapter2></Chapter2>
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
