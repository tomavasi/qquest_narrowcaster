import { useState } from 'react'
import './App.css'
import './widget.css'
import WeatherWidget from './WeatherWidget'
import UtrechtCSTrainData from './UtrechtCSTrainData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherWidget
        className={'widget widget-bg-light'}
      />
      <UtrechtCSTrainData
        className={'widget utrechtCSTrainDataContainer bg-yellow-light'}
        time={'07:20'}
        destination={'Amsterdam'}
        platform={'3b'}
        routeVia={'Via Amsterdam-Zuid, Groningen'}
      >
      </UtrechtCSTrainData>
    </>
  )
}

export default App
