import Accordion from "../components/accordion/accordion";
import Feature from "../components/feature";
import Footer from "../components/footer/footer";
import HomeHeader from "../components/homelead/homeheader";


export default function Home() {
    return (
        <>
            <HomeHeader/>
            <Feature/>
            <Accordion/>
            <Footer/>
        </>
    )
}