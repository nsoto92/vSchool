import React from "react"

function Spots(props) {
    const styles = {
        display: "grid",
        width: 250,
        height: 200
    }

    if (props.spot.timeToGo === "Spring") {
        styles.color = "green"
    } else if (props.spot.timeToGo === "Summer") {
        styles.color = "orange"
    } else if (props.spot.timeToGo === "Fall") {
        styles.color = "brown"
    } else if (props.spot.timeToGo === "Winter") {
        styles.color = "blue"
    }

    return (
        <div style={styles}>
            <h1>Spot: {props.spot.place}</h1>
            <button style={{ width: 200, margin: "auto" }}>Book Now: {props.spot.price.toLocaleString("en-us", { style: "currency", currency: "USD" })}</button>
        </div>
    )
}

export default Spots

// backgroundColor: props.spot.timeToGo === "Spring" && "Green"