import React, {useState} from 'react';
import imprimante01 from "../../assets/boutique/hp_E60155_01.jpg"
import imprimante02 from "../../assets/boutique/hp_E60155_02.jpg"
import imprimante03 from "../../assets/boutique/hp_E60155_03.jpg"
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGears} from "@fortawesome/free-solid-svg-icons";

const BoutiquePreview = () => {
    const [image, setImage] = useState(imprimante01)

    const showModal = (e) => {
        e.preventDefault()
        const dialog = document.getElementById('card-modal-'+e.currentTarget.getAttribute('data-id'));
        dialog.showModal()
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 text-center w-full">
            {/*<span className={"font-bold text-xl"}>Aucune offre pour le moment</span>*/}
            <div className="card bg-base-100 md:basis-1/2 xl:basis-1/4 shadow-xl">
                <figure className="px-0 pt-0">
                    <img
                        src={imprimante01}
                        alt="Imprimante HP LaserJet Managed E60155"
                        data-id={"imprimante01"}
                        onClick={showModal}
                        className="rounded-tl-xl rounded-tr-xl" />
                </figure>

                <dialog id={`card-modal-imprimante01`} className={"modal px-4"}>
                    <div className={"modal-box p-0 m-4 min-w-full xl:min-w-[75%] min-h-[50%]"}>
                        <div
                            className={"w-full p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                            <FontAwesomeIcon icon={faGears} className={"me-2"}></FontAwesomeIcon> Imprimante HP LaserJet Managed E60155 - 150 €
                        </div>

                        <div className={"py-4 px-4 w-full flex flex-row"} id={"card-modal-detail"}>
                            <div className={"flex flex-col gap-4 basis-1/4"}>
                                <figure className="cursor-pointer">
                                    <img
                                        src={imprimante01}
                                        alt="Imprimante HP LaserJet Managed E60155"
                                        onClick={() => setImage(imprimante01)}
                                    />
                                </figure>

                                <figure className="cursor-pointer">
                                    <img
                                        src={imprimante02}
                                        alt="Imprimante HP LaserJet Managed E60155"
                                        onClick={() => setImage(imprimante02)}
                                    />
                                </figure>

                                <figure className="cursor-pointer">
                                    <img
                                        src={imprimante03}
                                        alt="Imprimante HP LaserJet Managed E60155"
                                        onClick={() => setImage(imprimante03)}
                                    />
                                </figure>
                            </div>

                            <div className={"flex w-full basis-3/4 px-4 justify-center items-start"}>
                                <figure className="">
                                    <img
                                        src={image}
                                        alt="Imprimante HP LaserJet Managed E60155" />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

                <div className="card-body items-center">
                    <h2 className="card-title">Imprimante HP LaserJet Managed E60155</h2>

                    <span className={"w-full text-xl"}>150 €</span>

                    <ul className={"w-full text-start text-sm list-disc"}>
                        <li>Imprimante N&B</li>
                        <li>Vitesse d'impression 52ppm</li>
                        <li>Écran graphique couleur (CGD) tactile de 10,92 cm (4,3 pouces)</li>
                        <li>
                             Connectivité, standard: 1 port périphérique USB 2.0 haut débit; 2 ports USB 2.0 haut débit (hôte) ; 1 Gigabit Ethernet ; 1 compartiment d'intégration matérielle
                        </li>
                    </ul>
                    <div className="card-actions">
                        <Link smooth spy to={"section-contact"} className={"btn btn-primary mt-2"}>Contactez-moi</Link>
                    </div>
                </div>
            </div>

            {/*<div className={"flex md:basis-1/2 xl:basis-1/4 bg-red-500"}>*/}
            {/*    ICI LA PREVIEW*/}
            {/*</div>*/}

            {/*<div className={"flex md:basis-1/2 xl:basis-1/4 bg-red-500"}>*/}
            {/*    ICI LA PREVIEW*/}
            {/*</div>*/}
        </div>
    );
};

export default BoutiquePreview;