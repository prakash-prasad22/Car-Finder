import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const CarCard = ({ car, onAddToWishlist, onRemoveFromWishlist, isWishlisted }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link to={`/cars/${car.id}`}>
                <img src={car.imageUrl} alt={car.model} className="object-scale-down w-full h-48" />
            </Link>
            <div className="p-4">
                <h3 className="font-semibold text-lg">{car.brand} {car.model}</h3>
                <p className="text-gray-600">Price: ₹{car.price.toLocaleString('en-IN')}</p>
                <button onClick={() => isWishlisted ? onRemoveFromWishlist(car.id) : onAddToWishlist(car.id)}>
                    {isWishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                </button>
            </div>
        </div>
    );
};

export default CarCard;