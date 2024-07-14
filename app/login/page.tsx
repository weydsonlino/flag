"use client";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Link para a rota que faz a busca dos dados no banco de dados com a concatenação do email.
  let link = `http://localhost:3000/api/user/login?email=${email}`;

  const handlesubmit = (e: any) => {
    e.preventDefault();
  };
  useEffect(
    () => {
      const fetchData = async () => {
        const response = await fetch(link, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        const data = await response.json();
      };
      fetchData();
    },
    //Sempre o o index for alterado o useEffect é chamado.
    [handlesubmit]
  );

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
