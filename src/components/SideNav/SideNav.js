import React from 'react';
import './SideNav.scss';
import { AiOutlineClose } from "react-icons/ai";

const SideNav = ({ closeNav }) => {
    return (
        <div className="sidenav">
            <div className="links">
                <a className="link" href="#main" onClick={() => closeNav()}>Home</a>
                <a className="link" href="#journey" onClick={() => closeNav()}>Journey</a>
                <a className="link" href="#project" onClick={() => closeNav()}>Projects</a>
            </div>
            <AiOutlineClose className="close" onClick={() => closeNav()} />
        </div>
    );
};

export default SideNav;