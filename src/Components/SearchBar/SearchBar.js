import React, { useState } from 'react'

export default function SearchBar() {

    const [heroes, setHeroes] = useState();
    const [search, setSearch] = useState('');

    const buscadorFiltrado = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    const results = !search ? heroes : heroes.filter

    return (

        <div className='SearchbarMainContainer'>
            <input
                placeholder='Buscar'
                onChange={buscadorFiltrado}
                value={search}
                type="text"

            />

        </div>
    )
}
