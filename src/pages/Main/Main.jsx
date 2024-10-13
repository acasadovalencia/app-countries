import { SearchInput } from '../../components/SearchInput/SearchInput'
import './Main.css'
import { CountriesList } from '../../components/CountriesList/CountriesList'
import { FilterInput } from '../../components/FilterInput/FilterInput'

export const Main = ()=>{


    return(
        <>
        <main className="Main">
            <div className="Inputs-wrapper">
                <SearchInput/>
                <FilterInput/>
            </div>
            <CountriesList/>
        </main>
        </>
    )
}