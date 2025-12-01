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

const Partenaire = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

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
        <section className="body-font bg-emerald-50" id={"section-partenaire"}>
            <div className="container py-12 mx-auto px-4">
                <div className="flex flex-wrap w-full mb-12">
                    <div className="w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">En collaboration avec ...</h1>
                        <div className="h-1 w-20 bg-primary rounded"></div>
                    </div>

                    {!loading &&
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
                                {/* Image Gallery */}
                                <div className="grid grid-cols-2 gap-3">
                                    <img src={etagere1} alt="Etagère PC 1" className="w-full h-56 object-cover rounded-lg shadow-sm" />
                                    <img src={etagere2} alt="Etagère PC 2" className="w-full h-56 object-cover rounded-lg shadow-sm" />
                                    <img src={etagere3} alt="Etagère PC 3" className="w-full h-56 object-cover rounded-lg shadow-sm" />
                                    <img src={etagere4} alt="Etagère PC 4" className="w-full h-56 object-cover rounded-lg shadow-sm" />
                                </div>

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
                            </div>
                        </div>
                    }

                    {/* Bottom Section: Vision */}
                    <div className="w-full mt-12 bg-white/50 rounded-2xl p-8 border border-white shadow-sm backdrop-blur-sm">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Une synergie locale pour votre satisfaction</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Travailler avec un professionnel de l'informatique situé sur Lesquin, c'est l'assurance d'un service de proximité, réactif et humain.
                                En collaborant avec Serre-Vis Informatique, nous garantissons une expertise technique pointue et un suivi personnalisé pour tous vos besoins informatiques.
                                Cette synergie locale permet de réduire les délais d'intervention et de favoriser l'économie circulaire au sein de la métropole lilloise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Partenaire;