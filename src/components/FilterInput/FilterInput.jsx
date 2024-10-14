import { useContext, useEffect } from 'react'
import './FilterInput.css'
import { CountriesContext } from '../../Context/Context'

export const FilterInput = ()=>{

    const { countries , setFilteredRegion } = useContext(CountriesContext)

    const regions = [... new Set(countries.map(eachCountry => eachCountry.region))]

    const handleSelect = (e) =>{
        setFilteredRegion(e.target.value)
    }

    return(
        <>
        <form className="Filter-form">
            <select onChange={handleSelect} className='Filter-input' name="regions" id="regions">
                <option value="">Filter by region</option>
                {regions.map(eachRegion => 
                    <option key={eachRegion} value={eachRegion}>{eachRegion}</option>
                )}
            </select>
        </form>
        </>
    )
}