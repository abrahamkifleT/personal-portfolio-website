import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Recent_post from './pages/Recent_post'
import FeatureWork from './pages/FeatureWork'
import Footer from './component/Footer'


function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <Dashboard />
      <Recent_post />
      <FeatureWork />
      <Footer />
    </div>
  )
}

export default App
