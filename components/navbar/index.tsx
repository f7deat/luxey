const Navbar: React.FC = () => {

    return (
        <ul className='md:flex'>
            <li className="w-36 h-20 flex items-center justify-center uppercase font-medium">Home</li>
            <li className="w-36 h-20 flex items-center justify-center nav-item">
                <div>
                    <a className="uppercase font-medium relative" href="#" role="button" aria-expanded="false">
                        AUCTIONS
                    </a>
                    <div className="absolute bg-stone-100 left-0 w-screen z-50 mt-6 nav-item-menu">
                        <div className="container mx-auto py-6">
                            <div className="grid grid-cols-6">
                                <div>
                                    <div className="font-medium mb-4">CATEGORY</div>
                                    <div className="mb-4">Contemporary Art</div>
                                    <div className="mb-4">Impressionist & Modern Art</div>
                                    <div className="mb-4">Old Master Paintings</div>
                                    <div className="mb-4">Jewelry</div>
                                    <div className="mb-4">Watches</div>
                                    <div className="mb-4">20th Century Design</div>
                                </div>
                                <div>
                                    <div className="font-medium mb-4">CATEGORY</div>
                                    <div className="mb-4">Contemporary Art</div>
                                    <div className="mb-4">Impressionist & Modern Art</div>
                                    <div className="mb-4">Old Master Paintings</div>
                                    <div className="mb-4">Jewelry</div>
                                    <div className="mb-4">Watches</div>
                                    <div className="mb-4">20th Century Design</div>
                                </div>
                                <div>
                                    <div className="font-medium mb-4">CATEGORY</div>
                                    <div className="mb-4">Contemporary Art</div>
                                    <div className="mb-4">Impressionist & Modern Art</div>
                                    <div className="mb-4">Old Master Paintings</div>
                                    <div className="mb-4">Jewelry</div>
                                    <div className="mb-4">Watches</div>
                                    <div className="mb-4">20th Century Design</div>
                                </div>
                                <div>
                                    <div className="font-medium mb-4">CATEGORY</div>
                                    <div className="mb-4">Contemporary Art</div>
                                    <div className="mb-4">Impressionist & Modern Art</div>
                                    <div className="mb-4">Old Master Paintings</div>
                                    <div className="mb-4">Jewelry</div>
                                    <div className="mb-4">Watches</div>
                                    <div className="mb-4">20th Century Design</div>
                                </div>
                                <div>
                                    <div className="font-medium mb-4">CATEGORY</div>
                                    <div className="mb-4">Contemporary Art</div>
                                    <div className="mb-4">Impressionist & Modern Art</div>
                                    <div className="mb-4">Old Master Paintings</div>
                                    <div className="mb-4">Jewelry</div>
                                    <div className="mb-4">Watches</div>
                                    <div className="mb-4">20th Century Design</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="w-36 h-20 flex items-center justify-center uppercase font-medium">RANKING</li>
            <li className="w-36 h-20 flex items-center justify-center uppercase font-medium">CHART</li>
        </ul>
    )
}

export default Navbar