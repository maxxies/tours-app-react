import React, { useState } from "react";
import "../index.css";

function TourCard(props) {
    // Handles state on tour info display
    const [showInfo, showInfoHandler] = useState(true);

    // Changes state of tour info
    function handleShowInfo() {
        showInfoHandler(!showInfo);
    }

    return (
        <main>
            <div className="single-tour">
                <img src={props.tour.image} alt="tour-destination-view" />
                <div className="container">
                    <div className="tour-info">
                        <h4>{props.tour.name}</h4>
                        <div className="tour-price">${props.tour.price}</div>
                    </div>
                    <p>
                        {
                            // Displays tour info based on the state
                        }
                        {showInfo
                            ? props.tour.info.slice(0, 195) + "..."
                            : props.tour.info}
                        <span onClick={handleShowInfo}>
                            {showInfo ? "Show More" : "Show Less"}
                        </span>
                    </p>
                </div>
                <footer>
                    <button
                        className="delete-btn"
                        onClick={() => props.handleRemove(props.tour.id)}
                    >
                        Not Interested
                    </button>
                </footer>
            </div>
        </main>
    );
}
export default TourCard;
