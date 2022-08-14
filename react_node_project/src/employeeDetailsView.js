import EmployeeData from './data/employeeData';
import settingsIcon from './assets/settings.png';
import searchIcon from './assets/search.png';
import NavBar from './navBar';
import './App.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeDetailsView() {

    const navigate = useNavigate();
    const [showView, setShowView] = useState(false);
    const [employeeData, setEmployeeData] = useState(EmployeeData);
    const [updateData, setUpdateData] = useState([]);

    useEffect(() => {
        if (updateData.length > 0) {
            setEmployeeData(updateData);
        }
    }, [updateData]);

    const accordianClick = (index) => {
        var acc = document.getElementsByClassName("accordionE");
        var accSelected = acc[index];
        //accSelected.classList.toggle("active");
        var panel = accSelected.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };

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
    const selectCB = (event) => {  
        let temp = employeeData;
        temp.forEach(item => {
            item.isChecked = event.target.checked;
       })
        setUpdateData([...temp]);
    }
    const rowSelected = (event) => {
        let temp = employeeData;
        temp.forEach((item, index) => {

            if (event.target.id == ("cb" + index)) {
                item.isChecked = event.target.checked;
            }
            
            if (event.target.id == ("cb" + index)) {
                let input = document.getElementById("cbAll");
                input.checked = false;
            }           
        })
        setUpdateData([...temp]);
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
                <div style={{ marginTop: '3rem' }}>
                    <NavBar showManage={showView} closeWindow={close} />
                </div>
                <div style={{marginTop:'2rem'} }>
                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <td style={{fontWeight:'bold', width:'90%'} }>
                                    <input id="cbAll" type="checkbox" style={{ float: 'left', marginLeft: '2.8rem', textAlign: 'left' }} onChange={selectCB} />
                                <span style={{ float: 'left', marginRight: '8rem', width: '3rem' }}>Name</span>
                                <span style={{ float: 'left', marginRight: '38px', width: '18rem', textAlign: 'left' }}>Email</span>
                                <span style={{ float: 'left', marginRight: '25px', width: '5rem', textAlign: 'left' }}>LANID</span>
                                <span style={{ float: 'left', marginRight: '25px', width: '10rem', textAlign: 'left' }}>Group Name</span>
                                <span style={{ float: 'left', marginRight: '25px', width: '8rem', textAlign: 'left' }}>Hours Available</span>
                                <span style={{ float: 'left', marginRight: '25px', width: '6rem', textAlign: 'left' }}>Total Hours</span>
                                <span style={{ float: 'left', marginRight: '25px', width: '7rem', textAlign: 'left' }}>Status</span>
                                <span style={{ float: 'left', width: '4rem' }}></span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeData.map((item, index) => {
                                return (
                                    <tr key={index} id={"tr" + `${index}`}>
                                        <td>
                                            <button className="accordionE" onClick={(e) => accordianClick(index)}>
                                                <div>
                                                    <input checked={item.isChecked} type="checkbox" id={"cb" + `${index}`} style={{ float: 'left', marginRight: '25px' }} onChange={(e) => rowSelected(e)} />
                                                    <span style={{ float: 'left', marginRight: '25px', width: '8rem' }}>{item.name}</span>
                                                    <span style={{ float: 'left', marginRight: '25px', width: '19rem' }}>{item.email}</span>
                                                    <span style={{ float: 'left', marginRight: '25px', width: '5rem' }}>{item.lanid}</span>
                                                    <span style={{ float: 'left', marginRight: '25px', width: '10rem' }}>{item.groupName}</span>
                                                    <span style={{ float: 'left', marginRight: '25px', width: '8rem' }}>{item.hoursAvailable}</span>
                                                    <span style={{ float: 'left', marginRight: '25px', width: '6rem' }}>{item.totalHours}</span>
                                                    <span style={{ float: 'left', marginRight: '25px', width: '7rem' }}>{item.status}</span>
                                                    <span style={{ float: 'left', width: '4rem', cursor: 'pointer' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg></span>
                                                </div>
                                            </button>
                                            <div className="panelE">
                                                <p>{item.status}</p>
                                            </div>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
                <div className="footerDivMobile" style={{ clear: "both" }}>
                    <a className="footerAnchorMobile" href="mailto:abc@example.com?subject = Feedback&body = Message">Email Your Manager For Additional Questions</a>
                </div>
                <div className="footerDivDesktop" style={{ clear: "both" }}>
                    <span className="footerDivSpan">If you have additional questions please contact your manager</span>
                    <a className="footerAnchorDesktop" href="mailto:abc@example.com?subject = Feedback&body = Message">Email Your Manager</a>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetailsView;