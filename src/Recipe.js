import React from 'react';
import './App.css';



//import SavedList from './SavedList'

const Recipe = ({title, calories, image, ingredients, onClick, buttonText}) => {
    return(
        <div className="recipe">
        <h1>{title}</h1>
        <p>Calories: {Math.floor(calories)}</p>
        <ul>
            {ingredients.map(ingredients =>(
               <li>{ingredients.text}</li> 
            ))}
        </ul>
       
        <button className="savedList" onClick={()=>onClick({title, calories, image, ingredients})} type="Submit">{buttonText}</button>
        <img className="image" src={image} alt="" />
        </div>
    );
};

export default Recipe;