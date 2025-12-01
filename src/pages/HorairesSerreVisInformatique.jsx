import React, {useEffect, useState} from 'react';
import backApiSerrevis from "../services/backApiSerrevis.jsx";

const HorairesSerreVisInformatique = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApiSerrevis.apiFetch('/api/horaires')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <table className={"table"}>
            <tbody>
            {!loading && datas.map(d =>
                <tr key={d.id}>
                    <td>{d.jour} :</td>
                    <td>{d.matin}</td>
                    <td>{d.apm}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default HorairesSerreVisInformatique;