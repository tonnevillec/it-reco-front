import React from 'react';
import {BACK_URL} from "../config.js";
import {Link, useNavigate} from "react-router-dom";

const Navbar = ({logo}) => {
    const navigate = useNavigate()

    const handleAnchorClick = (anchor) => {
        if (window.location.pathname !== "/") {
            navigate(`/?scrollTo=${anchor}`);
        } else {
            // Si on est déjà sur la page d'accueil, on scrolle directement
            const element = document.getElementById(anchor);
            if (element) element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (<>
            <header className="text-black z-100 fixed top-0 left-0 w-full navbar bg-base-100 shadow-sm p-1">
                <div className="container mx-auto flex flex-wrap p-3 lg:p-5 flex-col lg:flex-row items-center">
                    <button onClick={() => handleAnchorClick('section-header')}
                            className={"cursor-pointer flex title-font font-medium items-center text-gray-900 md:mb-0"}
                    >
                        {(typeof logo !== 'undefined' && logo !== null && logo !== '') &&
                            <img src={BACK_URL + '/uploads/images/' + logo} className={"h-8 lg:h-10"} alt={"Logo de IT-RECO"}/>
                        }
                    </button>

                    <nav className="lg:ml-auto flex flex-wrap items-center text-base justify-center">
                        <button onClick={() => handleAnchorClick('section-fonction')}
                                className={"cursor-pointer px-2 md:py-2 lg:py-4 py-2 mr-2 lg:mr-5 font-bold hover:bg-emerald-50"}
                        >Comment ca fonctionne ?</button>

                        <button onClick={() => handleAnchorClick('section-ambition')}
                                className={"cursor-pointer px-2 md:py-2 lg:py-4 py-2 mr-2 lg:mr-5 font-bold hover:bg-emerald-50"}
                        >Mon ambition</button>

                        <button onClick={() => handleAnchorClick('section-interets')}
                                className={"cursor-pointer px-2 md:py-2 lg:py-4 py-2 mr-2 lg:mr-5 font-bold hover:bg-emerald-50"}
                        >Vos interets</button>

                        <Link className={"cursor-pointer px-2 md:py-2 lg:py-4 py-2 mr-2 lg:mr-5 font-bold hover:bg-emerald-50"}
                              to={"/store"}>Boutique</Link>

                        <button onClick={() => handleAnchorClick('section-contact')}
                                className={"cursor-pointer px-2 md:py-2 lg:py-4 py-2 mr-2 lg:mr-5 font-bold hover:bg-emerald-50"}
                        >Contact</button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;