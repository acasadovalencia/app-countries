import { useNavigate } from 'react-router-dom'
import './Header.css'
import { BtnTheme } from '../BtnTheme/BtnTheme'

export const Header = ()=>{

    const navigateIndex = useNavigate()

    return(
        <>
        <header className="Header">
            <div className="Header-wrapper">
                <h1 onClick={()=>navigateIndex('/')} className="Header-h1">Where in the world?</h1>
                <BtnTheme/>
            </div>
        </header>
        </>
    )
}