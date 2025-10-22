import React, {useEffect, useState} from 'react';
import backApi from "../services/backApi.jsx";
import {BACK_URL} from "../config.js";

const ALaUne = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))

        setLoading(false)
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/actualite')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            {(!loading && datas.length !== 0) &&
            <section className="body-font bg-emerald-50 min-h-64" id={"section-actualite"}>
                <div className="container py-6 px-4 mx-auto">
                    <div className="w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Actualités</h1>
                        <div className="h-1 w-20 bg-primary rounded"></div>
                    </div>

                    {datas.map(d =>
                        <div className="w-full grid grid-cols-6 gap-4" key={d.id}>
                            <div className={"col-span-6 sm:col-span-4"}>
                                <h2 className={"h2 text-2xl font-bold title-font mb-2"}>{d.title}</h2>
                                <div className={"w-full"} dangerouslySetInnerHTML={{__html: d.description}}/>
                            </div>

                            <div className={"col-span-6 sm:col-span-2 p-4 border-2 shadow-xl bg-white"}>
                                <a href={BACK_URL + '/uploads/images/' + d.affiche} target={"_blank"}>
                                    <img src={BACK_URL + '/uploads/images/' + d.affiche}
                                         className={"object-cover"}
                                         alt={d.title}
                                         />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            }
        </>
    );
};

export default ALaUne;