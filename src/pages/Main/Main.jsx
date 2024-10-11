import { useEffect, useState } from 'react'
import { SearchInput } from '../../components/SearchInput/SearchInput'
import './Main.css'

export const Main = ()=>{

    const [ countries , setCountries] = useState([])
    
    const getCountries = async ()=>{
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal,
        }

        await fetch('https://restcountries.com/v3.1/all' , options)
        .then(res => res.json())
        .then( data => setCountries(data))
        .catch(err => console.log(err.message))
        .finally(()=>controller.abort())
    }

    useEffect( ()=>{
        getCountries()
    }, [])

    return(
        <>
        <main className="Main">
            <SearchInput/>
        </main>
        </>
    )
}