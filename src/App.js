import { useState } from 'react';
import "./App.css"
// import { fireEvent, render, screen } from '@testing-library/react'

const App = () => {
  const [isClick, setIsClick] = useState(false)
  const onClickIncrement = () => {
    setIsClick((prevNumber) => (!prevNumber))
  }
  return (
    <div className='bg-container'>
      <p>Is Clicked: {isClick ? "true" : "false"}</p>
      <button testid='button' className='button' type='button' onClick={onClickIncrement}>Increment Button</button>
    </div>
  )

}

export default App;
