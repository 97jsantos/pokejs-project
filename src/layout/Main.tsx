import { useState, useEffect } from "react";
import { PokeCard } from "../components/PokeCard";

import { TiArrowBack, TiArrowForward } from 'react-icons/ti'
import { PokeCardSide } from "../components/PokeCardSide";

export function Main() {

    const [ pokemonLeft, setPokemonLeft ] = useState([] as any)

    const [ pokemonCenter, setPokemonCenter ] = useState([] as any)

    const [ pokemonRight, setPokemonRight ] = useState([] as any)

    const [ pokemonIdLeft, setPokemonIdLeft ] = useState(151)

    const [ pokemonIdCenter, setPokemonIdCenter ] = useState(1)

    const [ pokemonIdRight, setPokemonIdRight ] = useState(2)

    useEffect(() => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdLeft}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json()) 
        .then((data) => {
            setPokemonLeft([data])
        })
        .catch((err) => console.log(err))
    }, [pokemonIdLeft])

    useEffect(() => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdCenter}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json()) 
        .then((data) => {
            setPokemonCenter([data])
            console.log(data.forms[0].name)
        })
        .catch((err) => console.log(err))
    }, [pokemonIdCenter])

    useEffect(() => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdRight}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json()) 
        .then((data) => {
            setPokemonRight([data])
        })
        .catch((err) => console.log(err))
    }, [pokemonIdRight])

    function handleClickPrev() {
        if (pokemonIdLeft === 1) {
            setPokemonIdLeft(pokemonIdLeft + 150)
        } else {
            setPokemonIdLeft(pokemonIdLeft - 1)
        }

        if (pokemonIdCenter === 1) {
            setPokemonIdCenter(pokemonIdCenter + 150)
        } else {
            setPokemonIdCenter(pokemonIdCenter - 1)
        }

        if (pokemonIdRight === 1) {
            setPokemonIdRight(pokemonIdRight + 150)
        } else {
            setPokemonIdRight(pokemonIdRight - 1)
        }
    }

    function handleClickNext() {
        if (pokemonIdLeft === 151) {
            setPokemonIdLeft(pokemonIdLeft - 150)
        } else {
            setPokemonIdLeft(pokemonIdLeft + 1)
        }

        if (pokemonIdCenter === 151) {
            setPokemonIdCenter(pokemonIdCenter - 150)
        } else {
            setPokemonIdCenter(pokemonIdCenter + 1)
        }

        if (pokemonIdRight === 151) {
            setPokemonIdRight(pokemonIdRight - 150)
        } else {
            setPokemonIdRight(pokemonIdRight + 1)
        }
    }
    
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-7xl w-full h-screen flex justify-center items-center bg-white" style={{backgroundImage: `url("../src/assets/container_bg.png")`}}>
                <button 
                onClick={handleClickPrev}>
                    <TiArrowForward className="text-8xl text-zinc-400 rotate-[225deg]" />
                </button>
                {pokemonLeft.length > 0 && (
                    pokemonLeft.map((pokemon: any) => (
                        <PokeCardSide
                        name={pokemon.forms[0].name}
                        weight={pokemon.weight / 10}
                        id={pokemon.id}
                        type1={pokemon.types[0].type.name}
                        type2={pokemon.types.length === 2 ? pokemon.types[1].type.name : ''}
                        hp={pokemon.stats[0].base_stat}
                        attack={pokemon.stats[1].base_stat}
                        defense={pokemon.stats[2].base_stat}
                        specialAttack={pokemon.stats[3].base_stat}
                        specialDefense={pokemon.stats[4].base_stat}
                        speed={pokemon.stats[5].base_stat}
                        key={pokemon.id} />
                    ))
                )}
                {pokemonCenter.length > 0 && (
                    pokemonCenter.map((pokemon: any) => (
                        <PokeCard
                        name={pokemon.forms[0].name}
                        weight={pokemon.weight / 10}
                        id={pokemon.id}
                        type1={pokemon.types[0].type.name}
                        type2={pokemon.types.length === 2 ? pokemon.types[1].type.name : ''}
                        hp={pokemon.stats[0].base_stat}
                        attack={pokemon.stats[1].base_stat}
                        defense={pokemon.stats[2].base_stat}
                        specialAttack={pokemon.stats[3].base_stat}
                        specialDefense={pokemon.stats[4].base_stat}
                        speed={pokemon.stats[5].base_stat}
                        key={pokemon.id} />
                    ))
                )}
                {pokemonRight.length > 0 && (
                    pokemonRight.map((pokemon: any) => (
                        <PokeCardSide
                        name={pokemon.forms[0].name}
                        weight={pokemon.weight / 10}
                        id={pokemon.id}
                        type1={pokemon.types[0].type.name}
                        type2={pokemon.types.length === 2 ? pokemon.types[1].type.name : ''}
                        hp={pokemon.stats[0].base_stat}
                        attack={pokemon.stats[1].base_stat}
                        defense={pokemon.stats[2].base_stat}
                        specialAttack={pokemon.stats[3].base_stat}
                        specialDefense={pokemon.stats[4].base_stat}
                        speed={pokemon.stats[5].base_stat}
                        key={pokemon.id} />
                    ))
                )}
                <button 
                onClick={handleClickNext}>
                    <TiArrowBack className="text-8xl text-zinc-400 rotate-[135deg]" />
                </button>
            </div>
        </div>
    )
}