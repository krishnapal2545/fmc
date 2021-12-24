import React from 'react'
import './Style.css';
import randomGraph from './Graph'
import randomLayout from './Map';
import minicost from './MiniCost';
// import createBoard from './Board';
export default function Grid() {
    React.useEffect(()=>{
        window.addEventListener("load", () => {
            const grid = document.getElementById("grid");
            const scoreDisplay = document.getElementById("score");
            let score = 0;
            // var level = JSON.parse(sessionStorage.getItem('level'));
            var choice = 0;
            // var choice = Math.floor(Math.random()*4);
            const I = Number.MAX_SAFE_INTEGER;
            const S = 99;
            const T = 100;
            const D = 1000;
            let ns = Array(50).fill(0);
            for (let i = 1; i <= 50; i++) ns[i] = Math.round((Math.random() * 10) * (Math.random() * 10) + 2);
            const layout = randomLayout(choice,I,ns,S,D);
            const graph  = randomGraph(choice,I,ns);
            var WIN , mcpath = minicost(graph);
            console.log(WIN,mcpath);
            const m = layout.length;
            const n = layout[0].length;
            let squares = new Array(m); // create an empty array of length m
            for (var i = 0; i < m; i++) squares[i] = new Array(n); // make each element an array
            grid.style.width = (n * 25).toString() + "px";
            grid.style.height = (m * 25).toString() + "px";
            //draw the grid and render it
            function createBoard() {
                for (let i = 0; i < m; i++) {
                    for (let j = 0; j < n; j++) {
                        squares[i][j] = document.createElement("div");
                        grid.appendChild(squares[i][j]);
                        //add layout to the board
                        switch (layout[i][j]) {
                            case 0: squares[i][j].classList.add("path"); break;
                            case I: squares[i][j].classList.add("wall"); break;
                            case S: squares[i][j].classList.add("pac-man"); squares[i][j].classList.add("path"); break;
                            case D: squares[i][j].classList.add("destination"); break;
                            case 'p': squares[i][j].classList.add("plant"); break;
                            case 'w': squares[i][j].classList.add("waterfall"); break;
                            case 'ar': squares[i][j].classList.add("ar"); break;
                            case 'sk': squares[i][j].classList.add("skl"); break;
                            case 'pl': squares[i][j].classList.add("pl"); break;
                            case 'p1': squares[i][j].classList.add("p1"); break;
                            case 'a1': squares[i][j].classList.add("a1"); break;
                            case 'a2': squares[i][j].classList.add("a2"); break;
                            case 'a3': squares[i][j].classList.add("a3"); break;
                            case 'a4': squares[i][j].classList.add("a4"); break;
                            case 'a5': squares[i][j].classList.add("a5"); break;
                            case 'a6': squares[i][j].classList.add("a6"); break;
                            case 'a7': squares[i][j].classList.add("a7"); break;
                            case 'a8': squares[i][j].classList.add("a8"); break;
                            case 'a9': squares[i][j].classList.add("a9"); break;
                            case 'a10': squares[i][j].classList.add("a10"); break;
                            case 'a11': squares[i][j].classList.add("a11"); break;
                            case 'a12': squares[i][j].classList.add("a12"); break;
                            case 'a13': squares[i][j].classList.add("a13"); break;
                            case 'a14': squares[i][j].classList.add("a14"); break;
                            case 'sp': squares[i][j].classList.add("sp"); break;
                            case T: squares[i][j].classList.add("c2"); break;
                            default:
                                squares[i][j].classList.add("num");
                                // squares[i][j].style.background = generateRandomColor();
                                // document.querySelector(".num").style.background = "black";
                                squares[i][j].innerHTML = layout[i][j].toString();
                        }
                    }
                }
            }
            createBoard();
            function css() {
                var num = document.getElementsByClassName("num");
                var wall = document.getElementsByClassName("wall");
                var path = document.getElementsByClassName("path");
                switch (choice) {
                    case 3:
                        for (let i = 0; i < num.length; i++) {
                            num[i].style.background = "black";
                        }
                        // for (let i = 0; i < wall.length; i++) {
                        //     wall[i].style.background = "url(./Background/img/env_24.png) no-repeat 0px -287px";
                        // }
                        
                        break;
                }
            }
            css();
        });
    },[]
    )
    return (
        <div className="grid" id ="grid" >
        </div>  
       
    )
}
