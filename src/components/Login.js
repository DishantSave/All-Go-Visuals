import './Login.css'
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        history("/home", { state: { id: email } })
                    }
                    else if (res.data == "notexist") {
                        alert("User has not been registered")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div class="bg-img">
            <div class="main">
                <form action="post">
                    <h1>LOGIN</h1>
                    <h2>Name</h2>
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
                    <br></br>
                    <br></br>
                    <h2>Password</h2>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />
                    <br></br>
                    <input type="submit" onClick={submit}/>
                    <br></br>
                    <br></br>
                    <p class="Link">Dont have an account</p><br></br>
                    <Link to="/signup">Make a new account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login