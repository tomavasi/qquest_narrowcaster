const Greeting = () => {
    const getGreeting = () => {
        let greeting = (
            getTimeOfDay() == 'morning' ?
                'Goede morgen!'
                :
                getTimeOfDay() == 'afternoon'
                    ? 'Goede middag!'
                    :
                    'Goede avond!'
        )
        return greeting;
    }

    const getTimeOfDay = () => {
        let time = new Date().getHours();
        let period = time < 12 ? 'morning' : (time >= 12 && time < 18 ? 'afternoon' : 'evening');
        return period;
    }

    return (
        <>
            <h1>{getGreeting()}</h1>
        </>
    )
}

export default Greeting;