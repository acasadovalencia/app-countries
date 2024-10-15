import { useContext } from 'react'
import './Country.css'
import { CountriesContext } from '../../Context/Context'
import { BtnBack } from '../../components/BtnBack/BtnBack'

export const Country = ()=>{

    const { countries , selectedCountry } = useContext(CountriesContext)

    let countryData
    let nativeName
    let currency 
    let languages

    if(selectedCountry){
        countryData = countries.find(country => country.name.common == selectedCountry)
        if(countryData){
            nativeName = Object.values(countryData.name.nativeName)[0]
            currency = Object.values(countryData.currencies)[0]
            languages = Object.values(countryData.languages)    
        }
    }


    return(
        <>
        <BtnBack/>
        <article className="Article Country">
            <div className="Article-wrapper">
                <picture className="Country-picture">
                        <img src={countryData.flags.svg} alt={`Flag from ${countryData.name.common}`} className="Country-img" />
                </picture>
                <div className="Info-wrapper">
                    <h2 className="Country-h2">{countryData.name.common}</h2>
                    <div className="Details-wrapper">
                        <ul className="Location-ul">
                            <li className="Location-li"><span className="Title-span">Native name: </span>{nativeName.common}</li>
                            <li className="Location-li"><span className="Title-span">Population: </span>{countryData.population.toLocaleString('es-ES')}</li>
                            <li className="Location-li"><span className="Title-span">Region: </span>{countryData.region}</li>
                            <li className="Location-li"><span className="Title-span">Region: </span>{countryData.subregion}</li>
                            <li className="Location-li"><span className="Title-span">Capital: </span>{countryData.capital}</li>
                        </ul>
                        <ul className="Global-ul">
                            <li className="Global-li"><span className="Title-span">Top level domain: </span>{countryData.tld}</li>
                            <li className="Global-li"><span className="Title-span">Currencies: </span>{currency.name}</li>
                            <li className="Global-li"><span className="Title-span">Languages: </span>{languages.map(eachLanguage => 
                                <span key={eachLanguage} className="Languages-span">{eachLanguage}</span>
                            )}</li>
                        </ul>
                    </div>
                    <div className="Borders-wrapper">
                        <h3 className="Borders-h3">Border Countries:</h3>
                        <ul className="Borders-ul">
                            {countryData && countryData.borders && countryData.borders.length > 0 ? countryData.borders.map(eachBorder => 
                                <li className="Borders-li">{eachBorder}</li>
                            ) : <li className="Borders-li">None</li> }
                                
                        </ul>
                    </div>
                </div>
            </div>
        </article>
        </>
    )
}