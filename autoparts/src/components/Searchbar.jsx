const Searchbar=({ handleSearch})=>{
    return (
        <div className="searchbar">
            <input type="text" placeholder=" Add More items..." 
            onKeyDown={handleSearch}/>
            <button className="search-button">Add</button>
        </div>
    );
}
export default Searchbar;