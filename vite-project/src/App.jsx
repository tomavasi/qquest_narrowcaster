import { useState } from 'react'
import './App.css'
import './Components/widget.css'
import WeatherMapWidget from './Components/WeatherMapWidget'
import UtrechtCSTrainData from './Components/UtrechtCSTrainData'
import Greeting from './Components/Greeting'
import { Logo } from './Components/Logo'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CurrentWeather } from './Components/CurrentWeather'
import { WeatherForcast } from './Components/WeatherForcast'
 

function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient();

  return (
    <div className='root'>
      <div className="main">
      <Greeting />
      <Logo />
      <CurrentWeather />
      <WeatherForcast />
      <QueryClientProvider client={queryClient}>
      <WeatherMapWidget
        className={'widget weatherMapWidget'}
      />
      {/* <NS-Widget> */}
        <UtrechtCSTrainData />
      {/* </NS-Widget> */}
      </QueryClientProvider>
      </div>
    </div>
  )
}

export default App
