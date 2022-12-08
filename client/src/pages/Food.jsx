import React, { useEffect, useState } from 'react';
import foodData from '../service/food.service.js';

export default function Trainers() {
    const [food, setFood] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        foodData.getAllFood(keyword).then((response) => {
            console.log(response);
            setFood(response.data.result);
        });
    }, [keyword]);

    const searchData = (e) => {
        e.preventDefault();
        setKeyword(query);
        console.log(query);
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1
                        className="heading aos-init aos-animate mb-4 text-center"
                        data-aos="fade-up"
                    >
                        Food Calories
                    </h1>
                    <form
                        action="#"
                        className="narrow-w form-search d-flex justify-content-center align-items-stretch mb-4 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        onSubmit={searchData}
                    >
                        <input
                            type="text"
                            className="form-control search-input-food px-4"
                            placeholder="Check food calories here..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btn-search-trainer"
                        >
                            Search
                        </button>
                    </form>

                    <div className="row justify-content-center">
                        {food.map((food) => (
                            <div className="col-md-4 mb-4">
                                <div className="card bg-light w-100 card-list-trainer">
                                    <div className="card-body">
                                        <p className="text-center">
                                            {food.name}
                                        </p>
                                        <img
                                            src={`https://raw.githubusercontent.com/ayuubb/img-project/main/food/${food.id}.png`}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <p className="card-desc px-4 py-2">
                                            <p className="card-desc-total">
                                                Total Calories :{' '}
                                                {food.total_kalori}
                                            </p>
                                            <p>{food.carbs} Carbs</p>
                                            <p>{food.fat} Fat</p>
                                            <p>{food.protein} Protein</p>
                                        </p>
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
