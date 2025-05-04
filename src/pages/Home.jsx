import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Landing from "./Landing.jsx";
import Navbar from "../components/Navbar.jsx";
import logo from "../assets/logo01.png"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-scroll";

const Home = () => {
    const location = useLocation()

    return (
        <>
            <div id={"page-container top"}
                 className={"mx-auto min-h-screen w-full"}
            >
                <Navbar/>

                <main id={"page-content"}
                      className={"flex max-w-full flex-auto flex-col mt-20"}
                >
                    <div className="w-full min-h-screen">
                        {location.pathname === "/" ? <Landing/> : <Outlet/>}
                    </div>
                </main>
            </div>

            <footer className="footer bg-emerald-50 p-10 min-h-[150px] flex">
                <aside className={"text-black w-1/4"}>
                    <img src={logo} alt={"IT-RECO"} className={"max-w-36"} />
                </aside>

                <div className="w-full flex flex-row gap-6">
                    <nav className={"text-black w-1/3"}>
                        <h6 className="footer-title">Contact</h6>
                        <p><FontAwesomeIcon icon={faEnvelope} className={"me-2"}></FontAwesomeIcon>contact-@it-reco.fr</p>
                    </nav>

                    <nav className={"text-black w-1/3 flex flex-col"}>
                        <h6 className="footer-title">Navigation</h6>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 font-bold"} to={"section-fonction"}>Comment ca fonctionne ?</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 font-bold"} to={"section-ambition"}>Mon ambition</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 font-bold"} to={"section-interets"}>Vos interets</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 font-bold"} to={"section-boutique"}>Boutique</Link>
                        <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 font-bold"} to={"section-contact"}>Contact</Link>
                    </nav>

                    <nav className={"text-black w-1/3"}>
                        <h6 className="footer-title">A propos</h6>
                        <div>
                            L'offre que je souhaites vous proposer est en cours de finalisation. Vous retrouverez toutes les informations sur le site dès que j'aurais terminé la rédaction.
                            <br/>
                            En attendant, n'hésitez pas à me contacter si vous avez des questions.
                        </div>
                    </nav>
                </div>
            </footer>

            <div className="footer bg-emerald-50 p-6 w-full flex justify-center border-t-2">
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </div>
        </>
    );
};

export default Home;