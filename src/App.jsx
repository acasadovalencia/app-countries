import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './pages/Main/Main'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
