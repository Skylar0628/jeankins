import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';


function App() {

  const [ data, setData ] = React.useState([]);

  const getApi = async()=> {
    await axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
      setData(res.data)
       console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  };

  React.useEffect(()=>{
    getApi()
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul> 
          {data.map((item,index)=>(
            <li key={index}>國家: { item.name.common }</li>
          ))}
        </ul>
         
       
      </header>
    </div>
  );
}

export default App;
