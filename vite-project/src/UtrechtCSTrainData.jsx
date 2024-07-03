const UtrechtCSTrainData = ({className, time, destination, platform, routeVia}) => {
    return(
        <div className={className}>
            <p className="time">{time}</p>
            <p className="destination">{destination}</p>
            <p className="platform">{platform}</p>
            <p className="routeVia">{routeVia}</p>
        </div>
    )
}

export default UtrechtCSTrainData;