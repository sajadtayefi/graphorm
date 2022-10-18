import Advantage from "../Components/Advantage";
import Swiper from "../Components/Swiper";
import Time from "../Components/Time";
import What from "../Components/What";
import Rework from "../Components/Rework";
import Affordable from "../Components/Affordable";
import Confusion from "../Components/Confusion";
import Documentation from "../Components/Documentation";
import Immediate from "../Components/Immediate";
import SecurityData from "../Components/SecurityData";
import Easy from "../Components/EasyReporting";
import SwiperPeopleSay from "../Components/SwiperPeopleSay";
import SwiperFlexible from "../Components/SwiperFlexible";
import SwiperNews from "../Components/SwiperNews";
import Customers from "../Components/Customers";
import Footer from "../Components/Footer";
import DataRepeat from "../Components/DataRepeat";


function Home() {
    return (
        <div className="container-lg ">
            <Swiper />
            <Advantage />
            <What />
            <Time />
            <Rework />
            <Affordable />
            <DataRepeat />
            <Confusion />
            <Documentation />
            <Immediate />
            <SecurityData />
            <Easy />
            <SwiperFlexible />
            <SwiperPeopleSay />
            <SwiperNews />
            <Customers />
            <Footer />
        </div>
    );
}

export default Home;