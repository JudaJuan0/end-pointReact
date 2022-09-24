
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';


const App = () => {
  const refresh = () => {
    callApi1();
  };
  const [textCat, setText] = useState("");
  const [urlGif, setGif] = useState("");
  const key = "gnBbzPKc5C9jqalBpTpHPYHlxtp8Cynq";
  const callApi2 = (search) =>{
    fetch('https://api.giphy.com/v1/gifs/search?api_key='+key+'&q='+search)
    .then((resp) => resp.json())
    .then((values) =>{
      setGif(values.data[0].images.original.url);
    });
  };
  const callApi1 = () =>{
      fetch('https://catfact.ninja/fact')
      .then((resp)=> resp.json())
      .then((values)=> {
        setText(values?.fact || ' ');
        const treeWord = values?.fact.split(' ',3).join(" ");
        console.log(treeWord);
        callApi2(treeWord);
      });
  };
  useEffect(callApi1,[]);
  return (
    <React.StrictMode>
      <div className='title'>
        Consume End point with React installed
      </div>
      <div className='row'>
        <div>
        <img src={urlGif} alt=""/>
        </div>
        <div>
        <h1>{textCat}</h1>
        </div>
      </div>
      <div className='div-button'>
      <button onClick={refresh} >Click to reload!</button>   
      </div>
      
    </React.StrictMode>
  );
}

export default App;
