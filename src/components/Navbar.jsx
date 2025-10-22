import React from 'react';
import {Link} from "react-scroll";
import {BACK_URL} from "../config.js";

const Navbar = ({logo}) => {

    return (<>
            <header className="text-black z-100 fixed top-0 left-0 w-full navbar bg-base-100 shadow-sm p-1">
                <div className="container mx-auto flex flex-wrap p-3 lg:p-5 flex-col lg:flex-row items-center">
                    <Link smooth spy to={"section-header"}
                          className="cursor-pointer flex title-font font-medium items-center text-gray-900 md:mb-0">
                        {(typeof logo !== 'undefined' && logo !== null && logo !== '') &&
                            <img src={BACK_URL + '/uploads/images/' + logo} className={"h-8 lg:h-10"} alt={"Logo de IT-RECO"}/>
                        }
                    </Link>

                    <nav className="lg:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer px-2 md:py-2 lg:py-4 py-2 mr-2 lg:mr-5 font-bold"}
                              to={"section-fonction"}>Comment ca fonctionne ?</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer px-2 md:py-2 lg:py-4 py-2 mr-2 lg:mr-5 font-bold"}
                              to={"section-ambition"}>Mon ambition</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer px-2 md:py-2 lg:py-4 py-2 mr-2 lg:mr-5 font-bold"}
                              to={"section-interets"}>Vos interets</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer px-2 md:py-2 lg:py-4 py-2 mr-2 lg:mr-5 font-bold"}
                              to={"section-boutique"}>Boutique</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer px-2 md:py-2 lg:py-4 py-2 mr-2 lg:mr-5 font-bold"}
                              to={"section-contact"}>Contact</Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;