import { useContext } from 'react'
import './FilterInput.css'
import { CountriesContext } from '../../Context/Context'

export const FilterInput = ()=>{

    const { countries , setFilteredRegion , setSearchedCountry , regionSelected , setRegionSelected} = useContext(CountriesContext)

    const regions = [... new Set(countries.map(eachCountry => eachCountry.region))]

    const handleSelect = (e) =>{
        setSearchedCountry('')
        setFilteredRegion(e.target.value)
        setRegionSelected(e.target.value)
        if(e.target.value == 'all'){
            setFilteredRegion(e.target.valiue == '')
        }
    }

    return(
        <>
        <form className="Filter-form">
            <select value={regionSelected} onChange={handleSelect} className='Filter-input' name="regions" id="regions">
                <option value="">Filter by region</option>
                {regions.map(eachRegion => 
                    <option key={eachRegion} value={eachRegion}>{eachRegion}</option>
                )}
                <option value="all">All</option>

            </select>
        </form>
        </>
    )
}