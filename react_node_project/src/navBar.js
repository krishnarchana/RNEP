import './App.css';
import { useState, useEffect } from "react";
import ManagePopUp from './managePopUp';
import GroupData from "./data/groupData";
import expandIcon from "./assets/expand.png";
import ReferenceView from './referenceView';
import ReportView from './reportView';

function NavBar(props) {
    const [showManage, setShowManage] = useState(false);
    const [showGroups, setShowGroups] = useState(false);
    const [showReference, setShowReference] = useState(false);
    const [showReport, setShowReport] = useState(false);

    useEffect(() => {
        if (props.showManage) {
            setShowManage(true);
        }
    }, [props.showManage]);

    const showManageScreen = (event) => {
        setShowManage(true);
        setShowGroups(false);
        setShowReference(false);
        setShowReport(false);
    }
    const showGroupsScreen = (event) => {
        setShowGroups(true);
        setShowManage(false);
        setShowReference(false);
        setShowReport(false);
    }
    const save = (event) => {
        setShowManage(false);
        props.closeWindow(true);
    }
    const selectedGroup = (event) => {
        setShowGroups(false);
    }
    const showRefView = (event) => {
        setShowReference(true);
        setShowReport(false);
        setShowGroups(false);
        setShowManage(false);
    }
    const showReportView = () => {
        setShowReference(false);
        setShowReport(true);
        setShowGroups(false);
        setShowManage(false);
    }
    const closeRef = (event) => {
        setShowReference(false);
    }
    const closeReport = (event) => {
        setShowReport(false);
    }
    return (
        <div>
            <div className="mdView" style={{ width: '100%', height: '2.7rem', backgroundColor: '#F9F9F9', paddingTop: '5px' }}>
                <div className="manageBtn" onClick={(e) => { showManageScreen(e) }}>Manage Group Settings</div>
                <div className="manageBtn" onClick={(e) => { showGroupsScreen(e) }}>All Groups<img src={expandIcon} style={{width:'16px', height:'16px', float:'right', paddingRight:'8px'} }/></div>
            <div className="divClass">
                    <input type="search" placeholder="Employee Search" />
                    <button className="button">search</button>
                </div>
                <div className="manageBtn" style={{ float: "left", borderRadius: "20px" }} onClick={(e) => { showRefView(e) } }>View Reference Guide</div>
                <div className="reportBtn" style={{ float: "left" }} onClick={(e) => { showReportView(e) }}>Report</div>
            </div>
            {showManage ? <div className="podCss"><ManagePopUp save={save} /></div> : null}
            {showGroups ? <div className="podCss">
                <div className="groupDDCss">
                {GroupData.map((item, index) => {
                    return (
                        <li className="liClass" onClick={(e) => { selectedGroup(e) }}>
                            {item.name}
                        </li>
                    )
                })}
                    </div>
            </div> : null}
            {showReference ? <div className="podCss"><ReferenceView close={closeRef} /></div> : null}
            {showReport ? <div className="podCss"><ReportView close={closeReport} download={closeReport } /></div> : null}
        </div>

    )
}
export default NavBar;