import { ArrowDownIcon, ArrowUpIcon } from "@/icons";
import { useState } from "react";

type FooterColProps = {
    title: string;
    children?: any;
}

const FooterCol: React.FC<FooterColProps> = (props) => {

    const [hidden, setHidden] = useState<boolean>(true);

    return (
        <div className="md:w-56 px-2">
            <div className="font-medium mb-2 flex justify-between text-gray-500 text-2xl md:text-base border-b border-gray-800 py-4 md:border-0">
                {props.title}
                {
                    hidden ? <ArrowDownIcon className="block md:hidden w-5 h-5" onClick={() => setHidden(false)} /> : <ArrowUpIcon className="block md:hidden w-5 h-5" onClick={() => setHidden(true)} />
                }
                
            </div>
            <div className={`md:block ${hidden ? 'hidden' : ''}`}>
                {props.children}
            </div>
        </div>
    )
}

export default FooterCol