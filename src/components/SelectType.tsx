import { useEffect, useState } from "react"

interface SelectTypeProps {
    typeChange: any
    typeSelected: any
    disabled: any
}

export function SelectType({ typeChange, typeSelected, disabled }: SelectTypeProps) {
    
    const [ type, setType ] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/types/", {
            method: "GET",
            headers: {
                'Content-Type': 'application.json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setType(data)
            })
            .catch((err) => console.log(err))
    })

    return (

        <div className="flex justify-between items-center mt-3 px-1">
            <div className="flex flex-col" id="">
                <p className="text-center my-3 font-pokejs text-xl">Tipos</p>
                <button onClick={typeChange} disabled={disabled} className={`text-center mt-3 disabled:opacity-50 ${typeSelected === "Todos" && "text-yellow-500 underline underline-offset-1"}`} value="Todos">Todos</button>
                {type.map((types: any) => (
                    <button onClick={typeChange} disabled={disabled} className={`text-center mt-3 disabled:opacity-50 ${types.name === typeSelected && "text-yellow-500 underline underline-offset-1"}`} value={types.name} key={types.id}>
                        {types.name === "normal" && "Normal" ||
                        types.name === "fire" && "Fogo" ||
                        types.name === "water" && "Água" ||
                        types.name === "electric" && "Elétrico" ||
                        types.name === "grass" && "Grama" ||
                        types.name === "ice" && "Gelo" ||
                        types.name === "fighting" && "Lutador" ||
                        types.name === "poison" && "Venenoso" ||
                        types.name === "ground" && "Terra" ||
                        types.name === "flying" && "Voador" ||
                        types.name === "psychic" && "Psíquico" ||
                        types.name === "bug" && "Inseto" ||
                        types.name === "rock" && "Pedra" ||
                        types.name === "ghost" && "Fantasma" ||
                        types.name === "dragon" && "Dragão" ||
                        types.name === "dark" && "Noturno" ||
                        types.name === "steel" && "Metal" ||
                        types.name === "fairy" && "Fada"}
                    </button>
                ))}
            </div>
        </div>
    )
}