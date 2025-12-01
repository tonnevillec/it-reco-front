import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import StoreDetails from "./storeDetails.jsx";
import {useScrollToAnchor} from "../../hook/useScrollToAnchor.jsx";
import backApi from "../../services/backApi.jsx";
import StoreCard from "./StoreCard.jsx";
import Pagination from "../../components/Pagination.jsx";
import MultiSelect from "../../components/MultiSelect.jsx";
import DisclaimerBoutique from "../boutique/DisclaimerBoutique.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import InfoSerreVisInformatique from "../InfoSerreVisInformatique.jsx";

const Store = () => {
    const params = useParams();

    return (
        <div className={"w-full pt-24 lg:pt-8 px-8"} id={'top'}>
            <div className="w-full mb-6">
                <div className={"w-full flex justify-between"}>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Boutique</h1>
                    <Link to={'/'} className={"btn btn-ghost"}>
                        <FontAwesomeIcon icon={faHome} className={"me-2"}></FontAwesomeIcon> Accueil
                    </Link>
                </div>

                <div className="h-1 w-20 bg-primary rounded"></div>
            </div>



            {params.id === "" || typeof params.id === 'undefined' ? <StoreSearch/> : <StoreDetails/>}
        </div>
    );
};

export default Store;

const StoreSearch = () => {
    useScrollToAnchor('top');
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    const [filteredDatas, setFilteredDatas] = useState([]);
    const [search, setSearch] = useState({
        search_word: '',
        search_categorie: [],
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(parseInt('25'))

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))

        setLoading(false)
    }, []);

    useEffect(() => {
        setLoading(true)

        if(datas.length > 0) {
            filterDatas()
        }
        setLoading(false)
    }, [search])

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/boutique')
            setDatas(d)

            if(d.length > 0) {
                setFilteredDatas(d.filter(
                    r =>
                        (
                            r.title.toString().toLowerCase().includes(search.search_word.toString().toLowerCase()) ||
                            r.description.toString().toLowerCase().includes(search.search_word.toString().toLowerCase())
                        )
                    &&
                        (
                            search.search_categorie.length === 0 ||
                            search.search_categorie.filter(c => {
                                if((r.sticker.id === c.id)){
                                    return r;
                                }
                            }).length > 0
                        )
                    )
                )
            } else {
                setFilteredDatas([])
            }
        } catch (error) {
            console.error(error)
        }
    }

    const filterDatas = () => {
        setFilteredDatas(datas.filter(
            r =>
                (
                    r.title.toString().toLowerCase().includes(search.search_word.toString().toLowerCase()) ||
                    r.description.toString().toLowerCase().includes(search.search_word.toString().toLowerCase())
                )
            &&
                (
                    search.search_categorie.length === 0 ||
                    search.search_categorie.filter(c => {
                        if((r.sticker.id === c.id)){
                            return r;
                        }
                    }).length > 0
                )
            )
        )
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.currentTarget

        setCurrentPage(1);

        setSearch({...search, [name]: value})
    }

    const handleMulti = (newValue, e) => {
        const r = []
        const {name} = e

        if(newValue.length > 0) {
            newValue.map(v => {
                r.push(v)
            })
        }

        setCurrentPage(1);

        setSearch({...search, [name]: r})
    }

    const handleReset = (e) => {
        e.preventDefault()

        setSearch({
            ...search,
            search_word: '',
            search_categorie: []
        })

        setCurrentPage(1);
    }

    const handlePerPage = ({currentTarget}) => {
        setItemsPerPage(parseInt(currentTarget.value))
    }

    const paginated = Pagination.getData(filteredDatas, currentPage, itemsPerPage);

    return (
        <section className={"pt-8 px-2 w-full mb-8"}>

            <InfoSerreVisInformatique />

            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className={"w-full lg:col-span-3 bg-white"}>
                    <div className={"border-primary border-2 h-72 p-4 rounded-tl-3xl rounded-br-3xl mb-4"}>
                        <h2 className={"lg:text-xl uppercase text-center w-full mb-8 border-b-2"}>Rechercher un produit :</h2>

                        <fieldset className="fieldset mb-4">
                            <legend className="fieldset-legend">Chercher une référence</legend>
                            <input type="text"
                                   className={"input w-full input-sm input-bordered"}
                                   placeholder="Désignation, modèle, ..."
                                   id={"search_word"}
                                   name={"search_word"}
                                   defaultValue={search.search_word}
                                   onChange={handleChange}
                            />
                        </fieldset>

                        <MultiSelect
                            id={"search_categorie"}
                            name={"search_categorie"}
                            label={"Catégories"}
                            onChange={handleMulti}
                            selectedValue={search.search_categorie}
                            endpoint={'/api/categories'}
                            containerClass={""}
                        />

                        <div className={"w-full flex justify-between mt-4 lg:mt-8"}>
                            <div className={""}>
                                {(search.search_word !== '' || search.search_categorie.length !== 0) &&
                                    <button type={"button"} className={"btn btn-xs btn-outline"} onClick={handleReset}>Réinitialiser les filtres</button>
                                }
                            </div>

                            <label htmlFor="itemsPerPage">
                                <span className="me-2 text-sm">Afficher</span>
                                <select id="itemsPerPage"
                                        name="itemsPerPage"
                                        className={"px-2 py-1 text-sm bg-white select select-sm select-bordered w-20"}
                                        defaultValue={itemsPerPage}
                                        onChange={handlePerPage}>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="75">75</option>
                                    <option value="100">100</option>
                                </select>
                                <span className="ms-2 text-sm">éléments</span>
                            </label>
                        </div>
                    </div>

                    <DisclaimerBoutique />
                </div>

                <div className={"w-full lg:col-span-9"}>
                    <div className={"w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"}>
                        {(!loading && filteredDatas.length > 0) && paginated.map(d =>
                            <StoreCard item={d} key={d.id} />
                        )}
                    </div>

                    <div className={"w-full mt-4"}>
                        {itemsPerPage < filteredDatas.length &&
                            <Pagination currentPage={currentPage}
                                        itemsPerPage={itemsPerPage}
                                        length={filteredDatas.length}
                                        onPageChanged={handlePageChange}
                            />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}