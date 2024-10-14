import { useContext, useEffect, useState } from 'react'
import './FilterInput.css'
import { CountriesContext } from '../../Context/Context'

export const FilterInput = ()=>{

    const { countries , setFilteredRegion , setSearchedCountry , regionSelected , setRegionSelected} = useContext(CountriesContext)

    const regions = [... new Set(countries.map(eachCountry => eachCountry.region))]

    const handleSelect = (e) =>{
        setSearchedCountry('')
        setFilteredRegion(e.target.value)
        setRegionSelected(e.target.value)
    }

    return(
        <>
        <form className="Filter-form">
            <select value={regionSelected} onChange={handleSelect} className='Filter-input' name="regions" id="regions">
                <option>Filter by region</option>
                {regions.map(eachRegion => 
                    <option key={eachRegion} value={eachRegion}>{eachRegion}</option>
                )}
            </select>
        </form>
        </>
    )
}