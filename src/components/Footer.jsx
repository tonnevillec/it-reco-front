import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
import logo from "../assets/logo01.png"

const Footer = () => {
    return (
        <footer className="footer bg-emerald-50 p-2 md:p-10 min-h-[150px] flex flex-col md:flex-row">
            <aside className={"text-black w-full md:w-1/4"}>
                <img src={logo} alt={"IT-RECO"} className={"max-w-36"} />
            </aside>

            <div className="w-full flex flex-col md:flex-row gap-6">
                <nav className={"text-black w-full md:w-1/3"}>
                    <h6 className="footer-title">Contact</h6>
                    <p><FontAwesomeIcon icon={faEnvelope} className={"me-2"}></FontAwesomeIcon>contact-@it-reco.fr</p>
                </nav>

                <nav className={"text-black w-full md:w-1/3 flex flex-col"}>
                    <h6 className="footer-title">Navigation</h6>
                    <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 font-bold"} to={"section-fonction"}>Comment ca fonctionne ?</Link>
                    <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 font-bold"} to={"section-ambition"}>Mon ambition</Link>
                    <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 font-bold"} to={"section-interets"}>Vos interets</Link>
                    <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 font-bold"} to={"section-boutique"}>Boutique</Link>
                    <Link smooth spy activeClass={"bg-emerald-50"} className={"cursor-pointer py-1 font-bold"} to={"section-contact"}>Contact</Link>
                </nav>

                <nav className={"text-black w-full md:w-1/3"}>
                    <h6 className="footer-title">A propos</h6>
                    <div>
                        L'offre que je souhaites vous proposer est en cours de finalisation. Vous retrouverez toutes les informations sur le site dès que j'aurais terminé la rédaction.
                        <br/>
                        En attendant, n'hésitez pas à me contacter si vous avez des questions.
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;