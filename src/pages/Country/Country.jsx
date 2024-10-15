import { useContext } from 'react'
import './Country.css'
import { CountriesContext } from '../../Context/Context'

export const Country = ()=>{

    const { countries , selectedCountry } = useContext(CountriesContext)

    let countryData

    if(selectedCountry){
        countryData = countries.find(country => country.name.common == selectedCountry)
    }

    return(
        <>
        <div>{countryData.name.common}</div>
        </>
    )
}