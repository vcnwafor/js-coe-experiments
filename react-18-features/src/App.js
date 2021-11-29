import {Routes, Route} from 'react-router-dom'
import Home from 'pages/Home'
import Navbar from 'components/Navbar'
import Batching from 'pages/Batching'

const App = () => (
  <div>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Batching" element={<Batching />} />
    </Routes>
  </div>
)

export default App
