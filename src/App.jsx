import { useState } from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Input} from './components/Input/Input'
import {Main} from './components/Main/Main'

function App() {
  const [inputValue, setInputValue] = useState('');

return (
  <>
    <Header />
    <Input onChange={(e) => {
      setInputValue(e.target.value)
      console.log(inputValue);
      
    }}/>
    <hr className='line' />
    <Main search = {inputValue}/>
  </>
)
}

export default App
