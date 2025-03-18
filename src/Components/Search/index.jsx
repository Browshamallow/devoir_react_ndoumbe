import React, { useState, useEffect } from 'react';
import './search.css'
function Search() {
 

    return (
        <>
        <div className="search">
            <input type="text" placeholder="Search" />
            <select name="categories" id="categories">
            <option value="boutique">Boutique</option>
            <option value="luxury">Luxury</option>
            <option value="budget">Budget</option>
            <option value="resort">Resort</option>
            </select>


        
            <button>Search</button>
        </div>
        </>
    )
}

export default Search;