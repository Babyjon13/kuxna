import data from './data.json';
import Ingredients from "../scomponent";

export default function Home(){

    return(
    <>
        <h3>Пошаговый рецепт </h3>
        <ul>
        {data.img.map((image, index) => (
          <li key={index}>
            <img src={image}></img>
            <p>{data.text[index]}</p>
          </li>
        ))}
      </ul>


    </>
    )

}