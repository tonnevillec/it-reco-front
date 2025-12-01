import hello from "../assets/hero.jpg"
import stepContact from "../assets/step-contact.png"
import stepEstimation from "../assets/step-estimation.png"
import stepReconditionnement from "../assets/step-reconditionnement.png"
import stepVente from "../assets/step-vente.png"
import stepVendu from "../assets/step-vendu.png"
import stepRetry from "../assets/step-retry.png"
import cyril from "../assets/it-reco-cyril.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faLeaf, faRecycle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import backApi from "../services/backApi.jsx";
import Confiance from "./Confiance.jsx";
import ALaUne from "./ALaUne.jsx";
import Boutique from "./boutique/Boutique.jsx";
import Partenaire from "./Partenaire.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useScrollToAnchor } from "../hook/useScrollToAnchor.jsx";

const Landing = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const anchor = params.get("scrollTo");

    useScrollToAnchor(anchor);

    const [datas, setDatas] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/datas')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

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
        <>
            <section className="w-full min-h-96 pt-28 lg:pt-24 pb-12" id={"section-header"}>
                <div className="flex container mx-auto flex-row">
                    <div className={"p-2 lg:pe-6"}>
                        <h1 className="text-3xl w-full text-center lg:text-4xl lg:text-left font-bold">Donnez une seconde vie performante à l'informatique Pro</h1>

                        <div className="pt-5 w-full text-center md:text-left">
                            L'expert du réemploi à Lesquin et dans la Métropole Lilloise. Matériel professionnel récupéré, rénové et garanti.
                        </div>

                        <div className="pt-5 w-full flex flex-col lg:flex-row lg:justify-around gap-2">
                            <Link to={"/store"} className={"btn btn-primary btn-xl mt-2 lg:mt-4"}>VOIR LA BOUTIQUE</Link>

                            <button onClick={() => handleAnchorClick('section-contact')} className={"btn btn-primary btn-xl mt-2 lg:mt-4"}>VALORISER MON PARC</button>
                        </div>
                    </div>

                    <img src={hello} className="hidden lg:block max-w-lg" alt="Bienvenue sur le site de serre-vis informatique!" />
                </div>
            </section>

            <section className={"w-full bg-white pt-3 pb-2"}>
                <div className="container mx-auto mb-4 px-1">
                    {(!loading && datas.alertMessage !== null && datas.alertMessage.length > 0) &&
                        <div className="w-full rounded-sm lg:rounded-xl border-2 border-primary text-center font-bold p-4 text-primary" dangerouslySetInnerHTML={{ __html: datas.alertMessage }} />
                    }
                </div>
            </section>

            <ALaUne />

            <section className="body-font" id={"section-fonction"}>
                <div className="container mx-auto py-6 px-4">
                    <div className="flex flex-wrap w-full mb-12">
                        <div className="w-full mb-6">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Comment ça fonctionne
                                ?</h1>
                            <div className="h-1 w-20 bg-primary rounded"></div>
                        </div>
                        <p className="w-full leading-relaxed text-gray-500">
                            Vous avez du matériel informatique qui prend la poussière et qui n'est plus utilisé ou vos
                            ordinateurs ne peuvent pas recevoir la mise à jour vers Windows 11 ?
                            <br />
                            Voici comment se déroule le processus de revalorisation
                        </p>
                    </div>

                    <div className="w-full p-1 md:p-2 flex flex-col lg:flex-row bg-gray-100 rounded-lg gap-4 mb-4">
                        <div className={"w-full lg:max-w-52 lg:min-w-52 rounded object-contain object-center lg:object-left-top"}>
                            <img src={stepContact} alt="Prise de contact" />
                        </div>
                        <div>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Etape 1</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-1 lg:mb-4">Prise de contact</h2>
                            <p className="leading-relaxed text-base p-2">
                                Contactez-moi pour planifier un rendez-vous afin que je puisse venir faire une
                                estimation de vos matériels.<br />
                            </p>
                        </div>
                    </div>

                    <div className="w-full p-1 md:p-2 flex flex-col lg:flex-row bg-gray-100 rounded-lg gap-4 mb-4">
                        <div className={"w-full lg:max-w-52 lg:min-w-52 rounded object-contain object-center lg:object-left-top"}>
                            <img src={stepEstimation} alt="Estimation" />
                        </div>
                        <div>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Etape 2</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Estimation</h2>
                            <p className="leading-relaxed text-base p-2">
                                Après une inspection visuelle du matériel je vous propose une <b>estimation de
                                    vente</b> et donc un premier chiffrage de ce que vous pourriez gagner.<br />
                            </p>
                        </div>
                    </div>

                    <div className="w-full p-1 md:p-2 flex flex-col lg:flex-row bg-gray-100 rounded-lg gap-4 mb-4">
                        <div className={"w-full lg:max-w-52 lg:min-w-52 rounded object-contain object-center lg:object-left-top"}>
                            <img src={stepReconditionnement} alt="Nettoyage, tests et installation système" />
                        </div>
                        <div>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Etape 3</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Nettoyage, tests et
                                installation système</h2>
                            <p className="leading-relaxed text-base p-2">
                                Avant la mise en vente <b>le matériel est entièrement nettoyé</b>, <b>les données sont
                                    intégralement effacées</b>, effacement Certifié (Norme NIST 800-88) avec remise de Certificat de Destruction.<br />
                                Je procède si nécessaire à un <b>upgrade du
                                    matériel</b> (disque, mémoire) et si le matériel n'est pas compatible Windows 11, j'<b>installe un système d'exploitation Linux</b> avec
                                toutes les applications utiles à une utilisation basique (navigateur, suite bureautique,
                                logiciel de lecture de vidéo et de musique).
                            </p>
                        </div>
                    </div>

                    <div className="w-full p-1 md:p-2 flex flex-col lg:flex-row bg-gray-100 rounded-lg gap-4 mb-4">
                        <div className={"w-full lg:max-w-52 lg:min-w-52 rounded object-contain object-center lg:object-left-top"}>
                            <img src={stepVente} alt="Mise en vente" />
                        </div>
                        <div>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Etape 4</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Mise en vente</h2>
                            <p className="leading-relaxed text-base p-2">
                                Le matériel est mis en vente chez mon partenaire <a href={"https://serrevis-informatique.fr"} target={"_blank"} className={"hover:font-bold"}> Serre-Vis informatique</a> à Lesquin ainsi que sur <a href={!loading ? datas.leboncoin : ''} className={"hover:text-orange-400"}>Leboncoin</a>.
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full flex-col xl:flex-row">
                        <div className="w-full p-1 md:p-2 flex flex-col lg:flex-row bg-gray-100 rounded-lg gap-4">
                            <div className={"w-full lg:max-w-52 lg:min-w-52 rounded object-contain object-center lg:object-left-top"}>
                                <img src={stepVendu} alt="Gain & Impact RSE" />
                            </div>
                            <div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Scénario A : Succès</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Gain & Impact RSE</h2>
                                <p className="leading-relaxed text-base p-2">
                                    Vous recevez votre paiement par virement accompagné de votre <b>Certificat de Réemploi</b>.
                                    Ce document officiel justifie la sortie de votre patrimoine comptable et <b>valorise votre démarche RSE</b> (Responsabilité Sociétale des Entreprises) en attestant que votre matériel a été revalorisé localement plutôt que détruit.
                                </p>
                            </div>
                        </div>

                        <div className="divider xl:divider-horizontal">OU</div>

                        <div className="w-full p-1 md:p-2 flex flex-col lg:flex-row bg-gray-100 rounded-lg gap-4">
                            <div className={"w-full lg:max-w-52 lg:min-w-52 rounded object-contain object-center lg:object-left-top"}>
                                <img src={stepRetry} alt="Pas de vente ? Zéro frais !" />
                            </div>
                            <div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Scénario B: Sécurité</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Pas de vente ? Zéro frais !</h2>
                                <p className="leading-relaxed text-base p-2">
                                    Si le matériel ne trouve pas preneur sous <b>6 mois</b>, vous n'avez rien à payer.<br />
                                    Le matériel est simplement cédé à IT-RECO : cela couvre intégralement nos frais engagés (pièces neuves installées et main d'œuvre).<br />
                                    <b>Résultat : Aucune facture à régler de votre côté</b>.<br />
                                    Vous recevez une attestation de clôture de mandat et nous nous chargeons de la fin de vie du produit (don associatif ou vente pour pièces)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="body-font bg-emerald-50" id={"section-ambition"}>
                <div className="container py-6 mx-auto px-4">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full mb-6">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Mon ambition ...</h1>
                            <div className="h-1 w-20 bg-primary rounded"></div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-6 w-full">
                            <div className="w-full lg:w-1/2 text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                    <path
                                        d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed text-justify">
                                    <span className={"text-xl font-bold"}>Pour une informatique durable, logique et locale</span><br /><br />
                                    <b>Le constat d'un expert</b> : <br />En tant que professionnel de l'informatique depuis 25 ans, je fais un constat simple : le matériel professionnel (Dell Latitude, Lenovo ThinkPad...) est conçu pour durer 10 ans, mais les entreprises s'en séparent souvent après seulement 3 ou 4 ans. C'est un gaspillage écologique et économique immense que je ne peux plus accepter.
                                    <br /><br />
                                    <b>Une approche pragmatique contre l'obsolescence</b> : <br />Mon objectif est de donner la <b>meilleure seconde vie possible</b> à ces machines, sans dogmatisme :<br />
                                    <ul>
                                        <li><b>Les PC récents</b> : Ils sont reconditionnés sous Windows 11 Pro pour offrir une expérience moderne et performante aux standards actuels.</li>
                                        <li><b>Les PC parfaitement fonctionnels mais jugés "obsolètes"</b> : Plutôt que la déchetterie, je leur offre une nouvelle jeunesse grâce à Linux Mint. C'est un système sécurisé, rapide et simple, qui permet de continuer à utiliser ces machines encore des années pour de la bureautique et du multimédia.</li>
                                    </ul>
                                    <br />
                                    <b>Démocratiser la qualité Pro</b> : <br />IT-RECO a une mission locale : permettre aux étudiants, aux familles et aux associations de la Métropole Lilloise de s'équiper avec du <b>matériel professionnel robuste</b>, réparable et garanti, au prix du matériel d'entrée de gamme de grande surface. C'est cela, l'écologie concrète : moins de déchets, plus de pouvoir d'achat, et de la technologie qui dure.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-primary mt-8 mb-6"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Cyril Tonneville</h2>
                                <p className="text-gray-500">Créateur d'IT-RECO</p>
                            </div>

                            <div className="w-full lg:w-1/2 flex items-center justify-center">
                                <img src={cyril} alt="Cyril Tonneville" className="rounded-lg shadow-lg object-cover max-h-[600px] w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`body-font bg-greenit bg-cover bg-center bg-no-repeat text-white`} id={"section-interets"}>
                <div className="container py-6 mx-auto px-4">
                    <div className="flex flex-wrap w-full mb-16">
                        <div className="w-full mb-6">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">... Vos interets</h1>
                            <div className="h-1 w-20 bg-primary rounded"></div>
                        </div>

                        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row gap-2 lg:gap-6">
                            <div className="p-4 lg:w-1/3 flex flex-col text-center items-center">
                                <div
                                    className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5 flex-shrink-0">
                                    <FontAwesomeIcon icon={faDollarSign} size={"2xl"}></FontAwesomeIcon>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-lg title-font font-medium mb-3">Economique : Le modèle gagnant-gagnant</h2>
                                    <p className="leading-relaxed text-base">
                                        IT-RECO crée un pont entre deux besoins locaux. D'un côté, les entreprises <b>récupèrent de la trésorerie</b> (30% de reversement) sur un matériel qui dormait dans un placard. <br />
                                        De l'autre, les particuliers et étudiants accèdent à du <b>matériel professionnel haut de gamme</b> pour le prix d'un ordinateur d'entrée de gamme.<br />
                                        La valeur reste ainsi sur le territoire.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 lg:w-1/3 flex flex-col text-center items-center">
                                <div
                                    className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5 flex-shrink-0">
                                    <FontAwesomeIcon icon={faLeaf} size={"2xl"}></FontAwesomeIcon>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-lg title-font font-medium mb-3">Ecologique : L'action la plus efficace</h2>
                                    <p className="leading-relaxed text-base">
                                        <b>Le meilleur déchet est celui qu'on ne produit pas</b>.<br />
                                        Saviez-vous que la fabrication d'un seul ordinateur portable génère environ <b>200 kg de CO2</b> et nécessite des milliers de litres d'eau ?<br />
                                        En prolongeant la durée de vie de ces machines robustes via la réparation et l'optimisation (SSD/RAM), nous évitons concrètement ce gaspillage.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/3 flex flex-col text-center items-center">
                                <div
                                    className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5 flex-shrink-0">
                                    <FontAwesomeIcon icon={faRecycle} size={"2xl"}></FontAwesomeIcon>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-lg title-font font-medium mb-3">Solidaire : L'inclusion numérique de qualité</h2>
                                    <p className="leading-relaxed text-base">
                                        L'informatique est un droit, pas un luxe.<br />
                                        En reconditionnant des parcs professionnels (Dell, Lenovo, HP), IT-RECO permet aux familles et aux associations de s'équiper de <b>matériel fiable</b>, réparable et garanti.<br />
                                        C'est lutter contre la fracture numérique avec des outils durables, loin de l'obsolescence programmée du matériel neuf "premier prix".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="body-font min-h-64 bg-emerald-50" id={"section-confiance"}>
                <div className="container py-6 px-4 mx-auto">
                    <div className="w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Ils me font confiance</h1>
                        <div className="h-1 w-20 bg-primary rounded"></div>
                    </div>

                    <Confiance />

                    <div className="flex flex-col gap-4 text-center w-full">
                        <span className={"font-bold text-xl"}>Vous ?</span>

                        <div className={"w-full"}>
                            <button onClick={() => handleAnchorClick('section-contact')} className={"btn btn-primary btn-sm mt-2 lg:mt-4"}>Demander une Estimation Gratuite de mon Parc</button>
                        </div>
                    </div>
                </div>
            </section>

            {!loading && <Boutique leboncoin={datas.leboncoin} />}

            <Partenaire />

            <section className="body-font min-h-64" id={"section-contact"}>
                <div className="container px-4 py-6 mx-auto">
                    <div className="w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Contact</h1>
                        <div className="h-1 w-20 bg-primary rounded"></div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className={"flex w-full lg:justify-around"}>
                            <div className={"text-center"}>
                                Vous êtes une entreprise située autour de la <b>Métropole Lillois</b> et vous voulez
                                faire revaloriser votre parc informatique ?
                            </div>
                        </div>

                        <div className={"flex w-full lg:justify-around"}>
                            <div className={"text-center"}>
                                Pour me contacter envoyez-moi un mail à l'adresse suivante et je vous répondrais dans
                                les plus bref délais.
                            </div>
                        </div>

                        <div className={"flex w-full justify-around"}>
                            <div className={"text-center"}>
                                {!loading &&
                                    <span
                                        className={"flex justify-center border border-primary rounded-xl btn-xl w-full p-4 text-2xl"}>
                                        {datas.mail}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<section className="body-font min-h-64" id={"section-stats"}>*/}
            {/*    <div className="container py-6 px-4 mx-auto">*/}
            {/*<div className="w-full mb-6">*/}
            {/*    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Quelques statistiques</h1>*/}
            {/*    <div className="h-1 w-20 bg-primary rounded"></div>*/}
            {/*</div>*/}

            {/*<Statistics />*/}
            {/*</div>*/}
            {/*</section>*/}
        </>
    );
};

export default Landing;