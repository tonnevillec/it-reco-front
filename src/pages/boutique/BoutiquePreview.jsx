import React, {useEffect, useState} from 'react';
import pcnat008_1 from "../../assets/boutique/pcnat008_1.png"
import pcnat008_2 from "../../assets/boutique/pcnat008_2.png"
import pcnat008_3 from "../../assets/boutique/pcnat008_3.png"
import pcnat008_4 from "../../assets/boutique/pcnat008_4.png"

import pcnat001_1 from "../../assets/boutique/pcnat001_1.png"
import pcnat001_2 from "../../assets/boutique/pcnat001_2.png"
import pcnat001_3 from "../../assets/boutique/pcnat001_3.png"
import pcnat001_4 from "../../assets/boutique/pcnat001_4.png"
import pcnat001_5 from "../../assets/boutique/pcnat001_5.png"

import pcnat002_1 from "../../assets/boutique/pcnat002_1.png"
import pcnat002_2 from "../../assets/boutique/pcnat002_2.png"
import pcnat002_3 from "../../assets/boutique/pcnat002_3.png"
import pcnat002_4 from "../../assets/boutique/pcnat002_4.png"
import pcnat002_5 from "../../assets/boutique/pcnat002_5.png"
import pcnat002_6 from "../../assets/boutique/pcnat002_6.png"

import pcnat003_1 from "../../assets/boutique/pcnat003_1.png"
import pcnat003_2 from "../../assets/boutique/pcnat003_2.png"
import pcnat003_3 from "../../assets/boutique/pcnat003_3.png"

import pcnat004_1 from "../../assets/boutique/pcnat004_1.jpg"
import pcnat004_2 from "../../assets/boutique/pcnat004_2.jpg"
import pcnat004_3 from "../../assets/boutique/pcnat004_3.jpg"
import pcnat004_4 from "../../assets/boutique/pcnat004_4.jpg"

import pcnat005_1 from "../../assets/boutique/pcnat005_1.jpg"
import pcnat005_2 from "../../assets/boutique/pcnat005_2.jpg"
import pcnat005_3 from "../../assets/boutique/pcnat005_3.jpg"
import pcnat005_4 from "../../assets/boutique/pcnat005_4.jpg"

import BoutiqueCard from "./BoutiqueCard.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const BoutiquePreview = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setDatas([
            {
                id: 1,
                categorie: "Unité centrale",
                shortDesc: "Hp Compaq Elite 8300 SFF i7-3770 16Go DDR3 SANS DISQUE",
                images: [
                    {
                        id: 1.1,
                        title: "Hp Compaq Elite 8300 SFF i7-3770 16Go DDR3 SANS DISQUE",
                        lien: pcnat008_1
                    },
                    {
                        id: 1.2,
                        title: "Hp Compaq Elite 8300 SFF i7-3770 16Go DDR3 SANS DISQUE",
                        lien: pcnat008_2
                    },
                    {
                        id: 1.3,
                        title: "Hp Compaq Elite 8300 SFF i7-3770 16Go DDR3 SANS DISQUE",
                        lien: pcnat008_3
                    },
                    {
                        id: 1.4,
                        title: "Hp Compaq Elite 8300 SFF i7-3770 16Go DDR3 SANS DISQUE",
                        lien: pcnat008_4
                    },
                ],
                etiquettes: [
                    {
                        id: "e1.1",
                        title: "Ancien PC pro",
                        couleur: "secondary",
                        textColor: "text-white"
                    }
                ],
                etiqStars: 1,
                title: "Disque SSD 250Go, PNY, [NEUF]",
                price: 45,
                description: `
                    Processeur i7-3770 @3.40Ghz<br/>
                    Mémoire 4*4Go DDR3<br/>
                    Vendu SANS DISQUE<br/>
                    <br/>
                    Fonctionne très bien mais comme indiqué, il est vieux
                `
            },
            {
                id: 2,
                categorie: "Unité centrale",
                shortDesc: "Hp EliteDesk 800 G4 Workstation Edition - Rx 580 - 16Go DDR4 - Win11",
                images: [
                    {
                        id: 2.1,
                        title: "Hp EliteDesk 800 G4 Workstation Edition - Rx 580 - 16Go DDR4 - Win11",
                        lien: pcnat001_1
                    },
                    {
                        id: 2.2,
                        title: "Hp EliteDesk 800 G4 Workstation Edition - Rx 580 - 16Go DDR4 - Win11",
                        lien: pcnat001_2
                    },
                    {
                        id: 2.3,
                        title: "Hp EliteDesk 800 G4 Workstation Edition - Rx 580 - 16Go DDR4 - Win11",
                        lien: pcnat001_3
                    },
                    {
                        id: 2.4,
                        title: "Hp EliteDesk 800 G4 Workstation Edition - Rx 580 - 16Go DDR4 - Win11",
                        lien: pcnat001_4
                    },
                    {
                        id: 2.5,
                        title: "Hp EliteDesk 800 G4 Workstation Edition - Rx 580 - 16Go DDR4 - Win11",
                        lien: pcnat001_5
                    },
                ],
                etiquettes: [
                    {
                        id: "e2.1",
                        title: "Ancien PC pro",
                        couleur: "secondary",
                        textColor: "text-white"
                    }
                ],
                etiqStars: 5,
                title: "Hp EliteDesk 800 G4 Workstation Edition - Rx 580 - 16Go DDR4 - Win11",
                price: 160,
                description: `
                Processeur i7-8700 vpro 3.2Ghz<br/>
                Ram 16Go DDR4 2666Mhz (1*16)<br/>
                SSD PNY 250Go NEUF<br/>
                Carte graphique Radeon  Rx 580<br/>
                Windows 11<br/>
                <br/>
                Traces/griffures sur le boîtier et facade légèrement adimée mais ne gene en rien son fonctionnement
                `
            },
            {
                id: 3,
                categorie: "Pièce ordinateur",
                shortDesc: "Dell Optiplex 3050 mini format i5-8500T 16Go DDR4 M.2 250Go",
                images: [
                    {
                        id: 3.1,
                        title: "Dell Optiplex 3050 mini format i5-8500T 16Go DDR4 M.2 250Go",
                        lien: pcnat002_1
                    },
                    {
                        id: 3.2,
                        title: "Dell Optiplex 3050 mini format i5-8500T 16Go DDR4 M.2 250Go",
                        lien: pcnat002_2
                    },
                    {
                        id: 3.3,
                        title: "Dell Optiplex 3050 mini format i5-8500T 16Go DDR4 M.2 250Go",
                        lien: pcnat002_3
                    },
                    {
                        id: 3.4,
                        title: "Dell Optiplex 3050 mini format i5-8500T 16Go DDR4 M.2 250Go",
                        lien: pcnat002_4
                    },
                    {
                        id: 3.5,
                        title: "Dell Optiplex 3050 mini format i5-8500T 16Go DDR4 M.2 250Go",
                        lien: pcnat002_5
                    },
                    {
                        id: 3.6,
                        title: "Dell Optiplex 3050 mini format i5-8500T 16Go DDR4 M.2 250Go",
                        lien: pcnat002_6
                    },
                ],
                etiquettes: [
                    {
                        id: "e3.1",
                        title: "Ancien PC pro",
                        couleur: "secondary",
                        textColor: "text-white"
                    }
                ],
                etiqStars: 5,
                title: "Dell Optiplex 3050 mini format i5-8500T 16Go DDR4 M.2 250Go",
                price: 120,
                description: "Utilisation bureautique<br/>" +
                    "Processeur i5-8500T 2.1Ghz<br/>" +
                    "Ram 16Go DDR4 2666Mhz (2*8)<br/>" +
                    "Disque M.2 250Go<br/>" +
                    "Windows 11<br/>" +
                    "PAS DE Wifi<br/>"
            },
            {
                id: 4,
                categorie: "Unité centrale",
                shortDesc: "Dell Optiplex 3050 i5-7500 16Go DDR4 SSD 250Go",
                images: [
                    {
                        id: 4.1,
                        title: "Dell Optiplex 3050 i5-7500 16Go DDR4 SSD 250Go",
                        lien: pcnat003_1
                    },
                    {
                        id: 4.2,
                        title: "Dell Optiplex 3050 i5-7500 16Go DDR4 SSD 250Go",
                        lien: pcnat003_2
                    },
                    {
                        id: 4.3,
                        title: "Dell Optiplex 3050 i5-7500 16Go DDR4 SSD 250Go",
                        lien: pcnat003_3
                    },
                ],
                etiquettes: [
                    {
                        id: "e4.1",
                        title: "Ancien PC pro",
                        couleur: "secondary",
                        textColor: "text-white"
                    }
                ],
                etiqStars: 4,
                title: "Dell Optiplex 3050 i5-7500 16Go DDR4 SSD 250Go",
                price: 100,
                description: "Processeur i5-7500  @3.40Ghz" +
                    "<br/>" +
                    "Ram 16Go DDR4 2*8 2400Mhz<br/>" +
                    "SSD PNY 250Go Neuf<br/>" +
                    "Windows 11<br/>" +
                    "Pas de wifi<br/>"
            },
            {
                id: 5,
                categorie: "Unité centrale",
                shortDesc: "Hp Z230 Tower Wokrstation Xeon E3-1225 v3 3,2Ghz 32Go DDR3 Nvidia Quadro K600",
                images: [
                    {
                        id: 5.1,
                        title: "Hp Z230 Tower Wokrstation Xeon E3-1225 v3 3,2Ghz 32Go DDR3 Nvidia Quadro K600",
                        lien: pcnat004_1
                    },
                    {
                        id: 5.2,
                        title: "Hp Z230 Tower Wokrstation Xeon E3-1225 v3 3,2Ghz 32Go DDR3 Nvidia Quadro K600",
                        lien: pcnat004_2
                    },
                    {
                        id: 5.3,
                        title: "Hp Z230 Tower Wokrstation Xeon E3-1225 v3 3,2Ghz 32Go DDR3 Nvidia Quadro K600",
                        lien: pcnat004_3
                    },
                    {
                        id: 5.4,
                        title: "Hp Z230 Tower Wokrstation Xeon E3-1225 v3 3,2Ghz 32Go DDR3 Nvidia Quadro K600",
                        lien: pcnat004_4
                    },
                ],
                etiquettes: [
                    {
                        id: "e5.1",
                        title: "Ancien PC pro",
                        couleur: "secondary",
                        textColor: "text-white"
                    }
                ],
                etiqStars: 4,
                title: "Hp Z230 Tower Wokrstation Xeon E3-1225 v3 3,2Ghz 32Go DDR3 Nvidia Quadro K600",
                price: 120,
                description: "Processeur Xeon E3-1225 v3 @3.2Ghz" +
                    "<br/>" +
                    "Ram 32Go DDR3 4*8 1600Mhz<br/>" +
                    "SSD PNY 250Go Neuf<br/>" +
                    "Carte graphique Nvidi quadro K600<br/>" +
                    "Ubuntu 24.04<br/>" +
                    "Pas de wifi<br/>"
            },
            {
                id: 6,
                categorie: "Unité centrale",
                shortDesc: "Dell Precision Tower 3620 i5-6500 8Go DDR4 SSD 250Go",
                images: [
                    {
                        id: 6.1,
                        title: "Dell Precision Tower 3620 i5-6500 8Go DDR4 SSD 250Go",
                        lien: pcnat005_1
                    },
                    {
                        id: 6.2,
                        title: "Dell Precision Tower 3620 i5-6500 8Go DDR4 SSD 250Go",
                        lien: pcnat005_2
                    },
                    {
                        id: 6.3,
                        title: "Dell Precision Tower 3620 i5-6500 8Go DDR4 SSD 250Go",
                        lien: pcnat005_3
                    },
                    {
                        id: 6.4,
                        title: "Dell Precision Tower 3620 i5-6500 8Go DDR4 SSD 250Go",
                        lien: pcnat005_4
                    },
                ],
                etiquettes: [
                    {
                        id: "e6.1",
                        title: "Ancien PC pro",
                        couleur: "secondary",
                        textColor: "text-white"
                    }
                ],
                etiqStars: 4,
                title: "Dell Precision Tower 3620 i5-6500 8Go DDR4 SSD 250Go",
                price: 80,
                description: "Processeur i5-6500 @3.2Ghz" +
                    "<br/>" +
                    "Ram 8Go DDR4 1*8 2133Mhz<br/>" +
                    "SSD PNY 250Go Neuf<br/>" +
                    "Ubuntu 24.04<br/>" +
                    "Pas de wifi<br/>" +
                    "<br/>" +
                    "2 disponibles<br/>"
            },
        ])

        setLoading(false)
    }, []);

    return ( <>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 w-full">
            {/*<span className={"font-bold text-xl"}>Aucune offre pour le moment</span>*/}

            {!loading && datas.map(d =>
                <BoutiqueCard key={d.id}
                              id={d.id}
                              datas={d}
                />
            )}
        </div>

        <div className={"flex w-full justify-around mt-4"}>
            <div className={"text-center"}>
            <a href={"https://www.leboncoin.fr/profile/3b5a040e-c5a9-4367-97d4-86b963ed252e/offers"}
               target={"_blank"}
               className={"flex justify-center border border-orange-500 text-orange-500 rounded-xl btn-xl w-full p-4 text-2xl"}>
               Visiter la boutique sur Leboncoin <FontAwesomeIcon icon={faExternalLink} className={"ms-2"}></FontAwesomeIcon>
            </a>
            </div>
        </div>
    </>
    );
};

export default BoutiquePreview;