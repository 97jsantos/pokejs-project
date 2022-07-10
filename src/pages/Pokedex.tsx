import { useState, useEffect } from "react";
import { PokeCard } from "../components/PokeCard";

import { CgPokemon } from 'react-icons/cg'
import { SelectRegion } from "../components/SelectRegion";
import { SelectType } from "../components/SelectType";
import { Pagination } from "../components/Pagination";

export function Pokedex() {

    const [ pokemon, setPokemon ] = useState([] as any)

    const [ currentPage, setCurrentPage ] = useState(1)

    const cardsPerPage = 20

    const startIndex = (currentPage - 1)  * cardsPerPage

    const endIndex = startIndex + cardsPerPage

    const totalPages = Math.ceil(pokemon.length / cardsPerPage)

    const currentPokemon = pokemon.slice(startIndex, endIndex)

    const [ regionSelected, setRegionSelected ] = useState('Todas')

    const [ typeSelected, setTypeSelected ] = useState('Todos')

    const [ pokeNumber, setPokeNumber ] = useState(0)

    const [ pokeName, setPokeName ] = useState('' as string)

    useEffect(() => {
        
        fetch(`https://pokejs-api.herokuapp.com/pokemons/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json()) 
        .then((data) => {
            if (data.map((pokemons:any) => pokemons.id).includes(pokeNumber)) {
                setPokemon(data.filter((pokemons: any) => pokemons.id == pokeNumber))
            } else if (data.filter((pokemons:any) => pokemons.name.includes(pokeName)) && pokeName.length > 0) {
                setPokemon(data.filter((pokemons:any) => pokemons.name.includes(pokeName)))
            } else {
                if (regionSelected === "Todas" && typeSelected === "Todos") {
                    setPokemon(data)
                } else if (regionSelected !== "Todas" && typeSelected === "Todos") {
                    setPokemon(data.filter((pokemons:any) => pokemons.region === regionSelected))
                } else if (regionSelected === "Todas" && typeSelected !== "Todos") {
                    setPokemon(data.filter((pokemons:any) => pokemons.types[0] === typeSelected || pokemons.types[1] === typeSelected))
                } else if (regionSelected !== "Todas" && typeSelected !== "Todos") {
                    setPokemon(data.filter((pokemons:any) => pokemons.region === regionSelected && (pokemons.types[0] === typeSelected || pokemons.types[1] === typeSelected)))
                }  
            }
        })
        .catch((err) => console.log(err))
    },[regionSelected, typeSelected, pokeNumber, pokeName])

    function toFirstPage() {
        setCurrentPage(1)
    }

    function toPrevPage() {
        setCurrentPage(currentPage - 1)
    }

    function toNextPage() {
        setCurrentPage(currentPage + 1)
    }

    function toLastPage() {
        setCurrentPage(totalPages)
    }

    function clickPage(event: any) {
        setCurrentPage(Number(event.target.value))
    }

    function regionChange(event: any) {
        setRegionSelected(event.target.value)
        setCurrentPage(1)
    }

    function typeChange(event: any) {
        setTypeSelected(event.target.value)
        setCurrentPage(1)
    }

    function handleChange(event: any) {
        setPokeNumber(Number(event.target.value))
        setPokeName(event.target.value.length > 0 && event.target.value)
        setRegionSelected('Todas')
        setTypeSelected('Todos')
        setCurrentPage(1)
    }
    
    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-around max-w-screen-xl w-full bg-white" style={{backgroundImage: `url("../src/assets/container_bg.png")`}}>
                <div className="w-full flex justify-end items-center bg-zinc-100 h-11">
                    <form onChange={handleChange} className="w-96 px-1 h-8 border-2 border-zinc-700 bg-white rounded-lg flex items-center justify-between mr-5">
                        <input className="rounded-md outline-none w-full px-2" placeholder="Busque pelo número ou nome do Pokémon" type="text" />
                        <CgPokemon className="text-2xl" />
                    </form>
                </div>
                <div className="flex justify-around">
                    <div className="w-64 flex justify-center items-start">
                        <div className="flex justify-center items-start bg-white px-5 py-5 mt-5 shadow-lg rounded-md">
                            <SelectRegion
                            regionChange={regionChange}
                            regionSelected={regionSelected}
                            disabled={pokeNumber != 0 || pokeName != ''} />
                            <SelectType
                            typeChange={typeChange}
                            typeSelected={typeSelected}
                            disabled={pokeNumber != 0 || pokeName != ''} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between max-w-5xl w-full">
                        <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        toFirstPage={toFirstPage}
                        toPrevPage={toPrevPage}
                        toNextPage={toNextPage}
                        toLastPage={toLastPage}
                        clickPage={clickPage} />
                        <div className="flex flex-wrap justify-center items-center bg-white">
                            {pokemon.length > 0 && (
                                currentPokemon.map((pokemon: any) => (
                                    <PokeCard
                                    name={pokemon.name}
                                    id={pokemon.id}
                                    type1={pokemon.types[0]}
                                    type2={pokemon.types[1]}
                                    hp={pokemon.stats.hp}
                                    attack={pokemon.stats.attack}
                                    defense={pokemon.stats.defense}
                                    specialAttack={pokemon.stats.specialAttack}
                                    specialDefense={pokemon.stats.specialDefense}
                                    speed={pokemon.stats.speed}
                                    key={pokemon.id} />
                                ))
                            )}
                        </div>
                        <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        toFirstPage={toFirstPage}
                        toPrevPage={toPrevPage}
                        toNextPage={toNextPage}
                        toLastPage={toLastPage}
                        clickPage={clickPage} />
                    </div>
                </div>
            </div>
        </div>
    )
}