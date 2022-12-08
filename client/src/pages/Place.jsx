import React, { useEffect, useState } from 'react';
import Hero from '../assets/img/hero-trainer.png';
import PlaceData from '../service/place.service';

export default function Place() {
    const [place, setPlace] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        PlaceData.getAllPlace(keyword).then((response) => {
            console.log(response);
            setPlace(response.data.result);
            setData(response.data.result);
        });
    }, [keyword]);

    // const searchData = (e) => {
    //     e.preventDefault();
    //     setKeyword(query);
    //     console.log(query);
    // };

    const filterData = (item) => {
        const result = data.filter((data) => {
            return data.place == item;
        });
        setPlace(result);
    };

    const allData = () => {
        setPlace(data);
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center          ">
                <div className="col-md-6">
                    <h1
                        className="heading aos-init aos-animate title-team text-center"
                        data-aos="fade-up"
                    >
                        Sports Venue
                    </h1>
                </div>
                <div className="col-12 mb-2">
                    <div
                        className="dropdown text-start
                     ms-2"
                    >
                        <button
                            className="btn btn-place-dropdown dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Place
                        </button>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => allData()}
                                >
                                    All
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => filterData('surabaya')}
                                >
                                    surabaya
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => filterData('sidoarjo')}
                                >
                                    sidoarjo
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => filterData('malang')}
                                >
                                    malang
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => filterData('jakarta')}
                                >
                                    jakarta
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card card-list-trainer p-4">
                        {place.map((place) => (
                            <div className="card-body card-list-place mb-3">
                                <div className="d-md-flex align-items-center">
                                    <img
                                        src={`https://raw.githubusercontent.com/ayuubb/img-project/main/place/${place.id}.png`}
                                        alt={place.name}
                                        className="img-fluid img-place"
                                    />
                                    <div className="ms-4 w-100">
                                        <h5 className="card-title text-start mb-0 p-2">
                                            {place.name}
                                        </h5>
                                        <ul className="nav nav-divider">
                                            <li className="nav-item text-start p-2">
                                                {place.description}
                                            </li>
                                        </ul>
                                        <ul className="nav nav-divider justify-content-end w-100">
                                            <li className="nav-item">
                                                <a
                                                    href={place.direction}
                                                    className="btn-direction"
                                                    target="_blank"
                                                >
                                                    Direction
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
