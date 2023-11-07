import PropTypes from 'prop-types'
import {  Navigate } from "react-router-dom";
import useAuth from '../myHooks/useAuth';

const PrivateRoutes = ({children}) => {
   const {user, loading} = useAuth();
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
   else if(user){
    return children;
   }
   return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node
}