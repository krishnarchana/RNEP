import './App.css';
import { useState } from "react";
import DashboardData from "./data/dashboardData";
import dotsIcon from "./assets/dots.png";
import clockIcon from "./assets/clock.png";

function PodComponent() {
    const [showOptions, setShowOptions] = useState(false);
    
    const loadWindow = (e) => {
        setShowOptions(true);

        setTimeout(() => {
            let el = document.getElementById('box');
            el.style.position = 'absolute';
            el.style.left = (e.pageX - 130) + 'px';
            el.style.top = (e.pageY + 15) + 'px';
        }, 0);       
    }

    const closeWindow = () => {
        setShowOptions(false);
    }
    return (
        <div>
            <h3 style={{float:"left"} }>All Service Professional Groups</h3>
            <hr style={{ border: "1px solid lightgrey", clear:"both" }} />
            {
                DashboardData.map((item, index) => {
                    return (
                        <div key={index} style={{flexWrap: "wrap", float: "left", width: '20rem', height: '20rem', margin: '1rem', border: '1px solid black' }}>
                            <p style={{ cursor: "pointer", display: "inline-block", width: '100%', height: '1rem' }}><img src={dotsIcon} style={{ width: '32px', height: '32px', float: 'right', marginRight: '1rem' }} onClick={(e) => loadWindow(e)} /></p>
                            <p style={{ display: "inline-block", marginTop: '3rem', width: '100%', height: '1rem' }}><img src={clockIcon} style={{ width: '32px', height: '32px' }} /></p>
                            <p style={{ display: "inline-block", marginTop: '1rem', width: '100%', height: '1rem', fontSize: '20px' }}>{item.name}</p>
                            <hr style={{ border: '1px solid lightgrey', width: '80%' }} />
                            <div style={{width:'100%'} }>
                                <div style={{width:'33.33%', float:'left'} }>
                                    <p style={{ width: '100%', fontWeight: 'bold' }}>{item.round}</p>
                                    <p style={{width:'100%', color:'lightgrey'} }>Round</p>
                                </div>
                                <div style={{ width: '33.33%', float: 'left' }}>
                                    <p style={{ width: '100%', fontWeight: 'bold' }}>{item.phase}</p>
                                    <p style={{ width: '100%', color: 'lightgrey' }}>Phase</p>
                                </div>
                                <div style={{ width: '33.33%', float: 'left' }}>
                                    <p style={{ width: '100%', fontWeight: 'bold' }}>{item.completed}</p>
                                    <p style={{ width: '100%', color: 'lightgrey' }}>Completed</p>
                                </div>
                            </div>
                        </div>
                        )
                })
            }
            {showOptions ? (<div id="box" className="optionsCss" style={{backgroundColor: "white", width: "8rem", textAlign: "left", paddingLeft: "20px", paddingRight:'10px', height: "9rem", border: "1px solid black"}}>               
                <p className="optionsCss" style={{ width: "100%", height: '1rem' }} onClick={closeWindow}>Pause Round</p>
                <p className="optionsCss" style={{ width: "100%", height: '1rem' }} onClick={closeWindow}>Pause Phase</p>
                <hr className="optionsCss" style={{width:"100%", border:"1px solid lightgrey"} }/>
                <p className="optionsCss" style={{ width: "100%", height: '1rem' }} onClick={closeWindow}>Reset Current Round</p>
                <p className="optionsCss" style={{ width: "100%", height: '1rem' }} onClick={closeWindow}>Reset Current Phase</p>
            </div>) : null}
        </div>
    )
}

export default PodComponent