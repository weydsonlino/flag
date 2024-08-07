"use client";
import { FormDesafio } from "@/components/FormDesafio";
import { TodosDesafios } from "@/components/TodosDesafios";
import "normalize.css";
import "./listDesafios.css";
import { AtualizarDesafios } from "@/components/AtualizarDesafios";
export default function Form() {
  return (
    <main id="conteiner">
      <FormDesafio />
      <TodosDesafios />
    </main>
  );
}
