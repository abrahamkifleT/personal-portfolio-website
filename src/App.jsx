import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Recent_post from './pages/Recent_post'
import FeatureWork from './pages/FeatureWork'


function App() {

  return (
    <div>
      <Dashboard/>
      <Recent_post/>
      <FeatureWork />
    </div>
  )
}

export default App
