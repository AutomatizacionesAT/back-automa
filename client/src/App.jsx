import { Route, Routes } from 'react-router-dom'

import Main from './pages/main.jsx'
import NavBar from './components/header/NavBar.jsx'

function App() {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route exact path='/' element={<Main />} />
      </Routes>
    </>
  )
}

export default App
