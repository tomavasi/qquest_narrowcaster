const WeatherWidget = ({className}) => {

    return (
        <div className={className}>
            <iframe
                src="https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=256&width=256&renderBackground=True&renderBranding=False&renderText=True"
                title="Buienradar"
                width="256"
                height="256"
                noresize="noresize"
            />
        </div>
    )
}

export default WeatherWidget;