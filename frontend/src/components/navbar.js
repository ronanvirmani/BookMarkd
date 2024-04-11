import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";

export default function Navbar() {

    const { user, setUser, supabase } = useAppContext();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        window.location.href = "/";

    };

    return (
        <nav className="flex flex-row justify-between py-4 px-12 shadow">
            <h1>BookMark'd</h1>
            <div className="flex flex-row items-center space-x-8">
                {user && (
                    <div className="flex flex-row space-x-8">
                        <Link to="/home">Home</Link>

                        <Link to="/profile" className="">
                        Profile
                        </Link>
                        <Link to="/annotations" className="">
                        Annotations
                        </Link>
                        <Link to="/search" className="">
                            Search
                        </Link>
                        <button onClick={handleLogout} className="">
                        Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}