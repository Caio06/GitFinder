type SearchProps = {
    loadUser: (userName:string) => Promise<void>;
};

import {useState, KeyboardEvent } from "react";

import { FaSearch } from "react-icons/fa";

import classes from "./search.module.css";

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) =>  {
        if (e.key === "Enter") {
            loadUser(userName);
        }
    };
    
    return (
        <div className = {classes.search}>
            <h2> Busque por um Usuário</h2>
            <p> Conheça seus melhores repositórios</p>
            <div className={ classes.search_container}> 
                < input type = "text" placeholder = "Digite o nome do usuário" onChange={(e) =>  setUserName(e.target.value)}
                onKeyDown={handleKeyDown} 
                />
                <button onClick={() => loadUser(userName)}>
                    <FaSearch />
                </button>
            </div>
        </div>
    )
}




export default Search

