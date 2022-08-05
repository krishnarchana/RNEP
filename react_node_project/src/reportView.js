import './App.css';
import { useState } from "react";
import closeIcon from "./assets/close.png";

function ReportView(props) {
    const close = (e) => {
        props.close();
    }
    const download = (e) => {
        props.download();
    }
    return (
        <div className="reportCss">
            <div className="refDiv">
                <h3 className="refPcss">Generated Report</h3>
                <img src={closeIcon} className="refImg" onClick={(e) => { close(e) }} style={{ cursor: 'pointer', marginTop: '1rem', float: 'right', marginRight: '1rem' }} />
            </div>
            <div style={{ width: '100%', marginTop: '2rem', textAlign: 'left', paddingLeft: '20px', clear: 'both' }}>
                <p className="refp">Select The Report You Would Like To Generated Below</p>
                <div style={{marginBottom:'1rem'} }>
                    <select name="allDropdown" style={{ width: '90%' }}>
                        <option value="" disabled selected hidden>All</option>
                        <option value="startRound">Start Round</option>
                        <option value="startPhase">Start Phase</option>
                        <option value="stopRound">Stop Round</option>
                        <option value="stopPhase">Stop Phase</option>
                    </select>
                </div>
                <div className="cancelBtn" style={{ float: "left" }} onClick={(e) => { close(e) }}>Cancel</div>
                <div className="downloadRptBtn" style={{ float: "right" }} onClick={(e) => { download(e) }}>Download Report</div>
            </div>
        </div>
    )
}

export default ReportView;