import { NavLink, useRouteError } from "react-router-dom";



const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
           <img src="https://i.imgur.com/1B4vry1.jpg" alt="error img"  className="w-1/3  mx-auto"/>
           <h1 className="text-center lg:text-5xl font-bold text-red-600">Ooooopppps!</h1>
     
      <p className="text-center my-6 lg:text-5xl ">
        <i>{error.statusText || error.message}</i>
      </p>
         <NavLink to="/" className="lg:ml-[550px] "><button className="btn btn-success w-96">Back to Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;