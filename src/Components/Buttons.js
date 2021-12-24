import React,{useState} from "react";
import "./Buttons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Buttons() {
    function restart(){
      window.location.reload();
    }
    function openOne(){
      document.getElementById("myModal").style.display = "block";
    }
    function closeOne(){
      document.getElementById("myModal").style.display = "none";
    }
    function startTimer(duration, display) {
      var start = Date.now(),diff,minutes,seconds;
      function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (diff <= 0) {
          start = Date.now() + 1000;
          window.location.reload(); 
        }
      };
      timer();
      setInterval(timer, 1000);
    }
    window.onload = function () {
      var fiveMinutes = 60 * 5,
        display = document.getElementById('time');
      startTimer(fiveMinutes, display);
    };
  return (
    <div>
    <div className="container">
      <div className="card" style={{width: "19rem"}}>
        <div className="card-body">
            <button className='five'><b>F-M-C</b></button>
            <button className='four'><b>Cost: <span id="score"></span></b></button>
            <button className='two' onClick={restart}> <b>Restart</b></button>
            <button className='one' onClick={openOne}> <b>Help</b></button>
            <button className='three'> <b>Time left: <span id="time"></span>min! </b></button>
        </div>
      </div>
    </div>
    <div id="myModal" className="modal" >
    <div className="modal-content">
      <div className="modal-content-left">
      </div>
      <div className="modal-content-right">
        <div className="modal-header">
          <p>This Game is about finding the minimum cost for paths to reach destination.</p>
          <span className="close" onClick={closeOne}>&times;</span>
        </div>
        <div className="modal-body">
          <p>Step1: Try to Understand Map.</p>
          <p>Step2: Move the cursor key(up, down, left, right) to move the Character.</p>
          <p>Step3: Choose the path from Source to Desination.</p>
          <p>Step4: Your Selected path should be in such a way that it give minimum cost to reach till desination.</p>
        </div>
        <div className="modal-footer">
          <p></p>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}
