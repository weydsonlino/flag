'use client'
import EstruturaGame from "@/components/EstruturaGame";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import 'normalize.css'
export default function Home() {
  
  return (
    <main className={styles.main}>
      <h1>Inicial page</h1>

      <Link href="/game">Jogo</Link>
      <Link href="/listDesafios">Todos Desafios</Link>
    </main>
  );
}
