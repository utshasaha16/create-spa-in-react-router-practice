import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {

    const meals = useLoaderData();
   

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-center text-2xl font-bold">Our meals: {meals.meals.length}</h2>
            <p className="text-xl font-semibold pb-6">Our Meal is here</p>
            <div className="grid grid-cols-2 gap-4 ">
                {
                    meals.meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;