'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./scomponent";
import { useState } from "react";
  
const ingredients = {
    Сахар: { amount: 100, unit: 'г' },
    Мука: { amount: 200, unit: 'г' },
    Яйца: { amount: 3, unit: 'шт' },
    Масло: { amount: 150, unit: 'г' },
    Шоколад: { amount: 50, unit: 'г' },
  };
  
  export default function Home() {
    
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
        <strong>KOMODACHI</strong>
        </div>
        <div>
        <a className={styles.a} href="/qwerty">qwerty</a>
        <a className={styles.a}>asdfg</a>
        <a className={styles.a}>zxcvvb</a>          
        </div>
      </header>

      <div className={styles.gg}>
      <main className={styles.main}>
       
      <Ingredients ingredients = {ingredients}/>
      </main>
      <nav className={styles.nav}>
        <strong>asdasd</strong>
        <strong>sadasdasd</strong>
      </nav>
      </div>
    </>
  );
}
