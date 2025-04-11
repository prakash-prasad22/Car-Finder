import React from 'react';
import mockCars from '../data/mockCars';

const SearchBar = ({ onSearch, onFilterChange, filters }) => {
    return (
        <div className="mb-4 flex flex-wrap items-center gap-2">
            <input
                type="text"
                placeholder="Search brand or model"
                className="p-2 border rounded w-full md:w-auto"
                onChange={(e) => onSearch(e.target.value)}
            />
            <select
                className="p-2 border rounded w-full md:w-auto"
                value={filters.brand}
                onChange={(e) => onFilterChange({ ...filters, brand: e.target.value })}
            >
                <option value="">All Brands</option>
                {[...new Set(mockCars.map(car => car.brand))].sort().map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                ))}
            </select>
            <select
                className="p-2 border rounded w-full md:w-auto"
                value={filters.fuelType}
                onChange={(e) => onFilterChange({ ...filters, fuelType: e.target.value })}
            >
                <option value="">All Fuel Types</option>
                {[...new Set(mockCars.map(car => car.fuelType))].sort().map(fuelType => (
                    <option key={fuelType} value={fuelType}>{fuelType}</option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Min Price (₹)"
                className="p-2 border rounded w-full md:w-auto"
                value={filters.priceMin}
                onChange={(e) => onFilterChange({ ...filters, priceMin: e.target.value })}
            />
            <input
                type="number"
                placeholder="Max Price (₹)"
                className="p-2 border rounded w-full md:w-auto"
                value={filters.priceMax}
                onChange={(e) => onFilterChange({ ...filters, priceMax: e.target.value })}
            />
        </div>
    );
};

export default SearchBar;
