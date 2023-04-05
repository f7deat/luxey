import { ArrowRightIcon } from "@/icons";
import { useState } from "react";

type NavItemProps = {
    name: string;
    childen?: any;
}

const NavItem: React.FC<NavItemProps> = (props) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <li className="px-6 nav-item">
            <div className="flex items-center justify-between md:justify-center md:w-36 md:h-20 h-14">
                <button className="uppercase font-medium relative">
                    {props.name}
                </button>
                <div className="md:hidden">
                    <ArrowRightIcon />
                </div>
            </div>
            <div className="absolute bg-stone-100 left-0 w-screen z-50 nav-item-menu">
                <div className="container mx-auto py-6 px-4">
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

export default NavItem