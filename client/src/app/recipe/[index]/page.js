"use client"
import { use } from 'react';
import { useRouter } from 'next/navigation';
import recipes from '../recipes.json';
import Ingredients from './scomponent';
import Image from 'next/image';

export default function Recipe({ params }) {
  const unWrap = use(params);
  const { index } = unWrap;
  const recipe = recipes[index];

  return (
    <div>
      <h1>{recipe.title}</h1>
      <Image
        src={recipe.image}
        width={250}
        height={250}
        alt={index}
        />
      <h2>{recipe.description}</h2>
      <p>{recipe.preparation}</p>

      <Ingredients ingredients={recipe} />
      <h3>Пошаговый рецепт </h3>
      <ul>
        {Object.entries(recipe.instructions).map((stepImage,index) => (
        <li key={index}>
          <Image src={recipe.instructions[index].stepImage}
            width={250}
            height={250}
            alt={index}
          />
          {recipe.instructions[index].stepDescription}
        </li> 
      ))}
      </ul>
    </div>
  );
}