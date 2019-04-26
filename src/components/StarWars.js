import React from 'react';
import './StarWars.css';


function StarWars(props) {
    return (
      <div className="char-each">
      {console.log(props.char.name)};
      <div className="name">
        <h2>{props.char.name}</h2> 
      </div>
      <div className="sImage"></div>
        
          <div className="char-info"> 
            <p>
              <strong>Birth Year: </strong> {props.char.birth_year}
            </p>
            <p>
              <strong>gender: </strong> {props.char.gender}
            </p>
            <p>
              <strong>Height: </strong> {props.char.height}
            </p>
            <p>
                <strong>Weight: </strong> {props.char.mass}
            </p>
            <p>
              <strong>Skin Color: </strong> {props.char.skin_color}
            </p>
            <p>
              <strong>Hair Color: </strong> {props.char.hair_color}
            </p>      
            <p>
              <strong>Eye Color: </strong> {props.char.eye_color}
            </p>     
          </div>
  
      </div>
    )  
  }

export default StarWars