import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEnvelope, faGears, faInfoCircle, faPhone, faXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import backApiSerrevis from "../services/backApiSerrevis.jsx";
import HorairesSerreVisInformatique from "./HorairesSerreVisInformatique.jsx";

import etagere1 from "../assets/etagere_pc_01.jpg"
import etagere2 from "../assets/etagere_pc_02.jpg"
import etagere3 from "../assets/etagere_pc_03.jpg"
import etagere4 from "../assets/etagere_pc_04.jpg"
import benoit from "../assets/serrevis-informatique-benoit.jpg"

const InfoSerreVisInformatique = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    const showModal = (e) => {
        e.preventDefault()

        const dialog = document.getElementById('infos-serrevis');
        dialog.showModal();
    }

    const closeModal = (e) => {
        e.preventDefault()

        const dialog = document.getElementById('infos-serrevis');
        dialog.close();
    }

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApiSerrevis.apiFetch('/api/datas')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-full mb-6">
            <p className={"w-full p-4 border-primary border-2 rounded-2xl"}>
                <span className={"text-2xl text-secondary"}><FontAwesomeIcon icon={faInfoCircle} className={"me-2"}></FontAwesomeIcon></span>Les PCs sont visible et testable à l'atelier Serre-Vis informatique à Lesquin<br />
                <span className={"border-b cursor-pointer hover:font-bold"} onClick={showModal}>
                    <FontAwesomeIcon icon={faChevronRight} className={"me-1"}></FontAwesomeIcon>En savoir plus
                </span>
            </p>

            <dialog id={"infos-serrevis"} className={"modal"}>
                <div className={"modal-box p-0 m-4 min-w-[90%] lg:min-w-[80%] max-w-6xl bg-emerald-50"}>
                    <div className={"w-full flex justify-between p-4 bg-white border-b border-gray-200 sticky top-0 z-50 items-center shadow-sm"}>
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <FontAwesomeIcon icon={faGears} className="text-primary" />
                            <span>Les PCs sont visibles et testables à l'atelier</span>
                        </h2>

                        <button type={"button"}
                            className={"btn btn-sm btn-circle btn-ghost"}
                            onClick={closeModal}>
                            <FontAwesomeIcon icon={faXmark} className="text-xl" />
                        </button>
                    </div>

                    {!loading &&
                        <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(100vh-100px)]">
                            <div className="flex flex-col lg:flex-row gap-8 w-full">
                                {/* Left Column: Partner Card */}
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-white rounded-2xl shadow-lg p-6 h-full border border-gray-100">
                                        <div className="flex flex-col lg:flex-row gap-6 mb-8 items-center lg:items-start">
                                            <div className="w-full lg:flex-1 space-y-4">
                                                <div className="border-b border-gray-100 pb-4 mb-4">
                                                    <h2 className="text-2xl font-bold text-gray-900">Serre-Vis Informatique</h2>
                                                    <h3 className="text-lg text-primary font-medium">Benoit Ricou</h3>
                                                </div>

                                                {datas.adresse.length > 0 &&
                                                    <div className="flex items-start gap-3 text-gray-600">
                                                        <div className="mt-1 w-6 flex justify-center text-primary">
                                                            <FontAwesomeIcon icon={faLocationDot} />
                                                        </div>
                                                        <div dangerouslySetInnerHTML={{ __html: datas.adresse }} />
                                                    </div>
                                                }
                                                {datas.telephone.length > 0 &&
                                                    <div className="flex items-center gap-3 text-gray-600">
                                                        <div className="w-6 flex justify-center text-primary">
                                                            <FontAwesomeIcon icon={faPhone} />
                                                        </div>
                                                        <span className="font-medium">{datas.telephone}</span>
                                                    </div>
                                                }
                                                {datas.mail.length > 0 &&
                                                    <div className="flex items-center gap-3 text-gray-600">
                                                        <div className="w-6 flex justify-center text-primary">
                                                            <FontAwesomeIcon icon={faEnvelope} />
                                                        </div>
                                                        <a href={`mailto:${datas.mail}`} className="hover:text-primary transition-colors">{datas.mail}</a>
                                                    </div>
                                                }
                                            </div>
                                            <div className="shrink-0">
                                                <img src={benoit} alt="Benoit Ricou" className="rounded-xl shadow-md object-cover h-64 w-64" />
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-xl p-4">
                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                Horaires d'ouverture
                                            </h4>
                                            <HorairesSerreVisInformatique />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Gallery & Features */}
                                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                                    {/* Feature Card */}
                                    <div className="bg-white border-l-4 border-primary rounded-r-xl shadow-md p-6 flex items-start gap-4">
                                        <div className="text-primary text-3xl">
                                            <FontAwesomeIcon icon={faGears} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Visibles et Testables</h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                Les PC reconditionnés par IT-RECO sont exposés directement chez Serre-Vis Informatique.
                                                Venez les découvrir et tester leur performance sur place avant de vous décider.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image Gallery */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <img src={etagere1} alt="Etagère PC 1" className="w-full h-48 object-cover rounded-lg shadow-sm" />
                                        <img src={etagere2} alt="Etagère PC 2" className="w-full h-48 object-cover rounded-lg shadow-sm" />
                                        <img src={etagere3} alt="Etagère PC 3" className="w-full h-48 object-cover rounded-lg shadow-sm" />
                                        <img src={etagere4} alt="Etagère PC 4" className="w-full h-48 object-cover rounded-lg shadow-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default InfoSerreVisInformatique;