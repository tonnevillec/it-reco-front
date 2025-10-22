import BoutiquePreview from "./BoutiquePreview.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGears, faXmark} from "@fortawesome/free-solid-svg-icons";
import legals from "../../assets/legals.png"

const Boutique = ({leboncoin}) => {

    const showModal = (e) => {
        e.preventDefault()

        const dialog = document.getElementById('mentions-legales');
        dialog.showModal();
    }

    const closeModal = (e) => {
        e.preventDefault()

        const dialog = document.getElementById('mentions-legales');
        dialog.close();
    }

    return (
        <section className="body-font min-h-64" id={"section-boutique"}>
            <div className="container px-4 py-6 mx-auto">
                <div className="w-full mb-6">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Boutique</h1>
                    <div className="h-1 w-20 bg-primary rounded"></div>
                </div>

                <div className="w-full mb-6">
                    Le matériel proposé par IT-RECO est du <span className={"font-bold"}>matériel d'occasion</span>.<br/>
                    Celui-ci est cependant nettoyé, contrôlé et le cas échéant réparé et/ou mis à niveau. En cas de potentiels défauts identifiés, ceux-ci seront notifiés sur les annonces.<br/>
                    <span className={"border-b cursor-pointer hover:font-bold"} onClick={showModal}>En savoir plus</span>

                    <dialog id={"mentions-legales"} className={"modal"}>
                        <div className={"modal-box p-0 m-4 min-w-[80%] min-h-[80%]"}>
                            <div
                                className={"w-full flex justify-between p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                                <h2>
                                    <FontAwesomeIcon icon={faGears} className={"me-2"}></FontAwesomeIcon>Les différences entre "Occasion" et "Reconditionné"
                                </h2>

                                <button type={"button"}
                                        className={"lg:hidden btn btn-xs btn-secondary me-4"}
                                        onClick={closeModal}>
                                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                </button>
                            </div>

                            <div className={"py-4 px-8 grid xl:grid-cols-3 xl:gap-4"}>
                                <div className={"xl:col-span-2 w-full text-justify"}>
                                    <h3 className={"font-bold text-lg w-full mb-4"}>Définition légale et fonctionnement</h3>

                                    <p className={"mb-2"}>
                                        Les produits d'occasion sont des articles qui ont déjà eu un premier usage mais qui ne sont pas remis en état systématiquement avant d’être revendus.
                                        Lorsqu'un consommateur achète un <span className={"font-bold"}>produit d'occasion</span>, que ce soit un téléphone portable, une voiture ou un vêtement, il l’acquiert « en l'état ».
                                        Le vendeur, particulier ou professionnel, <span className={"font-bold"}>n’a pas l'obligation d'offrir une garantie</span>.
                                        Les produits d'occasion peuvent être achetés directement de main à main ou sur des places de marché telles que Leboncoin ou Ebay.
                                    </p>
                                    <p className={"mb-2"}>
                                        <span className={"font-bold"}>Le reconditionné</span>, en revanche, <span className={"font-bold"}>implique une remise en état effectuée par des professionnels</span>.
                                        Après avoir subi un diagnostic et des tests, <span className={"font-bold"}>l’appareil reconditionné est généralement couvert par une garantie commerciale</span>.
                                        Celle-ci peut être de six mois à un an. Les produits reconditionnés, qu'il s'agisse d'un iPhone, d'un Samsung Galaxy ou d'un ordinateur, sont remis en état par des experts qui vérifient et, si nécessaire, remplacent des pièces défectueuses.
                                        Ce processus de reconditionnement assure une meilleure qualité par rapport aux produits d'occasion.
                                    </p>
                                    <p className={"mb-4 text-green-700 font-bold"}>
                                        Les produits proposés par IT-RECO sont donc des produits d'occasion mais ils sont cependant testés, nettoyés et, si besoin, réparé et/ou mis à niveau avant d'être revendu.
                                        En cas de défaut constaté, celui-ci sera indiqué sur la fiche du matériel vendu.
                                    </p>

                                    <h3 className={"font-bold text-lg w-full mb-4"}>La garantie</h3>
                                    <p className={"mb-2"}>
                                        Contrairement à l'achat en reconditionné, <span className={"font-bold text-red-500 border-b"}>l'occasion n'inclut pas de garantie</span>.
                                        En France, pour du matériel reconditionné, la garantie légale de conformité permet aux consommateurs de bénéficier d'un recours en cas de défaut affectant le produit dans les six mois suivant l'achat, et dans certains cas jusqu'à deux ans si le vendeur est un professionnel.
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

                <BoutiquePreview leboncoin={leboncoin} />
            </div>
        </section>
    );
};

export default Boutique;