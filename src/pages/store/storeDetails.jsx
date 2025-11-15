import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import BackApi from "../../services/backApi.jsx";
import {BACK_URL} from "../../config.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReply, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useScrollToAnchor} from "../../hook/useScrollToAnchor.jsx";
import no_picture from "../../assets/no_picture.png";

const StoreDetails = () => {
    const params = useParams();
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const [currentImage, setCurrentImage] = useState({})

    useScrollToAnchor('top');

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, [])

    const fetchDatas = async () => {
        try {
            const d = await BackApi.apiFetch('/api/product/'+params.id);

            setItem(d)
            setCurrentImage(d.photos[0])
        } catch (error) {
            console.error(error)
        }
    }

    const showModal = (e) => {
        e.preventDefault()
        const dialog = document.getElementById(e.currentTarget.getAttribute('data-id'));
        dialog.showModal()
    }

    const closeModal = (e) => {
        e.preventDefault()

        const dialog =  document.getElementById(e.currentTarget.getAttribute('data-id'));
        dialog.close();
    }

    return (
        <section className={"pt-8 px-2 w-full"} id={"topX"}>
            {!loading &&
                <div
                    className="w-full bg-base-100 shadow-xl rounded-none p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">

                    <div className={"lg:col-span-5"}>
                        <figure className="rounded-none overflow-hidden">
                            {typeof currentImage !== 'undefined' ?
                                <img id="image-principale"
                                     src={BACK_URL + '/uploads/images/' + currentImage.src}
                                     alt={item.title}
                                     className="w-full h-96 object-contain"
                                     data-id={`boutique-card-${item.photos[0].id}`}
                                     onClick={showModal}
                                />
                                :
                                <img src={no_picture}
                                     alt={item.title}
                                     className={"w-full h-96 object-contain"}
                                />
                            }
                        </figure>
                        <div className="flex gap-3 mt-3 justify-center flex-wrap">
                            {item.photos.map(img =>
                                <img src={BACK_URL + '/uploads/images/' + img.src}
                                     key={img.id}
                                     className={"w-20 h-20 object-cover border rounded cursor-pointer hover:opacity-80 transition"}
                                     onClick={() => setCurrentImage(img)}
                                     alt={item.title}
                                />
                            )}
                        </div>

                        <dialog id={`boutique-card-${item.photos[0].id}`} className={"modal px-4"}>
                            <div className={"modal-box p-1 m-1 min-w-full"}>
                                <div className={"w-full flex justify-center lg:justify-end bg-white z-100"}>
                                    <button type={"button"}
                                            className={"btn btn-xs btn-secondary me-4"}
                                            data-id={`boutique-card-${item.photos[0].id}`}
                                            onClick={closeModal}>
                                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>Fermer
                                    </button>
                                </div>

                                <div className={"flex w-full flex-col lg:flex-row"}>
                                    <div className={"hidden w-full lg:flex flex-col gap-2 p-1 basis-1/4"}>
                                        {item.photos.map(i =>
                                            <figure className="cursor-pointer object-cover h-36 w-36" key={i.id}>
                                                <img
                                                    src={BACK_URL + '/uploads/images/' + i.src}
                                                    alt={item.title}
                                                    className={"h-36 w-36"}
                                                    onClick={() => setCurrentImage(i)}
                                                />
                                            </figure>
                                        )}
                                    </div>

                                    <div className="w-full flex justify-center">
                                        <figure className={"w-full h-[90%]"}>
                                            <img alt={currentImage.title}
                                                 className="object-cover object-center"
                                                 src={BACK_URL + '/uploads/images/' + currentImage.src}/>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>


                    <div className="flex flex-col justify-between lg:col-span-7">
                        <div>
                            <h1 className="text-3xl font-bold mb-2 text-black">{item.title}</h1>
                            <span className={`badge badge-${item.sticker.bgColor} ${item.sticker.textColor} mb-4`}>{item.sticker.title}</span>

                            {(item.refItReco !== null && item.refItReco !== '') && <p className={"small text-slate-400"}>Code produit: {item.refItReco}</p>}
                            {(item.codeProduit !== null && item.codeProduit !== '') && <p className={"small text-slate-400"}>Modèle: {item.codeProduit}</p>}
                            {(item.snProduit !== null && item.snProduit !== '') && <p className={"small text-slate-400"}>Tag: {item.snProduit}</p>}

                            <div className="prose max-w-none mt-4" dangerouslySetInnerHTML={{__html: item.description}}/>
                        </div>
                        <div className="mt-6">
                            <p className="text-3xl mb-4">
                                {(item.promotion !== null && item.promotion !== '') && <span className={"me-4 text-primary font-bold"}>{item.promotion} € TTC</span>}
                                <span className={`${(item.promotion !== null && item.promotion !== '') ? 'line-through text-black' : 'text-primary font-bold'}`}>{item.price} € TTC</span>
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link to={'/store'} className="btn btn-outline"><FontAwesomeIcon icon={faReply} className={"me-2"}></FontAwesomeIcon>Retour</Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default StoreDetails;