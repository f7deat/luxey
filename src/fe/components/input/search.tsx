const Search: React.FC = () => {
    return (
        <div className='flex border mb-4'>
            <input type="text" className='px-4 py-2 w-full' placeholder='Search Hermès Bags' />
            <button className='h-10 w-10 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    )
}

export default Search