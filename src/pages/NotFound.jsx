import { Link } from "react-router-dom";
import NotFoundImage from '../assets/images/notFound.gif';

export default function NotFound() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-red-400">404</h1>
                <h2 className="text-3xl lg:text-4xl font-semibold mt-6 text-gray-700">
                    Oops! Page not found
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <Link to="/" className="mt-6 inline-block px-4 py-2 text-lg font-medium text-white bg-red-400 rounded-md hover:bg-red-500 transition duration-300 ease-in-out">
                    Go to Homepage
                </Link>
            </div>
            <div className="mt-10">
                <img 
                    src={NotFoundImage} 
                    alt="Not found illustration" 
                    className="mx-auto h-64 object-contain"
                />
            </div>
        </div>
    );
}
