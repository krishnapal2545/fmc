import React from "react";
import Confetti from "react-confetti";
export default function movechr(m,n,layout,squares,score,WIN,scoreDisplay,mcpath){
    let [xp,yp] = position();
    function position() {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (layout[i][j] == 999) {
                    return [i,j];
                }
            }
        }
    }
    document.addEventListener("keyup", movePacman);
    function movePacman(e) {
        squares[xp][yp].classList.remove("pac-man");
        // squares[xp][yp].classList.add("visited");

        switch (e.keyCode) {
            case 37:
                if (!squares[xp][yp - 1].classList.contains("wall")) yp -= 1;
                break;
            case 38:
                if (!squares[xp - 1][yp].classList.contains("wall")) xp -= 1;
                break;
            case 39:
                if (!squares[xp][yp + 1].classList.contains("wall")) yp += 1;
                break;
            case 40:
                if (!squares[xp + 1][yp].classList.contains("wall")) xp += 1;
                break;
        }
        squares[xp][yp].classList.add("pac-man");
        // squares[xp][yp].classList.remove("visited");
        walk();
    }
    //what happens when man walk
    function walk() {
        if (squares[xp][yp].classList.contains("path")) {
            // squares[xp][yp].classList.remove("path");
        } else if (squares[xp][yp].classList.contains("num")) {
            score += layout[xp][yp];
            scoreDisplay.innerHTML = score;
            squares[xp][yp].classList.remove("num");
            squares[xp][yp].classList.add('visited')
        }
        else if (squares[xp][yp].classList.contains("turn")) {
            squares[xp][yp].classList.remove("turn");
        }

        if (squares[xp][yp].classList.contains("destination")) {
            document.removeEventListener("keyup", movePacman);
            document.getElementById('winner').style.display = "block";
            if (WIN == score) {
                document.getElementById('result').innerHTML="Congratulations You Win !!";
                console.log("hii");
                return score;
            }
            else{
                let pat='';
                for(let i = 0; i <mcpath.length;i++){
                    pat += mcpath[i].toString() + '  >>>  ';
                }
                pat = pat + "Goal";
                document.getElementById('result').innerHTML="You Loss!!.."+"<br>"+"Minimum Cost is : "+WIN+"<br>"+"Right Path is..."+ "<br>" + pat; 
                return score;
            }
            
        }
    }

}


