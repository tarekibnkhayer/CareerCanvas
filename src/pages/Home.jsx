import Banner from "../components/forHomePage/Banner";
import HowItWorks from "../components/forHomePage/HowItWorks";
import Jobs from "../components/forHomePage/Jobs";


const Home = () => {
    return (
        <div className="lg:mt-24">
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
            <Jobs></Jobs>
            </div>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;