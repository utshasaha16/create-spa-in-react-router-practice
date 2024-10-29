import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
    const meals = useLoaderData();
    
    const {idMeal, strMeal, strCategory} = meals;
    
    return (
        <div>
            <h2>Meal: {idMeal}</h2>
            <p>{strCategory}</p>
        </div>
    );
};

export default MealDetails;