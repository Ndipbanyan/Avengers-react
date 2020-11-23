import React from 'react'
import ReactDom from 'react-dom'
import { data } from "./data";
import Avenger from "./Avenger"
import './index.css'




function App()
{
  
  return (
    <section>
      <h1>END GAME MINI-CHARACTER LIST</h1>
      <div className="avenge">
        {data.Avengers.map((avenger) => {
          return <Avenger key={avenger.id} {...avenger} />;
        })}
      </div>
    </section>
  );  
}

ReactDom.render (<App/>, document.getElementById('root'))