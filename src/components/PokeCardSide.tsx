import { GiWeight, GiWizardStaff, GiBarefoot } from 'react-icons/gi'
import { IoMdStats } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import { RiSwordFill } from 'react-icons/ri'
import { BsShieldFill } from 'react-icons/bs'

interface PokeCardSideProps {
    name: any
    id: string
    weight: number
    type1: string
    type2: string
    hp: number
    speed: number
    attack: number
    specialAttack: number
    defense: number
    specialDefense: number
}

export function PokeCardSide({ name, id, weight, type1, type2, hp, speed, attack, specialAttack, defense, specialDefense  }:PokeCardSideProps) {
    return (
        <div className="h-96 w-64 bg-zinc-300 rounded-md flex flex-col justify-between scale-75 blur-[2px]">
            <div>
                <div className='absolute bg-white p-4 w-10 h-10 rounded-full border-2 border-zinc-300 -top-5 -left-5 flex justify-center items-center'><p>{id}</p></div>
                <div className="flex justify-around my-2">
                    <p>{name[0].toUpperCase() + name.substring(1)}</p>
                    <p className='flex gap-1 items-center'>{weight}<span><GiWeight /></span></p>
                    <p className='flex gap-1 items-center'>{hp + speed + attack + specialAttack + defense + specialDefense}<span><IoMdStats /></span></p>
                </div>
                <div className="flex justify-center">
                    <img className='w-48 h-48' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                </div>
                <div className="flex justify-around">
                    <p className={`w-24 flex justify-center rounded-sm
                    ${type1 === "normal" && "bg-zinc-400" || 
                    type1 === "fire" && "bg-orange-600" || 
                    type1 === "water" && "bg-blue-500" ||
                    type1 === "electric" && "bg-yellow-300" ||
                    type1 === "grass" && "bg-green-400" ||
                    type1 === "ice" && "bg-blue-400" ||
                    type1 === "fighting" && "bg-orange-700" ||
                    type1 === "poison" && "bg-violet-400" ||
                    type1 === "ground" && "bg-yellow-500" ||
                    type1 === "flying" && "bg-blue-300" ||
                    type1 === "psychic" && "bg-pink-500" ||
                    type1 === "bug" && "bg-green-600" ||
                    type1 === "rock" && "bg-yellow-700" ||
                    type1 === "ghost" && "bg-violet-600" ||
                    type1 === "dragon" && "bg-orange-900" ||
                    type1 === "dark" && "bg-zinc-700" ||
                    type1 === "steel" && "bg-gray-600" ||
                    type1 === "fairy" && "bg-pink-300"}
                    `}>{type1 === "normal" && "Normal" ||
                    type1 === "fire" && "Fogo" ||
                    type1 === "water" && "Água" ||
                    type1 === "electric" && "Elétrico" ||
                    type1 === "grass" && "Grama" ||
                    type1 === "ice" && "Gelo" ||
                    type1 === "fighting" && "Lutador" ||
                    type1 === "poison" && "Venenoso" ||
                    type1 === "ground" && "Terra" ||
                    type1 === "flying" && "Voador" ||
                    type1 === "psychic" && "Psíquico" ||
                    type1 === "bug" && "Inseto" ||
                    type1 === "rock" && "Pedra" ||
                    type1 === "ghost" && "Fantasma" ||
                    type1 === "dragon" && "Dragão" ||
                    type1 === "dark" && "Noturno" ||
                    type1 === "steel" && "Metal" ||
                    type1 === "fairy" && "Fada"}</p>
                    <p className={`w-24 flex justify-center rounded-sm
                    ${type2 === "normal" && "bg-zinc-400" || 
                    type2 === "fire" && "bg-orange-600" || 
                    type2 === "water" && "bg-blue-500" ||
                    type2 === "electric" && "bg-yellow-300" ||
                    type2 === "grass" && "bg-green-400" ||
                    type2 === "ice" && "bg-blue-400" ||
                    type2 === "fighting" && "bg-orange-700" ||
                    type2 === "poison" && "bg-violet-400" ||
                    type2 === "ground" && "bg-yellow-500" ||
                    type2 === "flying" && "bg-blue-300" ||
                    type2 === "psychic" && "bg-pink-500" ||
                    type2 === "bug" && "bg-green-600" ||
                    type2 === "rock" && "bg-yellow-700" ||
                    type2 === "ghost" && "bg-violet-600" ||
                    type2 === "dragon" && "bg-orange-900" ||
                    type2 === "dark" && "bg-zinc-700" ||
                    type2 === "steel" && "bg-gray-600" ||
                    type2 === "fairy" && "bg-pink-300"}
                    `}>{type2 === "normal" && "Normal" ||
                    type2 === "fire" && "Fogo" ||
                    type2 === "water" && "Água" ||
                    type2 === "electric" && "Elétrico" ||
                    type2 === "grass" && "Grama" ||
                    type2 === "ice" && "Gelo" ||
                    type2 === "fighting" && "Lutador" ||
                    type2 === "poison" && "Venenoso" ||
                    type2 === "ground" && "Terra" ||
                    type2 === "flying" && "Voador" ||
                    type2 === "psychic" && "Psíquico" ||
                    type2 === "bug" && "Inseto" ||
                    type2 === "rock" && "Pedra" ||
                    type2 === "ghost" && "Fantasma" ||
                    type2 === "dragon" && "Dragão" ||
                    type2 === "dark" && "Noturno" ||
                    type2 === "steel" && "Metal" ||
                    type2 === "fairy" && "Fada"}</p>
                </div>
            </div>
            <div className='h-full flex justify-around items-end my-2 mx-2'>
                <div>
                    <p className='w-7 text-center'>{hp}</p>
                    <div className={`w-7 flex items-end bg-blue-400 ${hp >= 200 && "h-16" || hp >= 150 && "h-14" || hp >= 120 && "h-12" || hp >= 100 && "h-11" || hp >= 90 && "h-10" || hp >= 80 && "h-9" || hp >= 70 && "h-8" || hp >= 60 && "h-7" || hp >= 50 && "h-6" || hp >= 40 && "h-5" || hp >= 30 && "h-4" || hp >= 20 && "h-3" || hp >= 10 && "h-2" || hp >= 1 && "h-1" || hp === 0 && "h-0"} `}>
                    </div>
                    <p className='bg-zinc-300 w-full h-6 flex justify-center items-center'><AiFillHeart className='text-red-600' /></p>
                </div>
                <div>
                    <p className='w-7 text-center'>{attack}</p>
                    <div className={`w-7 flex items-end bg-blue-400 ${attack >= 200 && "h-16" || attack >= 150 && "h-14" || attack >= 120 && "h-12" || attack >= 100 && "h-11" || attack >= 90 && "h-10" || attack >= 80 && "h-9" || hp >= 70 && "h-8" || hp >= 60 && "h-7" || hp >= 50 && "h-6" || hp >= 40 && "h-5" || attack >= 30 && "h-4" || attack >= 20 && "h-3" || attack >= 10 && "h-2" || attack >= 1 && "h-1" || attack === 0 && "h-0"} `}>
                    </div>
                    <p className='bg-zinc-300 w-full h-6 flex justify-center items-center'><RiSwordFill className='text-blue-700' /></p>
                </div>
                <div>
                    <p className='w-7 text-center'>{defense}</p>
                    <div className={`w-7 flex items-end bg-blue-400 ${defense >= 200 && "h-16" || defense >= 150 && "h-14" || defense >= 120 && "h-12" || defense >= 100 && "h-11" || defense >= 90 && "h-10" || defense >= 80 && "h-9" || defense >= 70 && "h-8" || defense >= 60 && "h-7" || defense >= 50 && "h-6" || defense >= 40 && "h-5" || defense >= 30 && "h-4" || defense >= 20 && "h-3" || defense >= 10 && "h-2" || defense >= 1 && "h-1" || defense === 0 && "h-0"} `}>
                    </div>
                    <p className='bg-zinc-300 w-full h-6 flex justify-center items-center'><BsShieldFill className='text-blue-700 h-3.5' /></p>
                </div>
                <div>
                    <p className='w-7 text-center'>{specialAttack}</p>
                    <div className={`w-7 flex items-end bg-blue-400 ${specialAttack >= 200 && "h-16" || specialAttack >= 150 && "h-14" || specialAttack >= 120 && "h-12" || specialAttack >= 100 && "h-11" || specialAttack >= 90 && "h-10" || specialAttack >= 80 && "h-9" || specialAttack >= 70 && "h-8" || specialAttack >= 60 && "h-7" || specialAttack >= 50 && "h-6" || specialAttack >= 40 && "h-5" || specialAttack >= 30 && "h-4" || specialAttack >= 20 && "h-3" || specialAttack >= 10 && "h-2" || specialAttack >= 1 && "h-1" || specialAttack === 0 && "h-0"} `}>
                    </div>
                    <p className='bg-zinc-300 w-full h-6 flex justify-center items-center'><GiWizardStaff
                    className='text-purple-700 h-3.5' /></p>
                </div>
                <div>
                    <p className='w-7 text-center'>{specialDefense}</p>
                    <div className={`w-7 flex items-end bg-blue-400 ${specialDefense >= 200 && "h-16" || specialDefense >= 150 && "h-14" || specialDefense >= 120 && "h-12" || specialDefense >= 100 && "h-11" || specialDefense >= 90 && "h-10" || specialDefense >= 80 && "h-9" || specialDefense >= 70 && "h-8" || specialDefense >= 60 && "h-7" || specialDefense >= 50 && "h-6" || specialDefense >= 40 && "h-5" || specialDefense >= 30 && "h-4" || specialDefense >= 20 && "h-3" || specialDefense >= 10 && "h-2" || specialDefense >= 1 && "h-1" || specialDefense === 0 && "h-0"} `}>
                    </div>
                    <p className='bg-zinc-300 w-full h-6 flex justify-center items-center'><BsShieldFill 
                    className='text-purple-700 h-3.5'/></p>
                </div>
                <div>
                    <p className='w-7 text-center'>{speed}</p>
                    <div className={`w-7 flex items-end bg-blue-400 ${speed >= 200 && "h-16" || speed >= 150 && "h-14" || speed >= 120 && "h-12" || speed >= 100 && "h-11" || speed >= 90 && "h-10" || speed >= 80 && "h-9" || speed >= 70 && "h-8" || speed >= 60 && "h-7" || speed >= 50 && "h-6" || speed >= 40 && "h-5" || speed >= 30 && "h-4" || speed >= 20 && "h-3" || speed >= 10 && "h-2" || speed >= 1 && "h-1" || speed === 0 && "h-0"} `}>
                    </div>
                    <p className='bg-zinc-300 w-full h-6 flex justify-center items-center'><GiBarefoot
                    className='text-orange-400 h-3.5' /></p>                   
                </div>
            </div>
        </div>
    )
}