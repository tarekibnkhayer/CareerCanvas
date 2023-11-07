import Banner from "../components/forHomePage/Banner";
import Jobs from "../components/forHomePage/Jobs";


const Home = () => {
    return (
        <div className="lg:mt-24">
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <Jobs></Jobs>
            </div>
        </div>
    );
};

export default Home;