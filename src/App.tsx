import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
