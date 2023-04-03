import { useRef, useState } from "react"

const Ranger: React.FC = () => {

    const range = useRef(null);

    const [minPrice, setMinPrice] = useState<number>(100);
    const [maxPrice, setMaxPrice] = useState<number>(170000);
    const [min, setMin] = useState<number>(100);
    const [max, setMax] = useState<number>(10000);
    const [minThumb, setMinThumb] = useState(0);
    const [maxThumb, setMaxThumb] = useState(0);

    const minChange = () => {
        setMin(Math.min(minPrice, maxPrice - 100));
        setMinThumb((minPrice - min) / (max - min) * 100);
    }

    const maxChange = () => {
        setMax(Math.min(maxPrice, minPrice - 100));
        setMaxThumb((maxPrice - min) / (max - min) * 100);
    }

    return (
        <div className="relative max-w-xl w-full">
            <div>
                <input type="range" step={100} className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer" onChange={minChange} value={minPrice} />
                <input type="range" step={100} className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer" onChange={maxChange} value={maxPrice} />
                <div className="relative z-10 h-2">
                    <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200" />
                    <div className="absolute z-20 top-0 bottom-0 rounded-md bg-gray-500" style={{
                        right: `${maxThumb}%`, left: `${minThumb}%`  
                    }} />
                    <div className="absolute z-30 w-6 h-6 top-0 left-0 bg-white border rounded-full -mt-2 -ml-1" style={{
                        left: `${minThumb}%`
                    }} />
                    <div className="absolute z-30 w-6 h-6 top-0 right-0 bg-white border rounded-full -mt-2 -mr-3" style={{
                        right: `${maxThumb}%`
                    }} />
                </div>
            </div>
            <div className="flex justify-between items-center py-5">
                <div>
                    {min} USD
                </div>
                <div>
                    {max.toLocaleString()} USD
                </div>
            </div>
        </div>

    )
}

export default Ranger