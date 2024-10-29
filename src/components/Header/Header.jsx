import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="flex items-center justify-center gap-6 p-6 ">
                <h2 className="text-2xl font-bold">Rest Meal</h2>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/meals">Our Meals</Link>
            </nav>
        </div>
    );
};

export default Header;