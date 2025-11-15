import React, {useEffect, useState} from 'react';
import backApi from "../services/backApi.jsx";
import {BACK_URL} from "../config.js";

const Confiance = () => {
    const [datas, setDatas] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/confiance')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex flex-wrap justify-around gap-4 lg:gap-6 w-full mb-4">
            {!loading && datas.map(d =>
                <a href={`https://${d.website ? d.website : ''}`} target={"_blank"} className={"w-full md:basis-1/3 lg:basis-1/5 flex justify-center"} key={d.name}>
                    <figure>
                        <img src={`${BACK_URL}/uploads/images/${d.logo}`} alt={d.name} />
                    </figure>
                </a>
            )}
        </div>
    );
};

export default Confiance;