import React from 'react'
import Background from './components/background'
import Foreground from './components/Foreground'
function App() {
    return (
        <div className=' realative w-full h-screen bg-zinc-800'>
            <Foreground/>
            <Background/>
        </div>
    )
}

export default App