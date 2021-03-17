import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <ScaleLoader color="#2bde8c"  />
        </div>
    );
};

export default Loader;