import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './pages/Main/Main'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { CountriesContext } from './Context/Context'
import { useEffect, useState , useRef} from 'react'
import { Country } from './pages/Country/Country'

function App() {

  const searchForm = useRef()

  const [ countries , setCountries] = useState([])

  const [ filteredRegion , setFilteredRegion ] = useState('')

  const [ regionSelected , setRegionSelected ] = useState('')

  const [ searchedCountry , setSearchedCountry] = useState('')

  const [ selectedCountry , setSelectedCountry ] = useState('')

  const [ enableDarkMode , setEnableDarkMode] = useState(false)
    
    const getCountries = async ()=>{
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal,
        }

        await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,population,borders,flags' , options)
        .then(res => res.json())
        .then( data => setCountries(data))
        .catch(err => console.log(err.message))
        .finally(()=>controller.abort())
    }

    useEffect( ()=>{
        getCountries()
    }, [])

  return (
    <CountriesContext.Provider value={{getCountries , countries , setCountries , filteredRegion , setFilteredRegion , searchForm , searchedCountry , setSearchedCountry , regionSelected , setRegionSelected , selectedCountry , setSelectedCountry , enableDarkMode , setEnableDarkMode}}>
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path={`/:selectedCountry`} element={<Country/>}/>
        </Routes>
      </BrowserRouter>
    </>
    </CountriesContext.Provider>
  )
}

export default App
