import React from 'react';
import './pathfind.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function pathfind() {
  return (
    <div className="pathfind">
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default pathfind;
