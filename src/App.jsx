import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Recent_post from './pages/Recent_post'
import FeatureWork from './pages/FeatureWork'
import Footer from './component/Footer'
import Blog from './pages/Blog'
import Work from './pages/Work'
import Contact from './pages/Contact'


function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <Routes>
        <Route path="/" element={
          <>
            <Dashboard />
            <Recent_post />
            <FeatureWork />
          </>
        } />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
