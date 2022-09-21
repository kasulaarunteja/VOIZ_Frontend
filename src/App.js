import logo from './logo.svg';
import './App.css';
import Select from "react-select";
import Creatable from 'react-select/creatable';

function App() {

const colorCreate = [
  {label: "white", value: "white"},
  {label: "Black", value: "Black"},
  {label: "Blue", value: "Blue"},
  {label: "Red", value: "Red"},
  {label: "Green", value: "Green"},
  {label: "Brown", value: "Brown"},
  {label: "Purple", value: "Purple"},
  {label: "Crimson", value: "Crimson"},
] 

  return (
    <div className="App">
      <h2>selection labels</h2>
      <Creatable
       options = {colorCreate}
       isMulti
       onChange={(opt, meta) => console.log(opt, meta)}
      />
    </div>
  );
}

export default App;
