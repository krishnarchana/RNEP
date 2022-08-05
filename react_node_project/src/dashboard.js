import './App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from './navBar';
import settingsIcon from './assets/settings.png';
import searchIcon from './assets/search.png';
import PodComponent from './podComponent';

function Dashboard() {
    const navigate = useNavigate();
    const [showView, setShowView] = useState(false);

    const goToNextPage = (e) => {

    }
    const logoutHandler = () => {
        navigate("/");
    }
    const loadSettingsScreen = () => {
        setShowView(true);
    }
    const close = (flag) => {
        if (flag) {
            setShowView(false);
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                <div className="titleDiv">
                    <div className="leftHeaderCss">
                        <span className="fullscreenTitle">Hello @Username, Welcome to your Admin PTO Preference Portal</span>
                        <span className="mobilescreenTitle">Welcome to your Admin PTO Portal</span>
                    </div>
                    <div className="rightHeaderCss">
                        <div className="logoutClass">
                            <i className="gg-log-out" onClick={logoutHandler}></i>
                        </div>
                    </div>
                </div>
            </header>
            <div className="mobileDashboardView">
                <img onClick={loadSettingsScreen} src={settingsIcon} style={{ marginLeft: '1rem', marginTop: '1.7rem', width: '24px', height: '24px', border: '1px solid black', float: 'left' }} />
            </div>
            <p className="usernameTitle">Hello @Username</p>
            <div className="mobileDashboardView">
                <img src={searchIcon} style={{ marginRight: '1rem', marginTop: '-2.9rem', width: '24px', height: '24px', border: '1px solid black', float: 'right' }} />
            </div>
            <div id="outer">
                <div style={{marginTop:'1rem'} }>
                    <NavBar showManage={showView} closeWindow={close}/>
                </div>
                <div>
                    <PodComponent />
                </div>
                <br />
                <br />
                <div className="footerDivMobile" style={{clear:"both"} }>
                    <a className="footerAnchorMobile" href="mailto:abc@example.com?subject = Feedback&body = Message">Email Your Manager For Additional Questions</a>
                </div>
                <div className="footerDivDesktop" style={{ clear: "both" }}>
                    <span className="footerDivSpan">If you have additional questions please contact your manager</span>
                    <a className="footerAnchorDesktop" href="mailto:abc@example.com?subject = Feedback&body = Message">Email Your Manager</a>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;