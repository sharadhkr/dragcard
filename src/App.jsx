import React from 'react'
import Background from './components/Background.jsx'
import Foreground from './components/Foreground.jsx'
function App() {
    return (
        <div className=' realative w-full h-screen bg-zinc-950'>
            <Foreground/>
            <Background/>
        </div>
    )
}

export default App