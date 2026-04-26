import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-orange-500 w-full h-16 flex items-center justify-end px-8 border-b">
            <div className="flex gap-6 text-white font-semibold">
                <Link to="/login" className="underline">
                    Login
                </Link>

                <Link to="/signup" className="underline">
                    Signup
                </Link>

                <Link to="/dashboard" className="underline">
                    Dashboard
                </Link>

                <Link to="/canvas" className="underline">
                    Canvas
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
