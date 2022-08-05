import './App.css';
import { useState } from "react";
import GroupData from "./data/groupData";

function ManagePopUp(props) {
    return (
        <div style={{ width: '100%', height: '31rem', backgroundColor: '#fff', border: '1px solid #000', marginLeft: '2rem' }}>
            <p className="navPCss">Start / Stop Settings</p>
            <select className="navDDCss" name="start">
                <option value="" disabled selected hidden>Start/Stop</option>
                <option value="startRound">Start Round</option>
                <option value="startPhase">Start Phase</option>
                <option value="stopRound">Stop Round</option>
                <option value="stopPhase">Stop Phase</option>
            </select>
            <p className="navPCss">Group Name</p>
            <select className="navDDCss" name="all">
                <option value="" disabled selected hidden>All</option>
                {GroupData.map((item, index) => {
                    return (
                        <option>
                            {item.name}
                        </option>
                    )
                })}
            </select>
            <p className="navPCss">Select Time</p>
            <select className="navDDCss" name="time">
                <option value="" disabled selected hidden>12:01 Am</option>
                <option value="startRound">Start Round</option>
                <option value="startPhase">Start Phase</option>
                <option value="stopRound">Stop Round</option>
                <option value="stopPhase">Stop Phase</option>
            </select>
            <p className="navPCss">Select Date</p>
            <select className="navDDCss" name="date">
                <option value="" disabled selected hidden>01/11/2023</option>
                <option value="startRound">Start Round</option>
                <option value="startPhase">Start Phase</option>
                <option value="stopRound">Stop Round</option>
                <option value="stopPhase">Stop Phase</option>
            </select>
            <hr style={{ border: '1px solid grey' }} />
            <p className="navPCss" style={{fontWeight:'bold'} }>ServiceProfessional Settings</p>
            <p className="navPCss">Enable / Disable Service Professional</p>
            <select className="navDDCss" name="professional">
                <option value="" disabled selected hidden>Select Option</option>
                <option value="startRound">Start Round</option>
                <option value="startPhase">Start Phase</option>
                <option value="stopRound">Stop Round</option>
                <option value="stopPhase">Stop Phase</option>
            </select>
            <p className="navPCss">Bypass Service Professional</p>
            <select className="navDDCss" name="byPass">
                <option value="" disabled selected hidden>Select Option</option>
                <option value="startRound">Start Round</option>
                <option value="startPhase">Start Phase</option>
                <option value="stopRound">Stop Round</option>
                <option value="stopPhase">Stop Phase</option>
            </select>
            <div className="saveBtn" onClick={(e)=>props.save(e)}>Save Changes</div>
        </div>
    )
}
export default ManagePopUp;