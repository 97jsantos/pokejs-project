import { useState, useEffect } from "react";
import { PokeCard } from "../components/PokeCard";

import { CgPokemon } from 'react-icons/cg'
import { SelectRegion } from "../components/SelectRegion";
import { SelectType } from "../components/SelectType";
import { Pagination } from "../components/Pagination";

export function Pokedex() {

    const [ pokemon, setPokemon ] = useState([] as any)

    const [ currentPage, setCurrentPage ] = useState(0)

    const cardsPerPage = 20

    const startIndex = currentPage  * cardsPerPage

    const endIndex = startIndex + cardsPerPage

    const totalPages = Math.ceil(pokemon.length / cardsPerPage)

    const currentPokemon = pokemon.slice(startIndex, endIndex)

    const [ regionSelected, setRegionSelected ] = useState('Todas')

    const [ typeSelected, setTypeSelected ] = useState('Todos')

    const [ pokeNumber, setPokeNumber ] = useState(0)

    const [ pokeName, setPokeName ] = useState('' as string)

    useEffect(() => {
        
        fetch(`https://pokejs-api.herokuapp.com/pokemons`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json()) 
        .then((data) => {

            if (data.map((pokemons:any) => pokemons.id).includes(pokeNumber)) {
                setPokemon(data.filter((pokemons: any) => pokemons.id == pokeNumber))
            } else if (data.map((pokemons:any) => pokemons.name).includes(pokeName)) {
                setPokemon(data.filter((pokemons: any) => pokemons.name == pokeName))
            } else {
                if (regionSelected === "Todas" && typeSelected === "Todos") {
                    setPokemon(data)
                } else if (regionSelected !== "Todas" && typeSelected === "Todos") {
                    setPokemon(data.filter((pokemons:any) => pokemons.region === regionSelected))
                } else if (regionSelected === "Todas" && typeSelected !== "Todos") {
                    setPokemon(data.filter((pokemons:any) => pokemons.type1 === typeSelected || pokemons.type2 === typeSelected))
                } else if (regionSelected !== "Todas" && typeSelected !== "Todos") {
                    setPokemon(data.filter((pokemons:any) => pokemons.region === regionSelected && (pokemons.type1 === typeSelected || pokemons.type2 === typeSelected)))
                }  
            }
        })
        .catch((err) => console.log(err))
    },[regionSelected, typeSelected, pokeNumber, pokeName])

    function prevPage() {
        setCurrentPage(currentPage - 1)
    }

    function nextPage() {
        setCurrentPage(currentPage + 1)
    }

    function clickPage(event: any) {
        setCurrentPage(Number(event.target.value))
    }

    function regionChange(event: any) {
        setRegionSelected(event.target.value)
        setCurrentPage(0)
    }

    function typeChange(event: any) {
        setTypeSelected(event.target.value)
        setCurrentPage(0)
    }

    function handleChange(event: any) {
        setPokeNumber(Number(event.target.value))
        setPokeName(event.target.value.length > 0 && event.target.value[0].toUpperCase() + event.target.value.substring(1).toLowerCase())
        setRegionSelected('Todas')
        setTypeSelected('Todos')
    }
    
    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-around max-w-screen-xl w-full bg-white" style={{backgroundImage: `url("../src/assets/container_bg.png")`}}>
                <div className="w-full flex justify-end items-center bg-zinc-100 h-11">
                    <form onChange={handleChange} className="w-96 px-1 h-8 border-2 border-zinc-700 bg-white rounded-lg flex items-center justify-between mr-5">
                        <input className="rounded-md outline-none w-full px-2" placeholder="Busque pelo número ou nome do Pokémon" type="text" />
                        <button type="submit">
                            <CgPokemon className="text-2xl" />
                        </button>
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
                        prevPage={prevPage}
                        nextPage={nextPage}
                        clickPage={clickPage} />
                        <div className="flex flex-wrap justify-center items-center">
                            {pokemon.length > 0 && (
                                currentPokemon.map((pokemon: any) => (
                                    <PokeCard
                                    name={pokemon.name}
                                    weight={pokemon.weight}
                                    id={pokemon.id}
                                    type1={pokemon.type1}
                                    type2={pokemon.type2}
                                    hp={pokemon.hp}
                                    attack={pokemon.attack}
                                    defense={pokemon.defense}
                                    specialAttack={pokemon.specialAttack}
                                    specialDefense={pokemon.specialDefense}
                                    speed={pokemon.speed}
                                    key={pokemon.id} />
                                ))
                            )}
                        </div>
                        <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        clickPage={clickPage} />
                    </div>
                </div>
            </div>
        </div>
    )
}