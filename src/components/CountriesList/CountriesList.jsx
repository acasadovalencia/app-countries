import './CountriesList.css'
import { CountryLi } from '../CountryLi/CountryLi'
import { CountriesContext } from '../../Context/Context'
import { useContext } from 'react'

export const CountriesList = () =>{

    const {countries} = useContext(CountriesContext)

    return(
        <>
        <section className="Section-countries">
            <ul className="Countries-ul">
                {countries.length == 0 && <li className='Countries-li'>No countries loaded</li>}
                {countries.length != 0 && <CountryLi/>}
            </ul>
        </section>
        </>
    )
}