import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/*TODO: change to a nice looking navbar*/}
            <ul>
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/profile">Profile Page</Link></li>
                <li><Link to="/annotations">Annotations</Link></li>
            </ul>


            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;