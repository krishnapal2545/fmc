export default function css(choice) {
    var num = document.getElementsByClassName("num");
    var wall = document.getElementsByClassName("wall");
    var path = document.getElementsByClassName("path");
    switch (choice) {
        case 3:
            for (let i = 0; i < num.length; i++) {
                num[i].style.background = "black";
            }
            for (let i = 0; i < wall.length; i++) {
                wall[i].style.background = "url(./Background/img/env_24.png) no-repeat 0px -287px;";
            }
            for(let j =0 ; j< document.getElementsByClassName('path').length; j++){
                document.getElementsByClassName('path')[j].style.background = "url(./Background/img/env_24.png) no-repeat 0px -287px;";
            }
            break;
    }
}