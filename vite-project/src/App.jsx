import { useState } from 'react'
import './App.css'
import './Components/widget.css'
import WeatherWidget from './Components/WeatherWidget'
import UtrechtCSTrainData from './Components/UtrechtCSTrainData'
import Greeting from './Components/Greeting'
import { Logo } from './Components/Logo'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
 

function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient();

  return (
    <div className='root'>
      <Greeting />
      <Logo />
      <QueryClientProvider client={queryClient}>
      <WeatherWidget
        className={'widget weatherWidget widget-bg-light'}
      />
      <NS-Widget>
        <UtrechtCSTrainData />
      </NS-Widget>
      </QueryClientProvider>
    </div>
  )
}

export default App
