import { useState } from "react";

type CollapseProps = {
    title: string;
    children?: any;
}

const Collapse: React.FC<CollapseProps> = (props) => {

    const [visible, setVisible] = useState<boolean>(false)

    return (
        <div>
            <div className="py-6 font-medium flex justify-between items-center cursor-pointer" onClick={() => setVisible(!visible)}>
                <div>{props.title}</div>
                {
                    visible ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    )
                }
            </div>
            <div hidden={visible}>{props.children}</div>
        </div>
    )
}

export default Collapse