import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Landing from "./Landing.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    const location = useLocation()

    return (
        <>
            <div id={"page-container top"}
                 className={"mx-auto min-h-screen w-full"}
            >
                <Navbar/>

                <main id={"page-content"}
                      className={"flex max-w-full flex-auto flex-col mt-20"}
                >
                    <div className="w-full min-h-screen">
                        {location.pathname === "/" ? <Landing/> : <Outlet/>}
                    </div>
                </main>
            </div>

            <Footer />

            <div className="footer bg-emerald-50 p-6 w-full flex justify-center border-t-2">
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </div>
        </>
    );
};

export default Home;