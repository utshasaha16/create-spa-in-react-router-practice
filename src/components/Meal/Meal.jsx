import { Link } from "react-router-dom";

const Meal = ({meal}) => {
    console.log(meal);
    const {idMeal, strMeal, strMealThumb, strCategory, strArea} = meal;
    return (
        <div>
            <div className="p-4 border-2 rounded-xl space-y-3">
            <img className="w-full rounded-xl" src={strMealThumb} alt="" />
            <h2 className="text-2xl font-bold">{strMeal}</h2>
            <p className=" font-medium">Category: {strCategory}</p>
            <p className="font-medium">Area: {strArea}</p>
            <Link to={`/meal/${idMeal}`}>Meal Details</Link>
            </div>
        </div>
    );
};

export default Meal;