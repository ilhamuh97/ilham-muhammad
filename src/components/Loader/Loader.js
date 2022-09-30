import React from "react";
import "./Loader.scss";
import LoaderSVG from "../../assets/svg/loading.svg";

const Loader = () => {
    return (
        <div className="loader">
            <img className="loader-img" src={LoaderSVG} alt="loading" />
        </div>
    );
};

export default Loader;
