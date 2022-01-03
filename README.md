# Find Minimum Cost - Game ReactJS

GAME DEVELOPMENT USING DATA STRUCTURES 
Find Minimum Cost to reach the destination 

Game link: (https://krishnapal2545.github.io/fmc/)


INTRODUCTION & PROCEDURE
This project is made with the aim of finding the application of Data Structure in real life. We made this project using the graph data structure. We have designed this project using HTML, CSS for the frontend part and javascript for the backend part application. In the frontend part, we have 2 buttons(restart, help), scoreboard and timer. As mentioned the restart button is used for restarting the game. The help button opens up the modal box which guides us as to how the game is to be played.
Then we have the scoreboard which tells us the cost of the path (real-time) when the character is actually moving (i.e. The distance the character travels by the user). Then we have a timer of 5 min. Which is a downcount timer, the game will be over and restarts after 5 min duration is complete. In the frontend when the user starts playing the game and as soon as the character reaches the destination, the modal box will open and show if the minimum cost by the player is equal to the minimum cost by the graph algorithm then the player wins and goes to the new level otherwise the game is over and then it will restart with new map of the path. 
In the backend part i.e, JavaScript, find the minimum cost of the same map that the player was playing, and compare the player cost and the algorithm cost and decide accordingly win or loss.

RESULTS
When the user starts the game he is at the source position. To reach the destination he has to select the paths in such a way that the cost for reaching the destination is minimum. If the path that the user selects to reach the destination is minimum, then the alert pop appears saying that “Congratulations you won the game!!”

If the path that the user selects to reach the destination is not minimum cost then the alert pop appears saying that “you lose and display the lowest cost value and the correct path to gain the lowest cost"
