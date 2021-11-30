import React, { useState, useEffect } from "react";
import TourCard from "./Components/TourCard";
import "./index.css";

function App() {
    const [loading, setloading] = useState(true); //State for page loading status
    const [data, setdata] = useState([]); // State for holding fetched data
    const [dataCopy, setdataCopy] = useState([]); ///state for keeping a copy of the fetched data

    useEffect(() => {
        //Fetches data when page mounts
        setTimeout(() => {
            //Function to enable a delay of one sec before data is fetched
            fetch("https://course-api.com/react-tours-project")
                .then((res) => {
                    return res.json();
                })
                .then((dataset) => {
                    setdata(dataset); //stores fetched data
                    setdataCopy(dataset); //Stores a copy of fetched data
                    setloading(false); //Change the loading status of the page
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 1000);
    }, []);

    //Displays component when page is loading
    if (loading) {
        return (
            <div>
                <h1 className="loading">Loading...</h1>
            </div>
        );
    }

    //Maps fetched/available data to react component
    var content;
    content = data.map((tours, index) => {
        return (
            <TourCard key={index} tour={tours} handleRemove={handleRemove} />
        );
    });

    //Displays contents after page is done loading
    var showcontent;
    if (data.length !== 0) {
        //shows available tours
        showcontent = (
            <div>
                <h2 className="title">Our Tours</h2>
                <div className="underline"></div>
                {content}
            </div>
        );
    } else {
        //shows content when no available tours
        showcontent = (
            <div>
                <h2>No More Tours Remaining</h2>
                <div className="btn-box">
                    <button className="btn" onClick={() => handledataupdate()}>
                        Refresh
                    </button>
                </div>
            </div>
        );
    }

    //Function removes a tour detail from the available data
    function handleRemove(id) {
        var newdata = data.filter((tours) => tours.id !== id);
        setdata(newdata);
    }
    //Function updates data to fetched data
    function handledataupdate() {
        setdata(dataCopy);
    }

    return <main>{showcontent}</main>;
}

export default App;
