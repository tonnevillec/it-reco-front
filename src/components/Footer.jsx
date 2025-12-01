import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BACK_URL } from "../config.js";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MentionsLegales from "../pages/MentionsLegales.jsx";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = ({ logo, contact, linkedin, siret }) => {
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

    return (
        <footer className="footer bg-emerald-50 p-2 md:p-10 min-h-[150px] flex flex-col md:flex-row">
            <aside className={"text-black w-full md:w-1/4"}>
                {(typeof logo !== 'undefined' && logo !== null && logo !== '') &&
                    <img src={BACK_URL + '/uploads/images/' + logo} alt={"IT-RECO"} className={"max-w-36"} />
                }
            </aside>

            <div className="w-full flex flex-col md:flex-row gap-6">
                <nav className={"text-black w-full md:w-1/3"}>
                    <h6 className="footer-title">Contact</h6>
                    {(typeof contact !== 'undefined' && contact !== null && contact !== '') &&
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className={"me-2"}></FontAwesomeIcon>
                            <span>{contact}</span>
                        </p>
                    }
                    {(typeof linkedin !== 'undefined' && linkedin !== null && linkedin !== '') &&
                        <a href={linkedin} target={"_blank"} className={"hover:font-bold"}>
                            <FontAwesomeIcon icon={faLinkedin} className={"me-2"}></FontAwesomeIcon>
                            <span>Linkedin</span>
                        </a>
                    }
                </nav>

                <nav className={"text-black w-full md:w-1/3 flex flex-col"}>
                    <h6 className="footer-title">Navigation</h6>
                    <span onClick={() => handleAnchorClick('section-fonction')} className={"cursor-pointer py-1 hover:font-bold"}>Comment ca fonctionne ?</span>
                    <span onClick={() => handleAnchorClick('section-ambition')} className={"cursor-pointer py-1 hover:font-bold"}>Mon ambition</span>
                    <span onClick={() => handleAnchorClick('section-interets')} className={"cursor-pointer py-1 hover:font-bold"}>Vos interets</span>
                    <span onClick={() => handleAnchorClick('section-partenaire')} className={"cursor-pointer py-1 hover:font-bold"}>Partenaire</span>
                    <Link className={"cursor-pointer py-1 hover:font-bold"} to={"/store"}>Boutique</Link>
                    <span onClick={() => handleAnchorClick('section-contact')} className={"cursor-pointer py-1 hover:font-bold"}>Contact</span>
                </nav>

                <nav className={"text-black w-full md:w-1/3"}>
                    <h6 className="footer-title">A propos</h6>
                    <div>
                        IT-RECO est une entreprise individuelle
                    </div>
                    {(typeof siret !== 'undefined' && siret !== null && siret !== '') &&
                        <p className={"my-2"}>N° de SIRET : {siret}</p>
                    }
                    <MentionsLegales />
                </nav>
            </div>
        </footer>
    );
};

export default Footer;