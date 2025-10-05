import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Landing from "./Landing.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import backApi from "../services/backApi.jsx";

const Home = () => {
    const location = useLocation()
    const [datas, setDatas] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/datas')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div id={"page-container top"}
                 className={"mx-auto min-h-screen w-full"}
            >
                {!loading &&
                    <Navbar logo={datas.logo}/>
                }

                <main id={"page-content"}
                      className={"flex max-w-full flex-auto flex-col mt-20"}
                >
                    <div className="w-full min-h-screen">
                        {location.pathname === "/" ? <Landing/> : <Outlet/>}
                    </div>
                </main>
            </div>

            {!loading &&
                <Footer logo={datas.logo}
                        contact={datas.mail}
                        linkedin={datas.linkedin}
                        siret={datas.siret}
                />
            }

            <div className="footer bg-emerald-50 p-6 w-full flex justify-center border-t-2">
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </div>
        </>
    );
};

export default Home;