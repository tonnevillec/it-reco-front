import BoutiquePreview from "./BoutiquePreview.jsx";
import DisclaimerBoutique from "./DisclaimerBoutique.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShop} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Boutique = ({leboncoin}) => {
    return (
        <section className="body-font min-h-64" id={"section-boutique"}>
            <div className="container px-4 py-6 mx-auto">
                <div className="w-full mb-6">
                    <div className={"w-full flex justify-between"}>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Boutique</h1>
                        <Link to={'/store'} className={"btn btn-ghost"}>
                            <FontAwesomeIcon icon={faShop} className={"me-2"}></FontAwesomeIcon> Voir tous les produits
                        </Link>
                    </div>

                    <div className="h-1 w-20 bg-primary rounded"></div>
                </div>

                <DisclaimerBoutique />

                <BoutiquePreview leboncoin={leboncoin} />
            </div>
        </section>
    );
};

export default Boutique;