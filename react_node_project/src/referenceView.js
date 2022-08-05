import './App.css';
import { useState } from "react";
import closeIcon from "./assets/close.png";

function ReferenceView(props) {
    const close = (e) => {
        props.close();
    }
    return (
        <div className="refCss">
            <div className="refDiv">
                <h3 className="refPcss">View Reference Guide</h3>
                <img src={closeIcon} className="refImg" onClick={(e) => { close(e) }} style={{cursor:'pointer',marginTop:'1rem', float:'right', marginRight:'1rem'} }/>                
            </div>
            <div style={{ width: '100%', marginTop: '2rem', textAlign:'left', paddingLeft:'20px', clear:'both'}}>
                <p className="refp">Round 1</p>
                <hr style={{ width: '92%', marginLeft: '1px', backgroundColor:"black" }} />
            <span>Phase 1 - Service professionals selects 40 consecutive hours only (for</span>
            <span> full time employees)</span>
                <hr style={{ width: '92%', marginLeft: '1px' ,backgroundColor: "lightgrey" }} />
            <p>Part time= equivalent to 1 full work week</p>
                <hr style={{ width: '92%', marginLeft: '1px',backgroundColor: "lightgrey" }} />
            <span>Phase 2 - Service professionals select upto 50% of their</span>
            <span> remaining PTO after phase 1</span>
                <hr style={{ width: '92%', marginLeft: '1px', backgroundColor: "lightgrey" }} />
                <p className="refp">Round 2</p>
                <hr style={{ width: '92%', marginLeft: '1px', backgroundColor: "black" }} />
                <p>Service professionals can select remaining PTO allowance</p>
                <hr style={{ width: '92%', marginLeft: '1px', backgroundColor: "lightgrey" , marginBottom:'1rem'}} />
                <div className="closeBtn" style={{ float: "right" }} onClick={(e) => { close(e) }}>Close</div>
            </div>
        </div>
        )
}

export default ReferenceView;