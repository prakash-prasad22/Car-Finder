import React from 'react';
import { useParams } from 'react-router-dom';
import mockCars from '../data/mockCars';

const CarDetails = () => {
    const { id } = useParams();
    const car = mockCars.find(car => car.id === parseInt(id));

    if (!car) {
        return <div className="container mx-auto py-8">Car not found</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={car.imageUrl} alt={car.model} className="object-scale-down w-full h-96" />
                <div className="p-8">
                    <h2 className="font-bold text-2xl">{car.brand} {car.model}</h2>
                    <p className="text-gray-700">Price: ₹{car.price.toLocaleString('en-IN')}</p>
                    <p className="text-gray-700">Fuel Type: {car.fuelType}</p>
                    <p className="text-gray-700">Seating Capacity: {car.seatingCapacity}</p>
                    {/* Add more details here */}
                </div>
            </div>
        </div>
    );
};

export default CarDetails;