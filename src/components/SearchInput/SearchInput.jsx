import './SearchInput.css'
import { CountriesContext } from '../../Context/Context'
import { useContext } from 'react'

export const SearchInput = ()=>{

    const { setSearchedCountry , searchForm , regionSelected , setRegionSelected } = useContext(CountriesContext)
    
    const { current: searchInput } = searchForm

    const searchHandler = (e)=>{
        e.preventDefault()
        const country = searchInput.value
        setSearchedCountry(country)
        searchInput.value = ''
        setRegionSelected('')
    }

    return(
        <>
        <form  onSubmit={searchHandler} className="Search-form">
            <div className="Input-wrapper">
            <svg className='Input-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <input ref={searchForm} type="text" className="Country-input" placeholder='Search for a country...' />
            </div>
        </form>
        </>
    )
}