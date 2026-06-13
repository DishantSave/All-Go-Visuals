//import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Learn from "./components/Learn"
import Visualize from "./components/Visualize"
import Mergesort from "./Merge-Sort"
import Insertionsort from "./Insertion-Sort"
import Selectionsort from "./Selection-Sort"
import Bubblesort from "./Bubble-Sort"
import Quicksort from "./Quick-Sort"
import PathfindingVisualizer from "./pathfind"
import PathfindingVisualizer1 from "./pathfind1"
import PathfindingVisualizer2 from "./pathfind2"
import PathfindingVisualizer3 from "./pathfind3"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login/>}/> */}
          {/* <Route path="/signup" element={<Signup/>}/> */}
          {/* <Route path="/home" element={<Home/>}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/learn" element={<Learn/>}/>
          <Route path="/Visualize" element={<Visualize/>}/>
          <Route path="/Merge-Sort" element={<Mergesort/>}/>
          <Route path="/Insertion-Sort" element={<Insertionsort/>}/>
          <Route path="/Selection-Sort" element={<Selectionsort/>}/>
          <Route path="/Bubble-Sort" element={<Bubblesort/>}/>
          <Route path="/Quick-Sort" element={<Quicksort/>}/>
          <Route path="/pathfind" element={<PathfindingVisualizer/>}/>
          <Route path="/pathfind1" element={<PathfindingVisualizer1/>}/>
          <Route path="/pathfind2" element={<PathfindingVisualizer2/>}/>
          <Route path="/pathfind3" element={<PathfindingVisualizer3/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;