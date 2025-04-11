import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import CarListShimmer from '../components/CarListShimmer';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import mockCars from '../data/mockCars';

const CarList = () => {
    const [cars, setCars] = useState(mockCars);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [filters, setFilters] = useState({ brand: '', fuelType: '', priceMin: '', priceMax: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
    const carsPerPage = 10;

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setCurrentPage(1);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const addToWishlist = (carId) => {
        if (!wishlist.includes(carId)) {
            setWishlist([...wishlist, carId]);
        }
    };

    const removeFromWishlist = (carId) => {
        setWishlist(wishlist.filter(id => id !== carId));
    };

    const filteredCars = cars.filter(car => {
        const matchesSearch = car.brand.toLowerCase().includes(query.toLowerCase()) || car.model.toLowerCase().includes(query.toLowerCase());
        const matchesBrand = filters.brand ? car.brand === filters.brand : true;
        const matchesFuelType = filters.fuelType ? car.fuelType === filters.fuelType : true;
        const matchesPriceMin = filters.priceMin ? car.price >= parseInt(filters.priceMin) : true;
        const matchesPriceMax = filters.priceMax ? car.price <= parseInt(filters.priceMax) : true;
        return matchesSearch && matchesBrand && matchesFuelType && matchesPriceMin && matchesPriceMax;
    });

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
    const totalPages = Math.ceil(filteredCars.length / carsPerPage);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Find Your Dream Ride</h1>
            <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} filters={filters} />
            {loading ? <CarListShimmer /> : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentCars.map(car => (
                        <CarCard
                            key={car.id}
                            car={car}
                            onAddToWishlist={addToWishlist}
                            onRemoveFromWishlist={removeFromWishlist}
                            isWishlisted={wishlist.includes(car.id)}
                        />
                    ))}
                </div>
            )}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default CarList;