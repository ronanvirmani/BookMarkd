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
            <h1 className="text-brown">BookMark'd</h1>
            <div className="flex flex-row items-center space-x-8">
                {user && (
                    <div className="flex flex-row space-x-8">
                        <Link to="/profile" className="text-green">
                        Profile
                        </Link>
                        <Link to="/annotations" className="text-green">
                        Annotations
                        </Link>
                        <Link to="/settings" className="text-green">
                        Settings
                        </Link>
                        <button onClick={handleLogout} className="text-brown">
                        Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}