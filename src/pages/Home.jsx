import Advantage from "../Components/Advantage";
import Swiper from "../Components/Swiper";
import Time from "../Components/Time";
import What from "../Components/What";
import Rework from "../Components/Rework";
import Affordable from "../Components/Affordable";
import Data from "../Components/Data";
import Confusion from "../Components/Confusion";
import Documentation from "../Components/Documentation";
import Immediate from "../Components/Immediate";
import Security from "../Components/Security";
import Easy from "../Components/Easy";
import SwiperApp from "../Components/SwiperApp";
import PeopleSay from "../Components/PeopleSay";


function Home() {
    return (
        <div className="container">
            <Swiper />
            <Advantage />
            <What />
            <Time />
            <Rework />
            <Affordable />
            <Data />
            <Confusion />
            <Documentation />
            <Immediate />
            <Security />
            <Easy />
            <SwiperApp />
            <PeopleSay />
        </div>
    );
}

export default Home;