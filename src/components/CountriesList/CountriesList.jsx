import './CountriesList.css'
import { CountryLi } from '../CountryLi/CountryLi'

export const CountriesList = (props) =>{

    const {countries} = props


    return(
        <>
        <section className="Section-countries">
            <ul className="Countries-ul">
                {countries.length == 0 && <li className='Countries-li'>No countries loaded</li>}
                <CountryLi countries={countries}/>
            </ul>
        </section>
        </>
    )
}