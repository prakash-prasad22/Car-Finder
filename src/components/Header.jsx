//NavBar Component to be used in the entire application
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-2xl">Car Finder</Link>
            <Link to="/wishlist" className="text-white hover:text-gray-300">Saved Cars</Link>
        </div>
    </nav>
  )
}

export default Header