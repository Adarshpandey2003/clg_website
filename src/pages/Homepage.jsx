import SubHeader from "../components/SubHeader/SubHeader";
import Hero from "../components/Hero/Hero";
import AboutTrailer from "../components/AboutTrailer/AboutTrailer";
import Trimurti from "../components/Trimurti/Trimurti";
import Stats from "../components/Stats/Stats";
import Footer from "../components/Footer/Footer";

export default function Homepage(){
    return (
        <>
            <SubHeader />
            <Hero />
            <AboutTrailer />
            <Trimurti />
            <Stats />
            <Footer />  
        </>

    )
}