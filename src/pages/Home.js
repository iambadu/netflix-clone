import Accordion from "../components/accordion/accordion";
import Feature from "../components/feature";
import Footer from "../components/footer";
import HomeHeader, { Homelead } from "../components/homelead/homeheader";


export default function Home() {
    return (
        <>
            <HomeHeader>
                <Homelead />
            </HomeHeader>
            <Feature />
            <Accordion />
            <Footer />
        </>
    )
}