import { useState } from 'react'
import './App.css'
import './Components/widget.css'
import WeatherWidget from './Components/WeatherWidget'
import UtrechtCSTrainData from './Components/UtrechtCSTrainData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherWidget
        className={'widget widget-bg-light'}
      />
      <NS-Widget>
        <UtrechtCSTrainData
          className={'widget utrechtCSTrainDataContainer bg-yellow-light'}
          time={'07:20'}
          destination={'Amsterdam'}
          platform={'3b'}
          routeVia={'Via Amsterdam-Zuid, Groningen'}
        />
        <UtrechtCSTrainData
          className={'widget utrechtCSTrainDataContainer bg-yellow-dark'}
          time={'07:20'}
          destination={'Amsterdam'}
          platform={'3b'}
          routeVia={'Via Amsterdam-Zuid, Groningen'}
        />
      </NS-Widget>
    </>
  )
}

export default App
