import { SingleNavItem, NavItem } from "./item";

type NavbarProps = {
    open: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {

    const { open } = props;

    return (
        <ul className={`md:flex z-50 ${open ? 'bg-stone-100 w-screen fixed h-full top-6 left-0 mt-10' : 'hidden'}`}>
            <NavItem name="Home" />
            <SingleNavItem name="BY NOW" url="by-now" />
            <SingleNavItem name="RANKING" url="ranking" />
            <NavItem name="CHART" />
        </ul>
    )
}

export default Navbar