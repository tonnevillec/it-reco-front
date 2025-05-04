import React from 'react';
import {Link} from "react-scroll";
import logo from '../assets/logo01.png'

const Navbar = () => {
    return (<>
            <header className="z-100 fixed top-0 left-0 w-full navbar bg-base-100 shadow-sm p-4">
                <div className="navbar-start">
                    <Link smooth spy to={"top"} className="text-xl text-white">
                        <img src={logo} className={"max-h-12"} alt={"Logo de serre-vis informatique"} />
                    </Link>

                    <div className={"ms-24 flex flex-row items-center justify-center"}>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer px-6 py-3 font-bold"} to={"section-fonction"}>Comment ca fonctionne ?</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer px-6 py-3 font-bold"} to={"section-ambition"}>Mon ambition</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer px-6 py-3 font-bold"} to={"section-interets"}>Vos interets</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer px-6 py-3 font-bold"} to={"section-boutique"}>Boutique</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer px-6 py-3 font-bold"} to={"section-contact"}>Contact</Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;