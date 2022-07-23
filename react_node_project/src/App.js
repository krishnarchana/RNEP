import './App.css';
import { useEffect, useState } from "react";
import accordianData from './data/accordianData';

function App() {

    const accData = accordianData;

    const accordianClick = (index) => {
        var acc = document.getElementsByClassName("accordion");
        var accSelected = acc[index];
        accSelected.classList.toggle("active");
        var panel = accSelected.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };

  return (
    <div className="App">
        <header className="App-header">       
            <p>PTO Preference Portal</p>
        </header>
        <form action="" className="loginForm">
            <label className="formLabel" htmlFor="userLogin">User Login</label>
            <br/>
            <input type="text" id="userLoginId" name="userLogin" placeholder="LANID" />
            <br/>
            <span>Unauthorised Access is prohibited</span>
            <br/>
            <input type="submit" value="Login" />
        </form>

        <p className="formParagraph">Important Round and Phase Guidelines</p>
        <hr className="formHr" />

          {accData.map((item, index) => {
              return (
                  <div key={index}>
                      <button className="accordion" onClick={(e)=>accordianClick(index)}>{item.title}</button>
                      <div className="panel">
                        <p>{item.content}</p>
                      </div>
                  </div>
                  )
          })}
          
    </div>
  );
}

export default App;