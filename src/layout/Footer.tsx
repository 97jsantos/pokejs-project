import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export function Footer() {
    return (
        <footer className="h-32 bg-zinc-900 flex justify-center">
            <div className='flex justify-around max-w-7xl w-full'>
                <div className='flex justify-center items-center'>
                    <p className='font-pokejs text-white text-5xl'>97JSantos</p>
                </div>
                <ul className="flex justify-around items-center w-1/4">
                    <li><a href="https://www.linkedin.com/in/joelisson-santos/" target="_blank">
                        <FaLinkedin className='text-4xl text-white' />
                    </a></li>
                    <li><a href="https://github.com/97jsantos" target="_blank">
                        <FaGithub className='text-4xl text-white' />
                    </a></li>
                    <li><a href="https://www.instagram.com/97jsantos/" target="_blank">
                        <FaInstagram className='text-4xl text-white' />
                    </a></li>
                </ul>
            </div>
        </footer>
    )
}