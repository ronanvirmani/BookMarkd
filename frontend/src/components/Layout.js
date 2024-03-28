import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <ul>
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/profile">Profile Page</Link></li>
            </ul>


            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;