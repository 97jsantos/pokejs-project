import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Pokemon() {

    const [ pokemon, setPokemon ] = useState([] as any)

    const {id} = useParams()

    useEffect(() => {
        fetch(`https://pokejs-api.herokuapp.com/pokemons/`, {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json'
            },          
        })
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon({
                    "name":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.name[0].toUpperCase() + pokemon.name.substring(1).toLowerCase()),
                    "id":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.id),
                    "type1":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.types[0]),
                    "type2":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.types[1]),
                    "height":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.height),
                    "weight":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.weight),
                    "ability1":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.abilities[0][0].toUpperCase() + pokemon.abilities[0].substring(1).toLowerCase()),
                    "ability2":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.abilities.length > 1 && pokemon.abilities[1][0].toUpperCase() + pokemon.abilities[1].substring(1).toLowerCase()),
                    "hp":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.stats.hp),
                    "attack":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.stats.attack),
                    "defense":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.stats.defense),
                    "specialAttack":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.stats.specialAttack),
                    "specialDefense":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.stats.specialDefense),
                    "speed":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.stats.speed),
                    "moves":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.moves),
                    "image":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.image),
                    "evolutions":data.filter((pokemon: any) => pokemon.id == id).map((pokemon: any) => pokemon.evolutions)})
            })
            .catch((err) => console.log(err))
    },[])

    return (
        <div className="flex justify-center">
            <div className="flex justify-center max-w-screen-xl w-full bg-white" style={{backgroundImage: `url("../src/assets/container_bg.png")`}}>
                <div className="max-w-4xl w-full bg-white">
                    <div className="flex justify-center gap-4 my-10">
                        <p className="text-4xl">{pokemon.name}</p>
                        <p className="text-4xl text-zinc-500">Nº {pokemon.id}</p>
                    </div>
                    <div className="flex justify-around w-full mb-20">
                        <img className="bg-zinc-100 w-96" src={pokemon.image} alt="" />
                        <div className="flex flex-col items-center justify-between w-96">
                            <div className="flex justify-between w-full my-5">
                                <p className={`w-40 h-8 flex justify-center items-center text-lg rounded-sm ${pokemon.type1 == "normal" && "bg-zinc-400 text-white" || 
                                    pokemon.type1 == "fire" && "bg-orange-600 text-white" || 
                                    pokemon.type1 == "water" && "bg-blue-500 text-white" ||
                                    pokemon.type1 == "electric" && "bg-yellow-300" ||
                                    pokemon.type1 == "grass" && "bg-green-400" ||
                                    pokemon.type1 == "ice" && "bg-blue-400" ||
                                    pokemon.type1 == "fighting" && "bg-orange-700 text-white" ||
                                    pokemon.type1 == "poison" && "bg-violet-400" ||
                                    pokemon.type1 == "ground" && "bg-yellow-500" ||
                                    pokemon.type1 == "flying" && "bg-blue-300" ||
                                    pokemon.type1 == "psychic" && "bg-pink-500 text-white" ||
                                    pokemon.type1 == "bug" && "bg-green-600 text-white" ||
                                    pokemon.type1 == "rock" && "bg-yellow-700 text-white" ||
                                    pokemon.type1 == "ghost" && "bg-violet-600 text-white" ||
                                    pokemon.type1 == "dragon" && "bg-orange-900 text-white" ||
                                    pokemon.type1 == "dark" && "bg-zinc-700 text-white" ||
                                    pokemon.type1 == "steel" && "bg-gray-600 text-white" ||
                                    pokemon.type1 == "fairy" && "bg-pink-300"}`}>
                                        {pokemon.type1 == "normal" && "Normal" ||
                                        pokemon.type1 == "fire" && "Fogo" ||
                                        pokemon.type1 == "water" && "Água" ||
                                        pokemon.type1 == "electric" && "Elétrico" ||
                                        pokemon.type1 == "grass" && "Grama" ||
                                        pokemon.type1 == "ice" && "Gelo" ||
                                        pokemon.type1 == "fighting" && "Lutador" ||
                                        pokemon.type1 == "poison" && "Venenoso" ||
                                        pokemon.type1 == "ground" && "Terra" ||
                                        pokemon.type1 == "flying" && "Voador" ||
                                        pokemon.type1 == "psychic" && "Psíquico" ||
                                        pokemon.type1 == "bug" && "Inseto" ||
                                        pokemon.type1 == "rock" && "Pedra" ||
                                        pokemon.type1 == "ghost" && "Fantasma" ||
                                        pokemon.type1 == "dragon" && "Dragão" ||
                                        pokemon.type1 == "dark" && "Noturno" ||
                                        pokemon.type1 == "steel" && "Metal" ||
                                        pokemon.type1 == "fairy" && "Fada"}</p>
                                <p className={`w-40 h-8 flex justify-center items-center text-lg rounded-sm ${pokemon.type2 == "normal" && "bg-zinc-400 text-white" || 
                                    pokemon.type2 == "fire" && "bg-orange-600 text-white" || 
                                    pokemon.type2 == "water" && "bg-blue-500 text-white" ||
                                    pokemon.type2 == "electric" && "bg-yellow-300" ||
                                    pokemon.type2 == "grass" && "bg-green-400" ||
                                    pokemon.type2 == "ice" && "bg-blue-400" ||
                                    pokemon.type2 == "fighting" && "bg-orange-700 text-white" ||
                                    pokemon.type2 == "poison" && "bg-violet-400" ||
                                    pokemon.type2 == "ground" && "bg-yellow-500" ||
                                    pokemon.type2 == "flying" && "bg-blue-300" ||
                                    pokemon.type2 == "psychic" && "bg-pink-500 text-white" ||
                                    pokemon.type2 == "bug" && "bg-green-600 text-white" ||
                                    pokemon.type2 == "rock" && "bg-yellow-700 text-white" ||
                                    pokemon.type2 == "ghost" && "bg-violet-600 text-white" ||
                                    pokemon.type2 == "dragon" && "bg-orange-900 text-white" ||
                                    pokemon.type2 == "dark" && "bg-zinc-700 text-white" ||
                                    pokemon.type2 == "steel" && "bg-gray-600 text-white" ||
                                    pokemon.type2 == "fairy" && "bg-pink-300"}`}>
                                        {pokemon.type2 == "normal" && "Normal" ||
                                        pokemon.type2 == "fire" && "Fogo" ||
                                        pokemon.type2 == "water" && "Água" ||
                                        pokemon.type2 == "electric" && "Elétrico" ||
                                        pokemon.type2 == "grass" && "Grama" ||
                                        pokemon.type2 == "ice" && "Gelo" ||
                                        pokemon.type2 == "fighting" && "Lutador" ||
                                        pokemon.type2 == "poison" && "Venenoso" ||
                                        pokemon.type2 == "ground" && "Terra" ||
                                        pokemon.type2 == "flying" && "Voador" ||
                                        pokemon.type2 == "psychic" && "Psíquico" ||
                                        pokemon.type2 == "bug" && "Inseto" ||
                                        pokemon.type2 == "rock" && "Pedra" ||
                                        pokemon.type2 == "ghost" && "Fantasma" ||
                                        pokemon.type2 == "dragon" && "Dragão" ||
                                        pokemon.type2 == "dark" && "Noturno" ||
                                        pokemon.type2 == "steel" && "Metal" ||
                                        pokemon.type2 == "fairy" && "Fada"}</p>
                            </div>
                            <div className="bg-blue-200 flex flex-col justify-around w-full h-64 py-5 rounded-tr-xl rounded-bl-xl">
                                <div className="flex justify-around w-full">
                                    <div className="flex flex-col w-28">
                                        <p className="flex justify-start text-xl">Altura:</p>
                                        <p className="flex justify-end text-lg">{pokemon.height} Metros</p>
                                    </div>
                                    <div className="flex flex-col w-28">
                                        <p className="flex justify-start text-xl">Peso:</p>
                                        <p className="flex justify-end text-lg">{pokemon.weight} Quilos</p>
                                    </div>
                                </div>
                                <div className="flex justify-around w-full">
                                    <div className="flex flex-col w-28">
                                        <p className="flex justify-start text-xl">Habilidades:</p>
                                        <p className="flex justify-end text-lg">{pokemon.ability1}</p>
                                    </div>
                                    <div className="flex flex-col w-28">
                                        <p className="flex justify-start text-xl text-blue-200">a</p>
                                        <p className="flex justify-end text-lg">{pokemon.ability2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around h-96 mb-20 mx-8 items-end bg-zinc-100'>
                        <div>
                            <p className='w-28 text-center'>{pokemon.hp}</p>
                            <div className={`w-28 flex items-end bg-blue-400 ${pokemon.hp >= 200 && "h-80" || pokemon.hp >= 150 && "h-60" || pokemon.hp >= 120 && "h-48" || pokemon.hp >= 100 && "h-40" || pokemon.hp >= 90 && "h-36" || pokemon.hp >= 80 && "h-32" || pokemon.hp >= 70 && "h-28" || pokemon.hp >= 60 && "h-24" || pokemon.hp >= 50 && "h-20" || pokemon.hp >= 40 && "h-16" || pokemon.hp >= 30 && "h-12" || pokemon.hp >= 20 && "h-8" || pokemon.hp >= 10 && "h-4" || pokemon.hp >= 1 && "h-1" || pokemon.hp === 0 && "h-0"} `}>
                            </div>
                            <p className='bg-zinc-100 w-full h-6 mt-1 flex justify-center items-center'>Vida</p>
                        </div>
                        <div>
                            <p className='w-28 text-center'>{pokemon.attack}</p>
                            <div className={`w-28 flex items-end bg-blue-400 ${pokemon.attack >= 200 && "h-80" || pokemon.attack >= 150 && "h-60" || pokemon.attack >= 120 && "h-48" || pokemon.attack >= 100 && "h-40" || pokemon.attack >= 90 && "h-36" || pokemon.attack >= 80 && "h-32" || pokemon.attack >= 70 && "h-28" || pokemon.attack >= 60 && "h-24" || pokemon.attack >= 50 && "h-20" || pokemon.attack >= 40 && "h-16" || pokemon.attack >= 30 && "h-12" || pokemon.attack >= 20 && "h-8" || pokemon.attack >= 10 && "h-4" || pokemon.attack >= 1 && "h-1" || pokemon.attack === 0 && "h-0"} `}>
                            </div>
                            <p className='bg-zinc-100 w-full h-6 mt-1 flex justify-center items-center'>Ataque Físico</p>
                        </div>
                        <div>
                            <p className='w-28 text-center'>{pokemon.defense}</p>
                            <div className={`w-28 flex items-end bg-blue-400 ${pokemon.defense >= 200 && "h-80" || pokemon.defense >= 150 && "h-60" || pokemon.defense >= 120 && "h-48" || pokemon.defense >= 100 && "h-40" || pokemon.defense >= 90 && "h-36" || pokemon.defense >= 80 && "h-32" || pokemon.defense >= 70 && "h-28" || pokemon.defense >= 60 && "h-24" || pokemon.defense >= 50 && "h-20" || pokemon.defense >= 40 && "h-16" || pokemon.defense >= 30 && "h-12" || pokemon.defense >= 20 && "h-8" || pokemon.defense >= 10 && "h-4" || pokemon.defense >= 1 && "h-1" || pokemon.defense === 0 && "h-0"} `}>
                            </div>
                            <p className='bg-zinc-100 w-full h-6 mt-1 flex justify-center items-center'>Defesa Física</p>
                        </div>
                        <div>
                            <p className='w-28 text-center'>{pokemon.specialAttack}</p>
                            <div className={`w-28 flex items-end bg-blue-400 ${pokemon.specialAttack >= 200 && "h-80" || pokemon.specialAttack >= 150 && "h-60" || pokemon.specialAttack >= 120 && "h-48" || pokemon.specialAttack >= 100 && "h-40" || pokemon.specialAttack >= 90 && "h-36" || pokemon.specialAttack >= 80 && "h-32" || pokemon.specialAttack >= 70 && "h-28" || pokemon.specialAttack >= 60 && "h-24" || pokemon.specialAttack >= 50 && "h-20" || pokemon.specialAttack >= 40 && "h-16" || pokemon.specialAttack >= 30 && "h-12" || pokemon.specialAttack >= 20 && "h-8" || pokemon.specialAttack >= 10 && "h-4" || pokemon.specialAttack >= 1 && "h-1" || pokemon.specialAttack === 0 && "h-0"} `}>
                            </div>
                            <p className='bg-zinc-100 w-full h-6 mt-1 flex justify-center items-center'>Ataque Especial</p>
                        </div>
                        <div>
                            <p className='w-28 text-center'>{pokemon.specialDefense}</p>
                            <div className={`w-28 flex items-end bg-blue-400 ${pokemon.specialDefense >= 200 && "h-80" || pokemon.specialDefense >= 150 && "h-60" || pokemon.specialDefense >= 120 && "h-48" || pokemon.specialDefense >= 100 && "h-40" || pokemon.specialDefense >= 90 && "h-36" || pokemon.specialDefense >= 80 && "h-32" || pokemon.specialDefense >= 70 && "h-28" || pokemon.specialDefense >= 60 && "h-24" || pokemon.specialDefense >= 50 && "h-20" || pokemon.specialDefense >= 40 && "h-16" || pokemon.specialDefense >= 30 && "h-12" || pokemon.specialDefense >= 20 && "h-8" || pokemon.specialDefense >= 10 && "h-4" || pokemon.specialDefense >= 1 && "h-1" || pokemon.specialDefense === 0 && "h-0"} `}>
                            </div>
                            <p className='bg-zinc-100 w-full h-6 mt-1 flex justify-center items-center'>Defesa Especial</p>
                        </div>
                        <div>
                            <p className='w-28 text-center'>{pokemon.speed}</p>
                            <div className={`w-28 flex items-end bg-blue-400 ${pokemon.speed >= 200 && "h-80" || pokemon.speed >= 150 && "h-60" || pokemon.speed >= 120 && "h-48" || pokemon.speed >= 100 && "h-40" || pokemon.speed >= 90 && "h-36" || pokemon.speed >= 80 && "h-32" || pokemon.speed >= 70 && "h-28" || pokemon.speed >= 60 && "h-24" || pokemon.speed >= 50 && "h-20" || pokemon.speed >= 40 && "h-16" || pokemon.speed >= 30 && "h-12" || pokemon.speed >= 20 && "h-8" || pokemon.speed >= 10 && "h-4" || pokemon.speed >= 1 && "h-1" || pokemon.speed === 0 && "h-0"} `}>
                            </div>
                            <p className='bg-zinc-100 w-full h-6 mt-1 flex justify-center items-center'>Velocidade</p>                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}