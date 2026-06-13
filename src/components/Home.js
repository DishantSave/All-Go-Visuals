import './Home.css'
import React from "react"
import { useNavigate , Link } from 'react-router-dom';

function Home (){

   // const location= useLocation();useLocation,
    const history = useNavigate()

    async function submit(e) {
        history("/visualize")
    }

    async function submit1(e) {
        history("/learn")
    }

    return (
        <div class="bg-img">
            <div class="main">
                <div class="navbar">
                    <div class="icon">
                        <h2 class="logo">All-Go-Visuals</h2>
                    </div>
                    <div class="menu">
                        <ul>
                            <Link to="/signup">Home</Link>
                        </ul>
                    </div>
                    <div class="search">
                        <input type="search" placeholder="Type To Text" />
                        <a href="/"><button class="btn">Search</button></a>
                    </div>
                </div>
                <div class="content">
                    <h1>ALGORITHM VISUALIZATION &<br></br><span>LEARNING</span> <br></br>Course</h1>
                    <p class="par">This is a web page to send a mass number of mails which are user defined.
                    <br></br>This also helps to keep a track of valid and unvalid mails.<br></br>
                    hence this is a useful website.
                    </p>
                    <input type="submit" value='Visualize' name="cn" onClick={submit}/>
                    <input type="submit" value='Learn' name="btn2" onClick={submit1}/>
                </div>
            </div>
        </div>
    )
}

export default Home