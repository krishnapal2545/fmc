export default function createBoard(m,n,squares,layout,grid,I,S,D,T) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            squares[i][j] = document.createElement("div");
            grid.appendChild(squares[i][j]);
            //add layout to the board
            switch (layout[i][j]) {
                case 0: squares[i][j].classList.add("path"); break;
                case 100: squares[i][j].classList.add("path"); break;
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
                default:
                    squares[i][j].classList.add("num");
                    // squares[i][j].style.background = generateRandomColor();
                    // document.querySelector(".num").style.background = "black";
                    squares[i][j].innerHTML = layout[i][j].toString();
            }
        }
    }
    // function generateRandomColor() {
    //     return "hsl(" + 450 * Math.random() + ',' +
    //         (50 + 70 * Math.random()) + '%,' +
    //         (80 + 10 * Math.random()) + '%)'
    // }
}