import './CountryLi.css'
import { CountriesContext } from '../../Context/Context'
import { useContext } from 'react'


export const CountryLi = ()=>{

    const {countries} = useContext(CountriesContext)

    return(
        <>
        {countries.length != 0 && countries.slice( 0 , 8).map( eachCountry => 
                    <li key={eachCountry.ccn3} className='Countries-li'>
                        <picture className="Countries-picture">
                            <img src={eachCountry.flags.svg} alt="" className="Countries-img" loading='lazy' />
                        </picture>
                        <div className="Country-wrapper">
                            <h2 className="Country-h2">{eachCountry.name.common}</h2>
                            <ul className="Country-ul">
                                <li className="Country-li">
                                    <div className="Details-wrapper">
                                        <h3 className="Country-h3">Population:</h3>
                                        <span className="Country-span">{eachCountry.population}</span>
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
                )}
        </>
    )
}