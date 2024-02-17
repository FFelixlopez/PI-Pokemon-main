import {useState} from "react";

export default function SearchBar({onSearch}) {
    
    const [name, setName] = useState ("");
   const handleChange = (event) => {
        setName (event.target.value);
    }
    const handleSearch = ()=>{
        onSearch(name);
    }
    return (
        <div>
            <input type="search"  value={name} onChange={handleChange}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}