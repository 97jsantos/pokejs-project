import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Pokemon() {

    const [ pokemon, setPokemon ] = useState([] as any)

    const {id} = useParams()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json'
            },          
        })
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon({["name"]:data.name[0].toUpperCase() + data.name.substring(1).toLowerCase(),
                ["id"]: data.id,
                ["height"]: data.height,
                ["weight"]: data.weight / 10,
                ["type1"]: data.types[0].type.name,
                ["type2"]: data.types[1].type.name,
                ["hp"]: data.stats[0].base_stat,
                ["attack"]: data.stats[1].base_stat,
                ["defense"]: data.stats[2].base_stat,
                ["specialAttack"]: data.stats[3].base_stat,
                ["specialDefense"]: data.stats[4].base_stat,
                ["speed"]: data.stats[5].base_stat,
            })
                console.log({["name"]:data.name[0].toUpperCase() + data.name.substring(1).toLowerCase(),
                ["id"]: data.id,
                ["height"]: data.height,
                ["weight"]: data.weight / 10,
                ["type1"]: data.types[0].type.name,
                ["type2"]: data.types[1].type.name,
                ["hp"]: data.stats[0].base_stat,
                ["attack"]: data.stats[1].base_stat,
                ["defense"]: data.stats[2].base_stat,
                ["specialAttack"]: data.stats[3].base_stat,
                ["specialDefense"]: data.stats[4].base_stat,
                ["speed"]: data.stats[5].base_stat,
            })
            })
            .catch((err) => console.log(err))
    },[])

    return (
        <div className="flex justify-center">
            <div className="flex justify-center max-w-screen-xl w-full bg-white" style={{backgroundImage: `url("../src/assets/container_bg.png")`}}>
                <div className="max-w-4xl w-full h-screen bg-white">
                    <div className="flex justify-center gap-4 my-5">
                        <p className="text-4xl">{pokemon.name}</p>
                        <p className="text-4xl text-zinc-500">Nº {pokemon.id}</p>
                    </div>
                    <div className="flex">
                        <img className="bg-zinc-100" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
                        <div className="flex justify-center w-full">
                            <p className="mr-8">{pokemon.type1}</p>
                            <p className="ml-8">{pokemon.type2}</p>
                        </div>
                        <div>
                            <p>{pokemon.height} M</p>
                            <p>{pokemon.weight} Kg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}