import React from 'react'
import ReactDom from 'react-dom'
import { data } from "./data";
import Avenger from "./Avenger"
import './index.css'




function App()
{
  
  return (
    <section>
      {data.Avengers.map((avenger) => {
        return <Avenger key={avenger.id} {...avenger} />;
      })}
     
    </section>
  );  
}

ReactDom.render (<App/>, document.getElementById('root'))