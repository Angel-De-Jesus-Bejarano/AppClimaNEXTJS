
import { get } from "http";
import { ChangeEvent, useState } from "react"


interface SearchProps {
    onInputChange: (value: string) => void;

}


export default function Search({ onInputChange }: SearchProps) {

    const [inputValue, setInputValue] = useState<string>('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }

    const handleClick = () => {
        console.log(inputValue)
        onInputChange(inputValue)
    }

    return (
        <div className=" flex justify-center items-center">
            <div className=" flex space-x-2 items-center w-96 mb-5 bg-black p-3 rounded-xl">
                <span className=" text-white text-xl font-bold">Ciudad</span>
                <input
                    id="inputLocation"
                    value={inputValue}
                    onChange={handleInputChange}
                    className=" rounded-md h-8 pl-2 w-48" type="text" />
                <button onClick={handleClick} className=" text-white bg-blue-800 w-20 h-8 rounded-md">Buscar</button>
            </div>
            <div className=" flex justify-around w-80 p-3 mb-5">
                <button  className=" text-white bg-green-500 w-24 h-10 rounded-md">Mapa</button>
                <button  className=" text-white bg-blue-500 w-24 h-10 rounded-md">Graficas</button>
            </div>
        </div>
    )
}