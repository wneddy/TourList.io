import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Onboarding from './components/Onboarding/Onboarding'
import Feed from './components/Feed/Feed'
import Explore from './components/detailedExplore/Explore'

import './index.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/onboarding" element={<Onboarding />}/>
        <Route path="/feed" element={<Feed />}/>
        <Route path="/explore/:id" element={<Explore />}/>
      </Routes>
    </>
  )
}