import { NavLink } from "react-router-dom";

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white'>
            <ul className='flex items-center gap-5'>
                <li>
                    <NavLink
                        to='/home'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Gatos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clock'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Reloj
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-4'>
                <li>
                    <button type="submit">Log out</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;