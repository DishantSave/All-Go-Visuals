import './Visualize.css'
import React from "react"
import { useNavigate } from 'react-router-dom';

function Visualize (){

   // const location= useLocation();useLocation,
    const history = useNavigate()

    async function submit(e) {
        history("/../Merge-Sort")
    }

    async function submit1(e) {
        history("/../Insertion-Sort")
    }

    async function submit2(e) {
        history("/../Selection-Sort")
    }

    async function submit3(e) {
        history("/../Bubble-Sort")
    }

    async function submit4(e) {
        history("/../Quick-Sort")
    }

    async function submit5(e) {
        history("/../pathfind")
    }

    async function submit6(e) {
        history("/pathfind1")
    }

    async function submit7(e) {
        history("/pathfind2")
    }

    async function submit8(e) {
        history("/pathfind3")
    }

    return (
        <div class="bg-imgs">
        <div class="main">
            <br></br>
            <br></br>
            <div class="box">
                <h1>Sorting<span>Algorithm</span></h1>
                <input type="submit" value='Merge sort' class="cn" onClick={submit}/>
                <input type="submit" value='Insertion sort' class="cn" onClick={submit1}/>
                <input type="submit" value='Selection sort' class="cn" onClick={submit2}/>
                <input type="submit" value='Bubble sort' class="cn" onClick={submit3}/>
                <input type="submit" value='Quick sort' class="cn" onClick={submit4}/>
            </div>
            <br></br>
            <div class="box1">
                <h1>Path<span>Finding</span>Algorithm</h1>
                <input type="submit" value='Dijkstra' class="cn" onClick={submit5}/>
                <input type="submit" value='A*' class="cn" onClick={submit6}/>
                <input type="submit" value='BFS' class="cn" onClick={submit7}/>
                <input type="submit" value='DFS' class="cn" onClick={submit8}/>
            </div>
        </div>
    </div>
    )
}

export default Visualize