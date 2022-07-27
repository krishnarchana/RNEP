import './App.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GuidelinesOne() {
    const navigate = useNavigate();
    const changePageTwo = (e) => {

    }
    const logoutHandler = () => {
        navigate("/");
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="titleDiv">
                <p className="fullscreenTitle">Hello @Username, Welcome to your Admin PTO Preference Portal</p>
                <span className="mobilescreenTitle">Welcome to your Admin PTO Portal</span>
                <div className="logoutClass">
                        <i className="gg-log-out" onClick={logoutHandler}></i>
                </div>
                </div>
            </header>
            <p className="usernameTitle">Hello @Username</p>
            <div id="outer">
                <div className="leftBar">
                  <p>  PTO Preference Portal Tutorial </p>
                </div>
                <div className="rightBar">
                    <div className="guideLinesText">                        
                        <p className="guideLinesPOne">Important Round and Phase Guidelines</p>
                        <p className="guideLinesPTwo">1 of 2</p>
                    </div>
                    <hr className="hrClass"/>
                    <div>
                        <span style={{ float: 'left', fontWeight:'bold' }}>Round 1 - Phase 1</span>
                        <br/>
                        <ul>
                            <li style={{textAlign:'left'} }>Full time employees: May select 40 consecutive hours (5 business days) of your avaiable PTO allowance. Please note: Part time employees may select 5 consecutive working days; however, cumulative hours may vary based on your scheduled shift.</li>
                        </ul>
                    </div>
                    <div>
                        <span style={{ float: 'left', fontWeight: 'bold' }}>Other Considerations</span>
                        <br />
                        <ul>
                            <li style={{ textAlign: 'left' }}>Only full days are available in Round 1 - Phase 1. Waitlisted dates are not available.</li>
                            <li style={{ textAlign: 'left' }}>Weekend dates and NM Recognized Holidays are not considered business days and should be excluded as part of the 40 consecutive hours (5 business days).</li>
                            <li style={{ textAlign: 'left' }}>Blocked dates can be waitlisted; however, restricted dates are not available for waitlist.</li>
                            <li style={{ textAlign: 'left' }}>There is no option to bypass any round or phase if desired.</li>
                        </ul>
                    </div>
                    <div>
                        <span style={{ float: 'left', fontWeight: 'bold' }}>Round 1 - Phase 2</span>
                        <br />
                        <ul>
                            <li style={{ textAlign: 'left' }}>Employees may select up to 50% of your remaining PTO allowance minus any selected hours in Round 1 Phase 1.</li>
                            <li style={{ textAlign: 'left' }}>Employees may select both consecutive and/or non-consecutive days.</li>
                            <li style={{ textAlign: 'left' }}>Employees may select full days, half days, waitlist full days, and/or waitlist half days.</li>
                            <li style={{ textAlign: 'left' }}>Weekend days and NM Recognized Holidays are excluded.</li>
                        </ul>
                    </div>
                    <div style={{ marginBottom:'2rem' }}>
                        <span style={{ float: 'left', fontWeight: 'bold' }}>Round 2</span>
                        <br />
                        <ul>
                            <li style={{ textAlign: 'left' }}>Employees may select all of their remaining PTO allowance.</li>
                        </ul>
                    </div>
                    <button className="continueBtn" onClick={(e) => changePageTwo(e)}>Continue</button>
                    <div className="footerDiv">
                        <a className="footerAnchor" href="mailto:abc@example.com?subject = Feedback&body = Message">Email Your Manager For Additional Questions</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GuidelinesOne;