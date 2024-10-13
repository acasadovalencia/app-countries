import { useContext, useEffect } from 'react'
import './FilterInput.css'
import { CountriesContext } from '../../Context/Context'

export const FilterInput = ()=>{

    const { countries } = useContext(CountriesContext)

    const regions = [... new Set(countries.map(eachCountry => eachCountry.region))]


    return(
        <>
        <form className="Filter-form">
            <select className='Filter-input' name="regions" id="regions">
                <option value="">Filter by region</option>
                {regions.map(eachRegion => 
                    <option value={eachRegion}>{eachRegion}</option>
                )}
            </select>
        </form>
        </>
    )
}