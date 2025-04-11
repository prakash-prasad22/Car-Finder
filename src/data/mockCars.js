import img1 from '../assets/creta-exterior-right-front-three-quarter-5.webp'
import img2 from '../assets/pexels-mikebirdy-170811.jpg'
import img3 from '../assets/photo-1704340142770-b52988e5b6eb.jpeg'
import img4 from '../assets/brezza-exterior-right-front-three-quarter-9.webp'
import img5 from '../assets/curvv-exterior-right-front-three-quarter-15.webp'
import img6 from '../assets/dzire-exterior-right-front-three-quarter-27.webp'
import img7 from '../assets/dzire-exterior-right-front-three-quarter-27.webp'
import img8 from '../assets/hyryder-exterior-right-front-three-quarter-73.webp'
import img9 from '../assets/kylaq-exterior-right-front-three-quarter-3.webp'
import img10 from '../assets/pexels-mikebirdy-170811.jpg'
import img11 from '../assets/punch-exterior-right-front-three-quarter-57.webp'
import img12 from '../assets/scorpio-n-exterior-right-front-three-quarter-76.webp'
import img13 from '../assets/syros-exterior-right-front-three-quarter.webp'
import img14 from '../assets/thar-roxx-exterior-right-front-three-quarter-25.webp'  


const mockCars = [
    { id: 1, brand: "Toyota", model: "Corolla", price: 2000000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img1 },
    { id: 2, brand: "Honda", model: "Civic", price: 2200000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img2 },
    { id: 3, brand: "Tesla", model: "Model 3", price: 4000000, fuelType: "Electric", seatingCapacity: 5, imageUrl: img3 },
    { id: 4, brand: "Ford", model: "Mustang", price: 3500000, fuelType: "Gasoline", seatingCapacity: 4, imageUrl: img4 },
    { id: 5, brand: "BMW", model: "3 Series", price: 4500000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img5 },
    { id: 6, brand: "Nissan", model: "Altima", price: 2400000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img6 },
    { id: 7, brand: "Chevrolet", model: "Camaro", price: 3800000, fuelType: "Gasoline", seatingCapacity: 4, imageUrl: img7 },
    { id: 8, brand: "Hyundai", model: "Sonata", price: 2300000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img8 },
    { id: 9, brand: "Kia", model: "Optima", price: 2200000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img9 },
    { id: 10, brand: "Audi", model: "A4", price: 4200000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img10 },
    { id: 11, brand: "Mercedes-Benz", model: "C-Class", price: 4800000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img11 },
    { id: 12, brand: "Volkswagen", model: "Golf", price: 2600000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img12 },
    { id: 13, brand: "Subaru", model: "Impreza", price: 2100000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img13 },
    { id: 14, brand: "Mazda", model: "Mazda3", price: 2300000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img14 },
    { id: 15, brand: "Lexus", model: "ES", price: 4700000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img1 },
    { id: 16, brand: "Infiniti", model: "Q50", price: 4300000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img2 },
    { id: 17, brand: "Acura", model: "TLX", price: 4400000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img3 },
    { id: 18, brand: "Volvo", model: "S60", price: 4600000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img4 },
    { id: 19, brand: "Cadillac", model: "CT5", price: 4900000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img5 },
    { id: 20, brand: "Lincoln", model: "MKZ", price: 4500000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img6 },
    { id: 21, brand: "Ram", model: "1500", price: 3200000, fuelType: "Gasoline", seatingCapacity: 6, imageUrl: img7 },
    { id: 22, brand: "GMC", model: "Sierra", price: 3300000, fuelType: "Gasoline", seatingCapacity: 6, imageUrl: img8 },
    { id: 23, brand: "Jeep", model: "Grand Cherokee", price: 3900000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img9 },
    { id: 24, brand: "Land Rover", model: "Range Rover Sport", price: 6000000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img10 },
    { id: 25, brand: "Porsche", model: "911", price: 12000000, fuelType: "Gasoline", seatingCapacity: 4, imageUrl: img11 },
    { id: 26, brand: "Jaguar", model: "F-PACE", price: 5500000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img13 },
    { id: 27, brand: "Alfa Romeo", model: "Giulia", price: 4100000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img1 },
    { id: 28, brand: "Fiat", model: "500", price: 1800000, fuelType: "Gasoline", seatingCapacity: 4, imageUrl: img14 },
    { id: 29, brand: "Mini", model: "Cooper", price: 2500000, fuelType: "Gasoline", seatingCapacity: 4, imageUrl: img2 },
    { id: 30, brand: "Smart", model: "Fortwo", price: 1700000, fuelType: "Gasoline", seatingCapacity: 2, imageUrl: img3 },
    { id: 31, brand: "Bugatti", model: "Chiron", price: 280000000, fuelType: "Gasoline", seatingCapacity: 2, imageUrl: img4 },
    { id: 32, brand: "Lamborghini", model: "Aventador", price: 50000000, fuelType: "Gasoline", seatingCapacity: 2, imageUrl: img8 },
    { id: 33, brand: "Ferrari", model: "488 GTB", price: 30000000, fuelType: "Gasoline", seatingCapacity: 2, imageUrl: img7 },
    { id: 34, brand: "McLaren", model: "720S", price: 35000000, fuelType: "Gasoline", seatingCapacity: 2, imageUrl: img6 },
    { id: 35, brand: "Rolls-Royce", model: "Phantom", price: 45000000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img5 },
    { id: 36, brand: "Bentley", model: "Continental GT", price: 25000000, fuelType: "Gasoline", seatingCapacity: 4, imageUrl: img1 },
    { id: 37, brand: "Aston Martin", model: "DB11", price: 20000000, fuelType: "Gasoline", seatingCapacity: 4, imageUrl: img14 },
    { id: 38, brand: "Maserati", model: "Ghibli", price: 8000000, fuelType: "Gasoline", seatingCapacity: 5, imageUrl: img13 },
    { id: 39, brand: "Lotus", model: "Evora", price: 9000000, fuelType: "Gasoline", seatingCapacity: 2, imageUrl: img12 },
    { id: 40, brand: "Alpine", model: "A110", price: 7000000, fuelType: "Gasoline", seatingCapacity: 2, imageUrl: img11 },
    { id: 41, brand: "Polestar", model: "2", price: 5200000, fuelType: "Electric", seatingCapacity: 5, imageUrl: img10 },
    { id: 42, brand: "Rivian", model: "R1T", price: 7500000, fuelType: "Electric", seatingCapacity: 5, imageUrl: img9 },
    { id: 43, brand: "Lucid", model: "Air", price: 8000000, fuelType: "Electric", seatingCapacity: 5, imageUrl: img8 },
    { id: 44, brand: "Hummer", model: "EV", price: 9000000, fuelType: "Electric", seatingCapacity: 5, imageUrl: img7 },
    { id: 45, brand: "BYD", model: "Tang", price: 4000000, fuelType: "Electric", seatingCapacity: 7, imageUrl: img6 },
    { id: 46, brand: "Nio", model: "ES8", price: 6000000, fuelType: "Electric", seatingCapacity: 7, imageUrl: img5 },
    { id: 47, brand: "Xpeng", model: "P7", price: 4500000, fuelType: "Electric", seatingCapacity: 5, imageUrl: img4 },
    { id: 48, brand: "VinFast", model: "VF 8", price: 5500000, fuelType: "Electric", seatingCapacity: 5, imageUrl: img3 },
    { id: 49, brand: "Lightyear", model: "0", price: 25000000, fuelType: "Electric", seatingCapacity: 5, imageUrl: img2 },
    { id: 50, brand: "Fisker", model: "Ocean", price: 6000000, fuelType: "Electric", seatingCapacity: 5, imageUrl: img1 },
];

export default mockCars