import { useLoaderData } from "react-router-dom";


const Update = () => {
    const a = useLoaderData();
    console.log(a);
    return (
        <div className="mt-36">
            Helllo
        </div>
    );
};

export default Update;