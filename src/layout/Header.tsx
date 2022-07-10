import headerBackground from '../assets/headerbg.jpg'

import { SiPokemon } from 'react-icons/si'

export function Header() {
    return (
        <div className="flex justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${headerBackground})`}}>
            <div className="w-full flex flex-col justify-center items-center bg-white bg-opacity-60">
                <p className="text-7xl flex items-end mt-4 mb-28 font-pokejs text-zinc-900">PokéJS</p>
                <SiPokemon className='text-9xl absolute top-20 text-zinc-700' />
            </div>
        </div>
    )
}