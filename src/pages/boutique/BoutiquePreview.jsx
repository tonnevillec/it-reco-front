import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import backApi from "../../services/backApi.jsx";
import StoreCard from "../store/StoreCard.jsx";

const BoutiquePreview = ({leboncoin}) => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))

        setLoading(false)
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/boutiqueForHome')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (<>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 w-full">
                {!loading && datas.map(d =>
                    <StoreCard item={d} key={d.id} />
                )}
            </div>

            {(typeof leboncoin !== 'undefined' && leboncoin !== null && leboncoin !== '') &&
                <div className={"flex w-full justify-around mt-4"}>
                    <div className={"text-center"}>
                        <a href={leboncoin}
                           target={"_blank"}
                           className={"flex justify-center border border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 rounded-none btn-xl w-full p-4 text-2xl"}>
                            Visiter la boutique sur Leboncoin <FontAwesomeIcon icon={faExternalLink} className={"ms-2"}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            }
        </>
    );
};

export default BoutiquePreview;