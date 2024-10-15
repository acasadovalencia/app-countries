import './CountryLi.css'
import { CountriesContext } from '../../Context/Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'


export const CountryLi = ()=>{

    const {countries , filteredRegion , searchedCountry , selectedCountry , setSelectedCountry } = useContext(CountriesContext)


    let filteredCountries    

        if(filteredRegion){
            filteredCountries = countries.filter(eachCountry => eachCountry.region === filteredRegion)
        } else {
            filteredCountries = countries
        }
        if(searchedCountry){
            filteredCountries = countries.filter(eachCountry => eachCountry.name.common.toLowerCase().includes(searchedCountry.toLowerCase()))
        }

    return(
        <>
        {filteredCountries.length == 0 && <li className='Empty-li'>No results... Try again!</li>}
        {filteredCountries.length != 0 && filteredCountries.map( eachCountry => 
                    <NavLink to={`/${eachCountry.name.common}`}>
                    <li key={eachCountry.cca3} className='Countries-li'>
                        <picture className="Countries-picture">
                            <img src={eachCountry.flags.svg} alt="" className="Countries-img" loading='lazy' />
                        </picture>
                        <div className="Country-wrapper">
                            <h2 className="Country-h2">{eachCountry.name.common}</h2>
                            <ul className="Country-ul">
                                <li className="Country-li">
                                    <div className="Details-wrapper">
                                        <h3 className="Country-h3">Population:</h3>
                                        <span className="Country-span">{eachCountry.population.toLocaleString('es-ES')}</span>
                                    </div>
                                </li>
                                <li className="Country-li">
                                    <div className="Details-wrapper">
                                        <h3 className="Country-h3">Region:</h3>
                                        <span className="Country-span">{eachCountry.region}</span>
                                    </div>
                                </li>
                                <li className="Country-li">
                                    <div className="Details-wrapper">
                                        <h3 className="Country-h3">Capital:</h3>
                                        <span className="Country-span">{eachCountry.capital}</span>
                                    </div>
                                </li>
                        </ul>
                        </div>
                        
                    </li>
                    </NavLink>
                )}
        </>
    )
}