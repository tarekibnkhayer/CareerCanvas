import PropTypes from 'prop-types'
import {  Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

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
   else if(user){
    return children;
   }
   return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node
}