import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './pages/Main/Main'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { CountriesContext } from './Context/Context'
import { useEffect, useState } from 'react'


function App() {

  const [ countries , setCountries] = useState([])
    
    const getCountries = async ()=>{
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal,
        }

        await fetch('https://restcountries.com/v3.1/all' , options)
        .then(res => res.json())
        .then( data => setCountries(data))
        .catch(err => console.log(err.message))
        .finally(()=>controller.abort())
    }

    useEffect( ()=>{
        getCountries()
    }, [])

  return (
    <CountriesContext.Provider value={{ countries , setCountries}}>
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
    </CountriesContext.Provider>
  )
}

export default App
