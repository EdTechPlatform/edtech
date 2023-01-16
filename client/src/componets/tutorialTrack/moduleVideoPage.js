import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Nav from "../nav";
// import { useNavigate } from "react-router-dom";

const TutorialPage = () => {
    const location = useLocation();

    console.log(location.state);
    const moduleNumber = location.state.moduleNumber;
    console.log(moduleNumber)
    //   const [data, setData] = useState([]);
    //   const navigate = useNavigate();



    return (
        <div>
            <Nav />
            {moduleNumber}





        </div>
    );
};

export default TutorialPage;
