import logo from './logo.svg';
import './App.css';
import Select from "react-select";
import Creatable from 'react-select/creatable';
import { useState, useCallback } from 'react';



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

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const Debouncer = (func) => {
    let timer;
    return function (...args){
      const context = this;
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      },2000)
    };
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const optimize = useCallback(Debouncer(handleChange), []);

  return (
    <div className="App">
      <h2>Select & Creatable labels</h2>
      <Creatable
       options = {colorCreate}
       defaultValue={selectedOption}
       onChange={(e) => optimize(e)}
       isMulti
      // onChange={(opt, meta,e) =>{optimize(e),console.log(opt, meta)}}
      />
    </div>
  );
}

export default App;
