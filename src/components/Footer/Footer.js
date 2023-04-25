import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="text">
                    © Copyright {new Date().getFullYear()} Ilhamuh97
                </div>
            </div>
        </footer>
    );
};

export default Footer;
