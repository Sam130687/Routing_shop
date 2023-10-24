import { useParams, useNavigate } from "react-router-dom";
import { getFilterCategory } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { MealsList } from "../components/MealList";

function Category () {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFilterCategory(name).then(data=> setMeals(data.meals));
    }, [name])

    return (
        <>
        <button className='btn' onClick={() => navigate(-1)}>Назад</button>
        {!meals.length ? <Preloader/> : <MealsList meals={meals}/>}
        </>
    )
}

export {Category}