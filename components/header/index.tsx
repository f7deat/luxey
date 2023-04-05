import { Bars3Icon, CloseIcon, MagnifyingGlassIcon, ShoppingBagIcon } from "@/icons"
import Navbar from "../navbar"
import { useState } from "react"

const Header: React.FC = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <div className="border-b hidden md:block">
                <div className="container mx-auto">
                    <div className="flex justify-end uppercase text-xs">
                        <ul className="flex md:gap-16 gap-4 flex-wrap py-3">
                            <li>Log In</li>
                            <li>Preferred Access</li>
                            <li>About</li>
                            <li>Discover</li>
                            <li>Services</li>
                            <li>Languages</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="shadow-lg mb-2">
                <div className='container mx-auto px-6'>
                    <div className='flex justify-between md:h-20 h-16 items-center'>
                        <div className="flex items-center">
                            <div className='font-bold mr-10'>
                                <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.76 24.696H13.92L15.552 16.632H15.392L15.136 17.272C13.536 21.24 11.584 22.616 7.008 22.616H5.344V1.016L7.584 0.375999V0.216H0.64V0.375999L2.88 1.016V22.2L0.64 22.84V23H13.568L13.76 24.696ZM22.3108 23.48C23.8788 23.48 25.9268 22.424 28.6468 20.536V23.48H28.6788L32.8388 21.976V21.816L30.9188 21.784V6.264H30.8868L26.7268 7.768V7.928L28.6468 8.248V20.12C26.6628 21.496 25.2868 22.2 23.6228 22.2C21.6708 22.2 20.3268 21.016 20.3268 18.616V6.264H20.2948L16.1988 7.768V7.928L18.0548 8.248V18.936C18.0548 21.688 19.6548 23.48 22.3108 23.48ZM43.7125 23H50.0485V22.84L48.5765 22.328L42.2085 13.72L47.6165 7.416L48.8965 6.904V6.744H43.5845V6.904L43.9685 6.968C45.9845 7.32 46.4645 8.216 43.4245 11.704L41.9525 13.4L37.5365 7.416L39.4565 6.904V6.744H33.4725V6.904L34.7525 7.416L40.3845 15.032L34.2725 22.328L32.8325 22.84V23H39.2005V22.84L38.8165 22.776C36.0325 22.328 35.5845 21.336 38.9765 17.304L40.6085 15.352L45.7925 22.328L43.7125 22.84V23ZM57.2575 23.48C62.1215 23.48 63.5615 20.344 64.3295 17.208L64.1375 17.176C63.1775 20.376 61.6735 21.848 58.6335 21.848C54.6335 21.848 51.8495 18.648 51.8495 13.624C51.8495 12.568 51.9775 11.64 52.2015 10.776H63.3695C63.1455 8.152 61.0655 6.264 57.7695 6.264C53.0655 6.264 49.5775 9.976 49.5775 15.384C49.5775 20.344 52.6815 23.48 57.2575 23.48ZM52.2975 10.456C53.0015 8.152 54.6015 6.744 56.8735 6.744C59.0495 6.744 60.4895 8.088 60.8095 10.36L52.2975 10.456ZM66.4238 29.56C68.0878 29.56 70.2638 27.992 72.7917 21.816L78.6798 7.448L79.9598 6.904V6.744H74.5198V6.904L74.8078 6.968C76.9518 7.448 77.7838 8.44 74.8078 15.864L73.0478 20.248L67.4798 7.448L69.5278 6.904V6.744H63.7037V6.904L64.9838 7.448L71.8958 23C70.3598 26.488 69.4318 27.32 67.8638 27.32C66.9038 27.32 66.0398 27 65.3997 26.68C65.1438 26.968 64.8238 27.48 64.8238 28.12C64.8238 28.984 65.3997 29.56 66.4238 29.56Z" fill="black" />
                                </svg>
                            </div>
                            <Navbar open={open} />
                        </div>
                        <div className="md:flex gap-4 items-center hidden">
                            <div className="border rounded flex text-gray-500 items-center">
                                <input type="text" className="md:w-96 w-64 h-full px-3 py-2 w-72 rounded" placeholder="Search Luxey's" />
                                <span className="mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <div className="flex gap-6">
                            <button className="md:hidden">
                                <MagnifyingGlassIcon className="w-6 h-6" />
                            </button>
                            <button className="md:hidden">
                                <ShoppingBagIcon className="w-6 h-6" />
                            </button>
                            <button className="md:hidden" onClick={() => setOpen(!open)}>
                                {
                                    open ? (<CloseIcon className="text-gray-900" />) : (<Bars3Icon className="md:w-6 md:h-6 w-5 h-5" />)
                                }
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header