'use client'
import { useState } from "react";

export default function Registration() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('')

    const handlesubmit = (e:any) => {
        e.preventDefault();
        fetch('/api/user/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
                userType
            })
        })
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handlesubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                
                <label htmlFor="type">Tipo de usuario:</label><br />

                <input type="radio" name="user_type" id="" value="admin" onChange={(e) => setUserType(e.target.value)}/>
                <label htmlFor="">Administrador</label>
                <br />
                <input type="radio" name="user_type" id="" value="padrao" onChange={(e) => setUserType(e.target.value)} />
                <label htmlFor="">Padrão</label>

                <p>{userType}</p>

                <button type="submit">Register</button>
            </form>
        </div>
    )


}