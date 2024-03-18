import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Shop from './pages/shop/Shop'
import MyNavbar from './components/MyNavbar'
import Footerzz from './components/Footerzz'

function App() {

  return (
    <>
      <MyNavbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/menu' element={<Shop/>}/>
      </Routes>
      <Footerzz/>
    </>
  )
}

export default App
