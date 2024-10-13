import './CountryLi.css'

export const CountryLi = (props)=>{

    const {countries} = props

    return(
        <>
        {countries.length != 0 && countries.slice( 0 , 10).map( eachCountry => 
                    <li key={eachCountry.cnn3}>
                        <picture className="Countries-picture">
                            <img src={eachCountry.flags.svg} alt="" className="Countries-img" />
                        </picture>
                        <h2 className="Countries-h2">{eachCountry.name.common}</h2>
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
                    </li>
                )}
        </>
    )
}