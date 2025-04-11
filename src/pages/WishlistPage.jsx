import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import mockCars from '../data/mockCars';

const WishlistPage = () => {
    const [wishlistCars, setWishlistCars] = useState([]);

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const filteredCars = mockCars.filter(car => wishlist.includes(car.id));
        setWishlistCars(filteredCars);
    }, []);

    const removeFromWishlist = (carId) => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const updatedWishlist = wishlist.filter(id => id !== carId);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

        // Update the state to reflect the change immediately
        setWishlistCars(prevCars => prevCars.filter(car => car.id !== carId));
    };

    if (wishlistCars.length === 0) {
        return <div className="container mx-auto py-8 font-bold flex items-center justify-center">Your wishlist is empty.</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {wishlistCars.map(car => (
                    <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Link to={`/cars/${car.id}`}>
                            <img src={car.imageUrl} alt={car.model} className="object-scale-down w-full h-48" />
                        </Link>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">{car.brand} {car.model}</h3>
                            <p className="text-gray-600">Price: ₹{car.price.toLocaleString('en-IN')}</p>
                            <button onClick={() => removeFromWishlist(car.id)} className="text-red-500">
                                <FaHeart />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;