import './FilterInput.css'

export const FilterInput = ()=>{

    return(
        <>
        <form className="Filter-form">
            <select className='Filter-input' name="regions" id="regions">
                <option value="">Filter by region</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>

            </select>
        </form>
        </>
    )
}