import { Link } from 'react-router-dom'

import { GiWeight, GiWizardStaff, GiBarefoot } from 'react-icons/gi'
import { IoMdStats } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import { RiSwordFill } from 'react-icons/ri'
import { BsShieldFill } from 'react-icons/bs'

interface PokeCardProps {
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

export function PokeCard({ name, id, weight, type1, type2, hp, speed, attack, specialAttack, defense, specialDefense  }:PokeCardProps) {
    return (
        <Link to={`/pokemon/${id}`} className="h-96 w-64 bg-zinc-300 rounded-md flex flex-col justify-between scale-75 relative">
            <div>
                <div className='absolute bg-white p-4 w-10 h-10 rounded-full border-2 border-zinc-300 -top-5 -left-5 flex justify-center items-center'><p>{id}</p></div>
                <div className="flex justify-around my-2">
                    <p>{name[0].toUpperCase() + name.substring(1)}</p>
                    <p className='flex gap-1 items-center'>{hp + speed + attack + specialAttack + defense + specialDefense}<span><IoMdStats /></span></p>
                </div>
                <div className="flex justify-center">
                    <img className='w-48 h-48' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                </div>
                <div className="flex justify-around">
                    <p className={`w-24 flex justify-center rounded-sm
                    ${type1 === "Normal" && "bg-zinc-400" || 
                    type1 === "Fogo" && "bg-orange-600" || 
                    type1 === "Água" && "bg-blue-500" ||
                    type1 === "Elétrico" && "bg-yellow-300" ||
                    type1 === "Grama" && "bg-green-400" ||
                    type1 === "Gelo" && "bg-blue-400" ||
                    type1 === "Lutador" && "bg-orange-700" ||
                    type1 === "Venenoso" && "bg-violet-400" ||
                    type1 === "Terra" && "bg-yellow-500" ||
                    type1 === "Voador" && "bg-blue-300" ||
                    type1 === "Psíquico" && "bg-pink-500" ||
                    type1 === "Inseto" && "bg-green-600" ||
                    type1 === "Pedra" && "bg-yellow-700" ||
                    type1 === "Fantasma" && "bg-violet-600" ||
                    type1 === "Dragão" && "bg-orange-900" ||
                    type1 === "Noturno" && "bg-zinc-700" ||
                    type1 === "Metal" && "bg-gray-600" ||
                    type1 === "Fada" && "bg-pink-300"}
                    `}>{type1}</p>
                    <p className={`w-24 flex justify-center rounded-sm
                    ${type2 === "Normal" && "bg-zinc-400" || 
                    type2 === "Fogo" && "bg-orange-600" || 
                    type2 === "Água" && "bg-blue-500" ||
                    type2 === "Elétrico" && "bg-yellow-300" ||
                    type2 === "Grama" && "bg-green-400" ||
                    type2 === "Gelo" && "bg-blue-400" ||
                    type2 === "Lutador" && "bg-orange-700" ||
                    type2 === "Venenoso" && "bg-violet-400" ||
                    type2 === "Terra" && "bg-yellow-500" ||
                    type2 === "Voador" && "bg-blue-300" ||
                    type2 === "Psíquico" && "bg-pink-500" ||
                    type2 === "Inseto" && "bg-green-600" ||
                    type2 === "Pedra" && "bg-yellow-700" ||
                    type2 === "Fantasma" && "bg-violet-600" ||
                    type2 === "Dragão" && "bg-orange-900" ||
                    type2 === "Noturno" && "bg-zinc-700" ||
                    type2 === "Metal" && "bg-gray-600" ||
                    type2 === "Fada" && "bg-pink-300"}
                    `}>{type2}</p>
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
                    <div className={`w-7 flex items-end bg-blue-400 ${attack >= 200 && "h-16" || attack >= 150 && "h-14" || attack >= 120 && "h-12" || attack >= 100 && "h-11" || attack >= 90 && "h-10" || attack >= 80 && "h-9" || attack >= 70 && "h-8" || attack >= 60 && "h-7" || attack >= 50 && "h-6" || attack >= 40 && "h-5" || attack >= 30 && "h-4" || attack >= 20 && "h-3" || attack >= 10 && "h-2" || attack >= 1 && "h-1" || attack === 0 && "h-0"} `}>
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
        </Link>
    )
}