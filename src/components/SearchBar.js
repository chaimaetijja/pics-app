
import "../components/SearchBar.css";
const SearchBar = ({handleInputChange,term,handlButtonClick}) =>{
    const handleSubmit = (e) =>{
        e.preventDefault()
        handlButtonClick(term)
    }
    return(
            <div className="Search-bar">
                <form onSubmit={handleSubmit}>
                    <label>Enter something: </label>
                    <input id="myInput" type="text" label="Enter search term" value={term} onChange={handleInputChange}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
    )
}

export default SearchBar;