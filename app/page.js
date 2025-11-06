import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Contact from "@/components/sections/home2/Contact"
import Projects from "@/components/sections/home2/Projects"
import Services from "@/components/sections/home2/Services"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                
                {/* <Projects />
                <Services />
                <Team />
                <Testimonial />
                <Contact />
                <Blog /> */}
            </Layout>
        </>
    )
}