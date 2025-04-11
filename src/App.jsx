import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CarList from './pages/CarList';
import CarDetails from './pages/CarDetails';
import WishlistPage from './pages/WishlistPage';
import Header from './components/Header';

function App() {
    return (
        <Router>
            
            <Header/>

            <Routes>
                <Route path="/" element={<CarList />} />
                <Route path="/cars/:id" element={<CarDetails />} />
                <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
        </Router>
    );
}

export default App;
