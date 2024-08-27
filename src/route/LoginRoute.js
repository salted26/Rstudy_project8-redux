import {useSelector} from "react-redux";
import ProductAll from "../page/ProductAll";
import Login from "../page/Login";

const LoginRoute = () => {
    const authenticate = useSelector((state)=>state.auth.authenticate);
    return authenticate === true ? <ProductAll /> : <Login authenticate={authenticate} />
};

export default LoginRoute;