'use client'
import EstruturaGame from "@/components/EstruturaGame";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  
  return (
    <main className={styles.main}>
      <h1>Inicial page</h1>

      <Link href="/game">Jogo</Link>
    </main>
  );
}
