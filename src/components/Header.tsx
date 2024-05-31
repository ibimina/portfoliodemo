import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo.png'
import { HambergerMenu } from 'iconsax-react'
import { useState } from "react";
import { usePathname } from "next/navigation";

function Header() {
    const [openMenu, setOpenuMenu] = useState(false)
    const pathname = usePathname()
    const handleMenu = () => {
        setOpenuMenu(!openMenu)
    }

    return ( 
        <header className="flex items-center justify-between px-3 py-4 lg:px-10 lg:py-6 ">
            <button className="md:hidden" onMouseDown={handleMenu}>
                <HambergerMenu size="32" color="#fff" />
            </button>

            <Link href='/'>
                <Image src={logo} width={120} height={30} alt="logo" />
            </Link>
            <nav className={`${openMenu ? 'fixed text-[#000]  w-max-[400px] m-auto top-[6em] left-0 right-0 p-[1em] text-center  rounded-sm bg-[#e6e2e2]  w-[90%] transition-all ' : 'hidden'} md:block md:relative md:auto md:bg-inherit md:top-auto md:left-auto md:w-auto md:p-0 md:m-0`}>
                <ul className="md:flex md:items-center md:gap-8 text-sm text-[#000] md:text-[#fff] ">
                    <li><Link href={'/'} className={`${'/' === pathname ? "md:opacity-none" :"md:opacity-30"}`}>  Domů</Link>
                      
                        </li>
                    <li><Link href={'/frontend'} className={`${'/frontend' === pathname ? "opacity-none" : "md:opacity-30"}`}>Front-end skills</Link></li>
                    <li><Link href={'/backend'}  className={`${'/backend' === pathname ? "md:opacity-none" : "md:opacity-30"}`}>Back-end skills</Link></li>
                    <li><Link href={'/portfolio'}  className={`${'/portfolio' === pathname ? "md:opacity-none" : "md:opacity-30"}`}>Portfolio</Link></li>
                    <li><Link href={'/kontakt'}  className={`${'/kontakt' === pathname ? "md:opacity-none" : "md:opacity-30"}`}>Kontakt</Link> </li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;