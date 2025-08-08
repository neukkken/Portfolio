import { Calendar, Calendar1Icon, Languages, SearchIcon } from "lucide-react";
import React from "react";

export default function Navbar() {
    const [transtale, setTranslate] = React.useState(false);
    return (
        <div className="h-20 border-black border-b-2 w-full flex items-center px-5 justify-between">
            <div className="flex gap-4 h-full items-center">
                <div className="border-r-2 h-full flex items-center justify-center pr-4 font-bold text-xl">
                    <div className="flex gap-2 border-2 rounded-xl py-2 px-4 shadow-custom-button">
                        <Calendar /> 02 Feb
                    </div>
                </div>
                <h1 className="font-bold text-4xl">Mi Portafolio</h1>
            </div>
            <div className='flex flex-row items-center'>
                <div className='flex items-center gap-2 mx-2'>
                    <SearchIcon size={30} className='font-bold' />
                    <input type="text" name="" id="" placeholder='Buscar...' className='border-2 shadow-custom-button rounded-xl h-5 px-5 py-5 font-bold text-xl' />
                </div>
                <div>
                    <button onClick={() => setTranslate(!transtale)} className='flex gap-2 items-center justify-center border-2 shadow-custom-button rounded-xl h-5 px-5 py-5 font-bold text-xl hover:translate-x-[1px] hover:translate-y-[1px]'>
                        <Languages size={20} />
                        {
                            transtale ? ("ES") : ("EN")
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}