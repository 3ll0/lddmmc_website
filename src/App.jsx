import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Chapters from './pages/Chapters'
import Resources from './pages/resources/Resources'
import Events from './pages/Events'
import Contact from './pages/Contact'

import Neutral from './pages/resources/Neutral'
import Au from './pages/resources/Au'
import Thieu from './pages/resources/Thieu'
import Nghia from './pages/resources/Nghia'
import Hiep from './pages/resources/Hiep'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='chapters' element={<Chapters />} />
          <Route path='resources' element={<Resources />}>
            <Route index element={<Neutral />} />
            <Route path='au' element={<Au />} />
            <Route path='thieu' element={<Thieu />} />
            <Route path='nghia' element={<Nghia />} />
            <Route path='hiep' element={<Hiep />} />
          </Route>
          <Route path='events' element={<Events />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
