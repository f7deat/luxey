const Pagination: React.FC = () => {
    return (
        <div>
            <div className="flex justify-center gap-2 items-center">
                <button className="text-gray-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <span>Previous</span>
                </button>
                <button className="h-10 w-8 flex items-center justify-center border hover:border-gray-900 border-gray-900">1</button>
                <button className="h-10 w-8 flex items-center justify-center border hover:border-gray-900">2</button>
                <button className="h-10 w-8 flex items-center justify-center border hover:border-gray-900">3</button>
                <button className="h-10 w-8 flex items-center justify-center border hover:border-gray-900">4</button>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={5} cy={12} r="1.5" fill="#00253E" stroke="#00253E" />
                    <circle cx={12} cy={12} r="1.5" fill="#00253E" stroke="#00253E" />
                    <circle cx={19} cy={12} r="1.5" fill="#00253E" stroke="#00253E" />
                </svg>
                <button className="h-10 w-8 flex items-center justify-center border hover:border-gray-900">19</button>
                <button className="flex items-center">
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Pagination