import { Routes, Route } from 'react-router-dom';
import Home from './components/home.jsx'

function App() {

  return (
    <>
      <Routes location={location} key={location.pathname}>
        {/* Routes */}
        <Route index element={<Home />} />
        <Route path="/path" element={<Home />} />
        {/* 404 page */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
