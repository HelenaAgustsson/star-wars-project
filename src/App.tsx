import { Routes, Route } from 'react-router-dom'
import FilmsPage from './pages/FilmsPage'
import FilmPage from './pages/FilmPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FilmsPage />} />
      <Route path="/films/:id" element={<FilmPage />} />
    </Routes>
  )
}

export default App