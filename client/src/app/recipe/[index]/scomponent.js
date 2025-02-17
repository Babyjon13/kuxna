'use client'
import { useState } from "react";





export default function Ingredients({ingredients}){

let [count, setCount] = useState(ingredients.portion);
    

function PlusClick(){
  setCount(count+1);
}


function MinusClick(){
  setCount(count-1);
}

return(
    <div>
          <h1>Ингредиенты: </h1>
          <ul>
          {Object.entries(ingredients.ingredients).map((name,index) => (
            <li key={index}>
              {ingredients.ingredients[index].name} : {ingredients.ingredients[index].value === '0' ? '-' : ingredients.ingredients[index].value*count} {ingredients.ingredients[index].unit}
            </li>
          ))}
          </ul>

          <span>
            <button onClick={MinusClick} disabled = {count<=1}>-</button>
            <p>порций: {count}</p>
            <button onClick={PlusClick} disabled= {count>=10}>+</button>
          </span>
        </div>
)



}




/*        <ul>
        {recipe[1].ingredients.map((name,index) => (
          <li key={index}>
            <p>{recipe[1].ingredients[index].name} - {recipe[1].ingredients[index].value} {recipe[1].ingredients[index].unit}</p>
          </li>
        ))}
      </ul>*/