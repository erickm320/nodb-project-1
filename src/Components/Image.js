import React from 'react';
import './Image.css';
function Image(props){
    return(
        <div>
            <h2 className="hero">{props.hero.name}</h2>
            <img className="image" src={props.hero.url} alt='Hero'/>
        </div>
    )
}

export default Image;