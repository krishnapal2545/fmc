import React from "react";
import "./Style.css";
import randomGraph from "./Graph";
import randomLayout from "./Map";
import minicost from "./MiniCost";
import createBoard from "./Board";
import css from "./RandomCss";
import movechr from "./Movechr";
import Confetti from "react-confetti";
export default function Grid() {
  React.useEffect(() => {
    window.addEventListener("load", () => {
      const grid = document.getElementById("grid");
      const scoreDisplay = document.getElementById("score");
      let score = 0;
      // var level = JSON.parse(sessionStorage.getItem('level'));
      var choice = 0;
      // var choice = Math.floor(Math.random()*4);
      const I = Number.MAX_SAFE_INTEGER;
      const S = 999;
      const T = 100;
      const D = 1000;
      let randomnumbers = new Set, ns;
      while (randomnumbers.size < 100) {
        randomnumbers.add(Math.floor(Math.random() * 100) + 1);
      }
      ns = [...randomnumbers];
      const layout = randomLayout(choice, I, ns, S, D);
      const graph = randomGraph(choice, I, ns);
      let [WIN, mcpath] = minicost(graph, choice);
      const m = layout.length;
      const n = layout[0].length;
      let squares = new Array(m); // create an empty array of length m
      for (var i = 0; i < m; i++) squares[i] = new Array(n); // make each element an array
      grid.style.width = (n * 25).toString() + "px";
      grid.style.height = (m * 25).toString() + "px";
      //Creat Map and Design...
      createBoard(m, n, squares, layout, grid, I, S, D, T);
      css(choice);
      //Move Character .....
     movechr(m, n, layout, squares, score, WIN, scoreDisplay,mcpath);
    });
  }, []);
  function close(){
    document.getElementById("winner").style.display = "none";
    window.location.reload();
  }
  
  return (
    <>
      <div className="grid" id="grid"></div>
      <div id="winner" className="modal2">
        <div className="modal2-dialog modal2-lg">
          <div className="modal2-content">
            <div className="modal2-content-left"></div>
            <div className="modal2-content-right">
              <div className="modal2-header">
                <p style={{margin :'auto'}}>Result</p>
               <span className="close" style={{color:"black"}} onClick={close}>&times;</span>
              </div>
              <div className="modal2-body" >
                <p id="result"></p>
              </div>
              <div className="modal2-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
