import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/about/About'
import Chapters from './pages/Chapters'
import Resources from './pages/resources/Resources'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

import Default from './pages/resources/Default'

import PhungVu from './pages/resources/admin/PhungVu'
import OnGoi from './pages/resources/admin/OnGoi'

import Au from './pages/resources/academic/Au'
import Thieu from './pages/resources/academic/Thieu'
import Nghia from './pages/resources/academic/Nghia'
import Hiep from './pages/resources/academic/Hiep'

import Forms from './pages/resources/other/Forms'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='chapters' element={<Chapters />} />
          <Route path='resources' element={<Resources />}>
            <Route index element={<Default />} />

            <Route path='phungvu' element={<PhungVu />} />
            <Route path='ongoi' element={<OnGoi />} />

            <Route path='au' element={<Au />} />
            <Route path='thieu' element={<Thieu />} />
            <Route path='nghia' element={<Nghia />} />
            <Route path='hiep' element={<Hiep />} />

            <Route path='forms' element={<Forms />} />
          </Route>
          <Route path='events' element={<Events />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
