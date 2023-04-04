import { useRef, useState } from "react"
import RangeSlider from 'react-range-slider-input';

const LuxeyRangeSlider: React.FC = () => {

    const [value, setValue] = useState<number[]>([0, 100]);

    const onInput = (values: number[]) => {
        setValue(values)
    }

    return (
        <div>
            <div className="mb-4">
                <RangeSlider onInput={onInput} value={value} />
            </div>
            <div className="flex justify-between">
                <div>{value[0]} USD</div>
                <div>{value[1]} USD</div>
            </div>
        </div>

    )
}

export default LuxeyRangeSlider