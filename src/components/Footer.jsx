import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
import {BACK_URL} from "../config.js";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import MentionsLegales from "../pages/MentionsLegales.jsx";

const Footer = ({logo, contact, linkedin, siret}) => {
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
                    <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 hover:font-bold"} to={"section-fonction"}>Comment ca fonctionne ?</Link>
                    <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 hover:font-bold"} to={"section-ambition"}>Mon ambition</Link>
                    <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 hover:font-bold"} to={"section-interets"}>Vos interets</Link>
                    <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 hover:font-bold"} to={"section-boutique"}>Boutique</Link>
                    <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 hover:font-bold"} to={"section-contact"}>Contact</Link>
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