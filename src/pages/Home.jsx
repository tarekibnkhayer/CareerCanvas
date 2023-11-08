import { Helmet } from "react-helmet-async";
import Banner from "../components/forHomePage/Banner";
import Comments from "../components/forHomePage/Comments";
import HowItWorks from "../components/forHomePage/HowItWorks";
import HowItWorksForBuyer from "../components/forHomePage/HowItWorksForBuyer";
import Jobs from "../components/forHomePage/Jobs";


const Home = () => {
    return (
      <div>
        <Helmet>
            <title>CareerCanvas | Home</title>
        </Helmet>
          <div className="lg:mt-24">
            <Banner></Banner>
            <div className="lg:max-w-6xl md:max-w-2xl max-w-xs mx-auto">
            <Jobs></Jobs>
            </div>
            <HowItWorks></HowItWorks>
            <HowItWorksForBuyer></HowItWorksForBuyer>
            <Comments></Comments>
        </div>
      </div>
    );
};

export default Home;