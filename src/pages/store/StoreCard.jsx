import React from 'react';
import {BACK_URL} from "../../config.js";
import {Link} from "react-router-dom";
import no_picture from "../../assets/no_picture.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const StoreCard = ({item}) => {
    return (
        <div className={"card bg-base-100 rounded-none shadow-md hover:shadow-xl transition border border-base-200"}>
            <figure className="relative">
                {typeof item.photos[0] !== 'undefined' ?
                    <img src={BACK_URL + '/uploads/images/' + item.photos[0].src}
                         alt={item.title}
                         className={"h-72 w-full object-cover rounded-none"}
                         data-id={item.photos[0]}
                    />
                    :
                    <img src={no_picture}
                         alt={item.title}
                         className={"h-72 w-full object-cover rounded-none"}
                    />
                }
                <div className={`badge badge-${item.sticker.bgColor} ${item.sticker.textColor} rounded-none absolute top-2 left-2`}>
                    {item.sticker.title}
                </div>
            </figure>
            <div className="card-body">
                <Link to={"/store/"+item.id} className="card-title text-lg hover:underline">{item.title}</Link>

                {item.refItReco !== '' &&
                    <p className="text-sm text-gray-500">Code produit : {item.refItReco}</p>
                }
                {item.codeProduit !== '' &&
                    <p className="text-sm text-gray-500">Modèle : {item.codeProduit}</p>
                }
                <div className="flex items-center mt-3">
                    {(item.promotion !== null && item.promotion !== '') &&
                        <span className="me-4 font-bold text-2xl text-primary">{item.promotion} € TTC</span>
                    }
                    <span className={`${(item.promotion !== null && item.promotion !== '') ? 'line-through text-black text-lg' : 'text-primary font-bold text-2xl'}`}>{item.price} € TTC</span>
                </div>

                <div className="flex w-full justify-end">
                    <Link to={"/store/"+item.id} className="btn btn-primary btn-sm">
                        <FontAwesomeIcon icon={faPlusCircle} className={"me-2"}></FontAwesomeIcon>Plus de détails
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StoreCard;