import { Content } from "../Content"
import { Header } from "./Header"
export const Hero = () => {
    return(
        <section id="hero">
            {/*Hero Header Component*/}
            <Header/>

            {/*Hero Content Component*/}
            <Content
                imgsrc="/image.svg"
                numOfReview="2k+"
                reviewText="Professionals love our spaces"
                heading={<>Find a <span className="highlightedText">comfortable</span> workplace</>}
                paragraph="From cost savings to increased collaboration opportunities, coworking spaces can make for ideal offices, especially for small and growing businesses."
                buttonText="Get in touch"
                iconsrc="/arrowIcon.svg"
            />
            
            {/*Hero Styling Image*/}
            <img className="dotImage" src="/dots.svg" alt="styling image"/>
        </section>
    )
}