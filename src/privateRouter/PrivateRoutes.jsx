import { useContext} from "react";
import { AuthContext } from "../providers/AuthProviders";
import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
   const {user, loading} = useContext(AuthContext);
   if(loading){
    return <div className="spinner-dot-circle">
	<div className="spinner-dot"></div>
	<div className="spinner-dot"></div>
	<div className="spinner-dot"></div>
	<div className="spinner-dot"></div>
	<div className="spinner-dot"></div>
	<div className="spinner-dot"></div>
	<div className="spinner-dot"></div>
	<div className="spinner-dot"></div>
</div>
   }
   if(user){
    return children;
   }
   else{
    return Navigate("/login")
   }
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node
}