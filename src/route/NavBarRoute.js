import {useSelector} from "react-redux";
import NavBar from "../components/NavBar";

const NavBarRoute = () => {
    const authenticate = useSelector((state)=>state.auth.authenticate);
    return authenticate === true ? <NavBar authenticate={authenticate} /> : <NavBar authenticate={authenticate} />
};

export default NavBarRoute;