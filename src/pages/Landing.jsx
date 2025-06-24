import hello from "../assets/hero.jpg"
import stepContact from "../assets/step-contact.png"
import stepEstimation from "../assets/step-estimation.png"
import stepReconditionnement from "../assets/step-reconditionnement.png"
import stepVente from "../assets/step-vente.png"
import stepVendu from "../assets/step-vendu.png"
import stepRetry from "../assets/step-retry.png"
import tibelec from "../assets/entreprises/tibelec.png"
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollarSign, faLeaf, faRecycle} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import BoutiquePreview from "./boutique/BoutiquePreview.jsx";

const Landing = () => {
    return (
        <>
            <section className="w-full min-h-96 pt-36 lg:pt-24 pb-12" id={"section-header"}>
                <div className="flex container mx-auto flex-row">
                    <div className={"p-2 lg:pe-6"}>
                        <h1 className="text-3xl w-full text-center lg:text-4xl lg:text-left font-bold">Revalorisez le parc informatique de votre entreprise</h1>

                        <div className="pt-5 w-full text-center md:text-left">
                            Rentabilisez la seconde vie de votre matériel informatique obsolète
                        </div>

                        <div className="pt-5 w-full text-center md:text-left">
                            Vous êtes une entreprise située autour de la métropole Lilloise ?<br/>
                            <Link smooth spy to={"section-contact"} className={"btn btn-primary btn-sm mt-2 lg:mt-4"}>Contactez-moi</Link>
                        </div>
                    </div>

                    <img src={hello} className="hidden lg:block max-w-lg" alt="Bienvenue sur le site de serre-vis informatique!"/>
                </div>
            </section>

            <section className={"w-full bg-white pt-3 pb-2"}>
                <div className="container mx-auto mb-4 px-1">
                    <div className="w-full rounded-sm lg:rounded-xl border-2 border-primary text-center font-bold p-4 text-primary">
                        L'offre que je souhaites vous proposer est en cours de finalisation. Vous retrouverez toutes les informations sur le site dès que j'aurais terminé la rédaction.
                        <br/>
                        En attendant, n'hésitez pas à me <Link smooth spy to={"section-contact"} className={"cursor-pointer border-b-2 border-dotted font-bold"}>contacter</Link> si vous avez des questions.
                    </div>
                </div>
            </section>

            <section className="body-font" id={"section-fonction"}>
                <div className="container mx-auto py-6 px-4">
                    <div className="flex flex-wrap w-full mb-16">
                        <div className="w-full mb-6">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Comment ça fonctionne
                                ?</h1>
                            <div className="h-1 w-20 bg-primary rounded"></div>
                        </div>
                        <p className="w-full leading-relaxed text-gray-500">
                            Vous avez du matériel informatique qui prend la poussière et qui n'est plus utilisé ou vos
                            ordinateurs ne peuvent pas recevoir la mise à jour vers Windows 11 ?
                            <br/>
                            Voici comment se déroule le processus de revalorisation
                        </p>
                    </div>

                    <div className="w-full p-1 md:p-2 flex bg-gray-100 rounded-lg gap-4 mb-4">
                        <img className="w-24 sm:w-32 md:w-48 lg:w-52 rounded object-contain object-left-top" src={stepContact}
                             alt="Prise de contact"/>
                        <div className={""}>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Etape 1</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prise de contact</h2>
                            <p className="leading-relaxed text-base p-2">
                                Contactez-moi pour planifier un rendez-vous afin que je puisse venir faire une
                                estimation de vos matériels.<br/>
                            </p>
                        </div>
                    </div>

                    <div className="w-full p-2 flex bg-gray-100 rounded-lg gap-4 mb-4">
                        <img className="w-24 sm:w-32 md:w-48 lg:w-52 rounded object-contain object-left-top" src={stepEstimation}
                             alt="Estimation"/>
                        <div className={""}>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Etape 2</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Estimation</h2>
                            <p className="leading-relaxed text-base p-2">
                                Après une inspection visuelle du matériel je vous propose une <b>estimation de
                                vente</b> et donc un premier chiffrage de ce que vous pourriez gagner.
                            </p>
                        </div>
                    </div>

                    <div className="w-full p-2 flex bg-gray-100 rounded-lg gap-4 mb-4">
                        <img className="w-24 sm:w-32 md:w-48 lg:w-52 rounded object-contain object-left-top" src={stepReconditionnement}
                             alt="Nettoyage, tests et installation système"/>
                        <div className={""}>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Etape 3</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Nettoyage, tests et
                                installation système</h2>
                            <p className="leading-relaxed text-base p-2">
                                Avant la mise en vente <b>le matériel est entièrement nettoyé</b>, <b>les données sont
                                intégralement effacées</b>. Je procède si nécessaire à un <b>upgrade du
                                matériel</b> (disque, mémoire) et j'<b>installe un système d'exploitation Linux</b> avec
                                toutes les applications utiles à une utilisation basique (navigateur, suite bureautique,
                                logiciel de lecture de vidéo et de musique).
                            </p>
                        </div>
                    </div>

                    <div className="w-full p-2 flex bg-gray-100 rounded-lg gap-4 mb-4">
                        <img className="w-24 sm:w-32 md:w-48 lg:w-52 rounded object-contain object-left-top" src={stepVente}
                             alt="Mise en vente"/>
                        <div className={""}>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Etape 4</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Mise en vente</h2>
                            <p className="leading-relaxed text-base p-2">
                                Le matériel est mis en vente sur la boutique en ligne ainsi que sur <a href={""}
                                                                                                          className={""}>Leboncoin</a>.
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full flex-col xl:flex-row">
                        <div className="w-full p-2 flex bg-gray-100 rounded-lg gap-4">
                            <img className="w-24 sm:w-32 md:w-48 lg:w-52 rounded object-contain object-left-top" src={stepVendu}
                                 alt="Matériel vendu"/>
                            <div className={""}>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Etape
                                    5</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Matériel vendu</h2>
                                <p className="leading-relaxed text-base p-2">
                                    Lorsque le matériel est vendu vous recevez un mail avec le détail du calcul de votre
                                    gain selon nos conditions contractuelles.
                                </p>
                            </div>
                        </div>

                        <div className="divider xl:divider-horizontal">OU</div>

                        <div className="w-full p-2 flex bg-gray-100 rounded-lg gap-4">
                            <img className="w-24 sm:w-32 md:w-48 lg:w-52 rounded object-contain object-left-top" src={stepRetry}
                                 alt="Matériel non vendu"/>
                            <div className={""}>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Etape
                                    5</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Matériel non
                                    vendu</h2>
                                <p className="leading-relaxed text-base p-2">
                                    Si après 3 mois le matériel n'est pas vendu, vous pouvez choisir de le récupérer
                                    avec facturation des prestations de nettoyage (étape 3) ainsi que le coût des
                                    éventuels upgrade matériel.
                                    <br/>
                                    Vous pouvez également choisir de le céder afin que je le laisse en vente en
                                    diminuant le prix et donc votre rétribution.
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

                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path
                                    d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed text-lg">
                                En tant que professionnel dans l'informatique depuis 25 ans je ne peux pas accepter
                                que <b>Microsoft décide de rendre obsolète
                                des millions d'ordinateurs</b> en les empéchants de se mettre à jour sur la dernière
                                version de Windows en Octobre 2025 sans proposer une solution alternative et ainsi <b>éviter
                                que ces machines ne finissent
                                en déchéterie</b> alors qu'elles sont encore largement utilisable!<br/>
                                Je vais donc vous proposez cette solution alternative!<br/>
                                En vous proposant de <b>revaloriser vos machines</b> et <b>en installant un système
                                Linux</b> afin de <b>revendre les matériels à prix très abordable</b>.<br/>
                                Mon ambition est également de <b>démocratiser l'utilisation de Linux auprés du grand
                                public</b> en produisant un <b>guide pour une utilisation basique</b> de ce
                                système qui peut faire peur mais qui pourtant n'a absolument pas à rougir face à
                                Windows.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-primary mt-8 mb-6"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Cyril
                                Tonneville</h2>
                            <p className="text-gray-500">Créateur d'IT-RECO</p>
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
                                    <h2 className="text-lg title-font font-medium mb-3">Economique</h2>
                                    <p className="leading-relaxed text-base">
                                        Votre parc obsolète est revalorisé et peut vous rapporter de l'argent au lieu de
                                        prendre la poussière dans un placard ou d'être mis à la poubelle
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 lg:w-1/3 flex flex-col text-center items-center">
                                <div
                                    className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5 flex-shrink-0">
                                    <FontAwesomeIcon icon={faLeaf} size={"2xl"}></FontAwesomeIcon>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-lg title-font font-medium mb-3">Ecologique</h2>
                                    <p className="leading-relaxed text-base">
                                        En achetant de l'occasion revalorisée on évite d'allourdir notre empreinte carbone dûe à
                                        la création d'un nouveau matériel. Saviez-vous que plusieurs centaines de kilos
                                        de matériaux, de litres d'eau et de matières toxiques sont nécessaires pour la
                                        production de seulement quelques kilos de matériels informatiques ?
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/3 flex flex-col text-center items-center">
                                <div
                                    className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5 flex-shrink-0">
                                    <FontAwesomeIcon icon={faRecycle} size={"2xl"}></FontAwesomeIcon>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-lg title-font font-medium mb-3">Solidaire</h2>
                                    <p className="leading-relaxed text-base">
                                        Devenez acteur de l’économie circulaire.<br/>
                                        Les ordinateurs d'entreprise sont généralement plus performant que ceux vendu au
                                        grand publique non spécialisé. En permettant la revente de vos anciens matériels
                                        vous permettez au plus grand nombre d'acquérir du matériel plus performant pour
                                        moins cher.
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

                    <div className="flex flex-wrap justify-around gap-4 lg:gap-6 w-full mb-4">
                        <a href={"https://www.tibelec.fr"} target={"_blank"} className={"w-full md:basis-1/3 lg:basis-1/5 flex justify-center"}>
                            <figure>
                                <img src={tibelec} alt="Tibelec S.A." />
                            </figure>
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 text-center w-full">
                        <span className={"font-bold text-xl"}>Vous ?</span>

                        <div className={"w-full"}>
                            <Link smooth spy to={"section-contact"} className={"btn btn-primary btn-sm mt-2"}>Contactez-moi</Link>
                        </div>
                    </div>

                    {/*#TODO*/}
                </div>
            </section>

            <section className="body-font min-h-64" id={"section-boutique"}>
                <div className="container px-4 py-6 mx-auto">
                    <div className="w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Boutique</h1>
                        <div className="h-1 w-20 bg-primary rounded"></div>
                    </div>

                    <BoutiquePreview />
                </div>
            </section>

            <section className="body-font min-h-64 bg-emerald-50" id={"section-contact"}>
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
                                <span
                                    className={"flex justify-center border border-primary rounded-xl btn-xl w-full p-4 text-2xl"}>
                                    contact@it-reco.fr
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="body-font min-h-64" id={"section-stats"}>
                <div className="container py-6 px-4 mx-auto">
                    <div className="w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Quelques statistiques</h1>
                        <div className="h-1 w-20 bg-primary rounded"></div>
                    </div>

                    <div className="flex flex-col sm:flex-row w-full gap-4">
                        <div className="p-6 w-full sm:w-1/4 w-1/2 text-center border border-primary rounded-xl hover:bg-slate-100">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1</h2>
                            <p className="leading-relaxed">Entreprises convaincues</p>
                        </div>

                        <div className="p-4 w-full sm:w-1/4 w-1/2 text-center border border-primary rounded-xl hover:bg-slate-100">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1</h2>
                            <p className="leading-relaxed">Matériels revalorisés</p>
                        </div>

                        <div className="p-4 w-full sm:w-1/4 w-1/2 text-center border border-primary rounded-xl hover:bg-slate-100">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1</h2>
                            <p className="leading-relaxed">Matériels vendus</p>
                        </div>

                        <div className="p-4 w-full sm:w-1/4 w-1/2 text-center border border-primary rounded-xl hover:bg-slate-100">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">0</h2>
                            <p className="leading-relaxed">Guides téléchargés *</p>
                            <span className={"text-sm text-slate-500"}>* Bientot disponible</span>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;