import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Typography color="secondary"  variant="overline" gutterBottom>
        rectangle gravity :)
      </Typography>
      <CircularProgress color="success" />
    </Box>
  )
}

export default App
