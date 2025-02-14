'use client'
import { useState } from "react";
import styles from "./page.module.css";





export default function Ingredients({ingredients}){

let [count, setCount] = useState(1);
    

function PlusClick(){
  setCount(count+1);
}


function MinusClick(){
  setCount(count-1);
}

return(
    <div className={styles.ing}>
          <h1>Ингредиенты: </h1>
          <ul>
          {Object.entries(ingredients).map(([ingredient,{amount,unit}],index) => (
            <li key={index}>
              {ingredient} - {amount*count} {unit}
            </li>
          ))}
          </ul>

          <span className={styles.span}>
            <button onClick={MinusClick} disabled = {count<=1}>-</button>
            <p>порций: {count}</p>
            <button onClick={PlusClick} disabled= {count>=10}>+</button>
          </span>
        </div>
)



}