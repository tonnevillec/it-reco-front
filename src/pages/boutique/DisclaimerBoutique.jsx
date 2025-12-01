import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faGears, faInfoCircle, faXmark} from "@fortawesome/free-solid-svg-icons";
import legals from "../../assets/legals.png";

const DisclaimerBoutique = () => {
    const showModal = (e) => {
        e.preventDefault()

        const dialog = document.getElementById('disclaimer-boutique');
        dialog.showModal();
    }

    const closeModal = (e) => {
        e.preventDefault()

        const dialog = document.getElementById('disclaimer-boutique');
        dialog.close();
    }

    return (
        <div className="w-full mb-6">
            <p className={"w-full p-4 border-primary border-2 rounded-2xl"}>
                <span className={"text-2xl text-secondary"}><FontAwesomeIcon icon={faInfoCircle} className={"me-2"}></FontAwesomeIcon></span>La Sécurité IT-RECO : 3 Mois de Garantie Inclus<br/>
                <span className={"border-b cursor-pointer hover:font-bold"} onClick={showModal}>
                    <FontAwesomeIcon icon={faChevronRight} className={"me-1"}></FontAwesomeIcon>En savoir plus
                </span>
            </p>

            <dialog id={"disclaimer-boutique"} className={"modal"}>
                <div className={"modal-box p-0 m-4 min-w-[80%] min-h-[80%]"}>
                    <div
                        className={"w-full flex justify-between p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                        <h2>
                            <FontAwesomeIcon icon={faGears} className={"me-2"}></FontAwesomeIcon>La Sécurité IT-RECO : 3 Mois de Garantie Inclus
                        </h2>

                        <button type={"button"}
                                className={"lg:hidden btn btn-xs btn-secondary me-4"}
                                onClick={closeModal}>
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </button>
                    </div>

                    <div className={"py-4 px-8 grid xl:grid-cols-3 xl:gap-4"}>
                        <div className={"xl:col-span-2 w-full text-justify"}>
                            <p className={"mb-2"}>
                                Contrairement à la vente entre particuliers risquée, <span className={"font-bold"}>IT-RECO engage sa responsabilité</span>.<br/>
                                Tous nos ordinateurs sont vendus avec une <span className={"font-bold"}>Garantie Commerciale de 3 mois</span> (pièces et main-d'œuvre).<br/>
                                Vous bénéficiez également des garanties légales de conformité et des vices cachés. <br/>
                                Achetez l'esprit tranquille.
                            </p>
                        </div>

                        <div className={"hidden xl:block col-span-1 w-full"}>
                            <img src={legals} className={"object-cover"} alt={"Image d'illustration"} />
                        </div>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default DisclaimerBoutique;