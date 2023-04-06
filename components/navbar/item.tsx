import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "@/icons";
import Link from "next/link";
import { useState } from "react";

type NavItemProps = {
    name: string;
    url?: string;
    childen?: any;
}

const SingleNavItem: React.FC<NavItemProps> = (props) => (
    <li className="px-6 nav-item">
        <div className="flex items-center justify-between md:justify-center xl:w-36 md:h-20 h-14">
            <Link href={props.url || ''}>
                <button className="uppercase font-medium relative">
                    {props.name}
                </button>
            </Link>
        </div>
    </li>
)

const NavItem: React.FC<NavItemProps> = (props) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <li className="px-6 nav-item">
            <div className="flex items-center justify-between md:justify-center xl:w-36 md:h-20 h-14">
                <button className="uppercase font-medium relative">
                    {props.name}
                </button>
                <button className="md:hidden flex-1 flex justify-end h-full items-center" onClick={() => setOpen(!open)}>
                    <ArrowRightIcon />
                </button>
            </div>
            <div className={`fixed bg-stone-100 left-0 w-screen z-30 nav-item-menu ${open ? 'top-0' : 'hidden'}`}>
                <div className="container mx-auto py-6 px-4">
                    <div className="md:hidden" hidden={!open}>
                        <div className="flex item-center h-14 -mx-4 -mt-6 justify-between items-center uppercase text-xl bg-white mb-4 px-4">
                            <button onClick={() => setOpen(false)}>
                                <ArrowLeftIcon />
                            </button>
                            <span>{props.name}</span>
                            <button onClick={() => setOpen(false)}>
                                <CloseIcon />
                            </button>
                        </div>
                    </div>
                    <div className="md:grid grid-cols-6">
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
        </li>
    )
}

export { NavItem, SingleNavItem }