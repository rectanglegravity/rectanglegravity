import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Typography from '@mui/material/Typography';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Typography variant="overline" gutterBottom>
        rectangle gravity
      </Typography>
    </div>
  )
}

export default App
