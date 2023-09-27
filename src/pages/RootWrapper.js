import { Outlet } from "react-router-dom";

import Navar from "../components/Navbar";

const RootWapper = () => {
    return (
        <>
            <Navar />
            <Outlet />
        </>
    );
}

export default RootWapper;