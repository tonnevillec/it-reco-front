import React, {useEffect, useState} from 'react';
import imprimante01 from "../../assets/boutique/hp_E60155_01.jpg"
import imprimante02 from "../../assets/boutique/hp_E60155_02.jpg"
import imprimante03 from "../../assets/boutique/hp_E60155_03.jpg"

import pnySSD25001 from "../../assets/boutique/pny_ssd_250_01.jpg"
import pnySSD25002 from "../../assets/boutique/pny_ssd_250_02.jpg"

import pnyM225001 from "../../assets/boutique/pny_m2_250_01.jpg"
import pnyM225002 from "../../assets/boutique/pny_m2_250_02.jpg"

import pnyAdaptBaie01 from "../../assets/boutique/pny_adaptateur_baie_01.jpg"

import BoutiqueCard from "./BoutiqueCard.jsx";

const BoutiquePreview = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setDatas([
            {
                id: 1,
                categorie: "Imprimante reconditionné",
                shortDesc: "Imprimante N&B, Vitesse d'impression 52ppm, Connexion réseau",
                images: [
                    {
                        id: 1.1,
                        title: "Imprimante HP LaserJet Managed E60155",
                        lien: imprimante01
                    },
                    {
                        id: 1.2,
                        title: "Imprimante HP LaserJet Managed E60155",
                        lien: imprimante02
                    },
                    {
                        id: 1.3,
                        title: "Imprimante HP LaserJet Managed E60155",
                        lien: imprimante03
                    },
                ],
                etiquettes: [
                    {
                        id: "e1.1",
                        title: "Très bon",
                        couleur: "success",
                        textColor: "text-white"
                    },
                    {
                        id: "e1.2",
                        title: "Revalorisé",
                        couleur: "primary",
                        textColor: "text-white"
                    },
                ],
                etiqStars: 4,
                title: "Imprimante HP LaserJet Managed E60155",
                price: 150,
                description: `* Imprimante N&B<br/>
                        * Vitesse d'impression 52ppm<br/>
                        * Écran graphique couleur (CGD) tactile de 10,92 cm (4,3 pouces)<br/>
                        * Connectivité, standard: 1 port périphérique USB 2.0 haut débit; 2 ports USB 2.0 haut débit (hôte) ; 1 Gigabit Ethernet ; 1 compartiment d'intégration matérielle<br/>
                `
            },
            {
                id: 2,
                categorie: "Pièce ordinateur",
                shortDesc: "PNY CS900 SSD Interne SATA III, 2.5 Pouces, 250Go, Vitesse de Lecture jusqu'à 535MB/s",
                images: [
                    {
                        id: 2.1,
                        title: "Disque SSD 250Go, PNY, [NEUF]",
                        lien: pnySSD25001
                    },
                    {
                        id: 2.2,
                        title: "Disque SSD 250Go, PNY, [NEUF]",
                        lien: pnySSD25002
                    },
                ],
                etiquettes: [
                    {
                        id: "e2.1",
                        title: "Produit neuf",
                        couleur: "secondary",
                        textColor: "text-white"
                    }
                ],
                etiqStars: 5,
                title: "Disque SSD 250Go, PNY, [NEUF]",
                price: 18,
                description: "PNY CS900 SSD Interne SATA III, 2.5 Pouces, 250Go, Vitesse de Lecture jusqu'à 535MB/s"
            },
            {
                id: 3,
                categorie: "Pièce ordinateur",
                shortDesc: "PNY CS1030 250GB M.2 NVMe PCIe Gen3 x4, 2500MB/s Vitesse de Lecture, 1100MB/s Vitesse d'écriture",
                images: [
                    {
                        id: 3.1,
                        title: "Disque M.2 250Go, PNY, [NEUF]",
                        lien: pnyM225001
                    },
                    {
                        id: 3.2,
                        title: "Disque M.2 250Go, PNY, [NEUF]",
                        lien: pnyM225002
                    },
                ],
                etiquettes: [
                    {
                        id: "e3.1",
                        title: "Produit neuf",
                        couleur: "secondary",
                        textColor: "text-white"
                    }
                ],
                etiqStars: 5,
                title: "Disque M.2 250Go, PNY, [NEUF]",
                price: 20,
                description: "PNY CS1030 250GB M.2 NVMe PCIe Gen3 x4, 2500MB/s Vitesse de Lecture, 1100MB/s Vitesse d'écriture Internal Solid State Drive (SSD) Noir"
            },
            {
                id: 4,
                categorie: "Pièce ordinateur",
                shortDesc: "Adaptateur baie 3.5 vers 2.5",
                images: [
                    {
                        id: 4.1,
                        title: "Adaptateur baie 3.5 vers 2.5 pour SSD, PNY, [NEUF]",
                        lien: pnyAdaptBaie01
                    },
                ],
                etiquettes: [
                    {
                        id: "e4.1",
                        title: "Produit neuf",
                        couleur: "secondary",
                        textColor: "text-white"
                    }
                ],
                etiqStars: 5,
                title: "Adaptateur baie 3.5 vers 2.5 pour SSD, PNY, [NEUF]",
                price: 4,
                description: "Kit de transfert et adaptateur 3.5\" pour SSD <br/>" +
                    "Contient :<br/>* 1 adaptateur 2.5, Vis de montage, <br/>" +
                    "* Câble SATA III 6Gbp/s, Mini DVD Acronis True Image HD"
            },
        ])

        setLoading(false)
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 w-full">
            {/*<span className={"font-bold text-xl"}>Aucune offre pour le moment</span>*/}

            {!loading && datas.map(d =>
                <BoutiqueCard key={d.id}
                              id={d.id}
                              datas={d}
                />
            )}
        </div>
    );
};

export default BoutiquePreview;