import React,{useState, useEffect} from "react"
import { Content } from "../Content"
import { Header } from "./Header"
export const Hero = () => {
    const [adjective, setAdjective] = useState("comfortable");
    const adjectiveArray = ["comfortable", "productive", "conducive", "welcoming", "modern"]

   useEffect(() => {
        // Change adjective every 5 seconds
        const interval = setInterval(() => {
            setAdjective((prev) => {
                const currentIndex = adjectiveArray.indexOf(prev);
                const nextIndex = (currentIndex + 1) % adjectiveArray.length;
                return adjectiveArray[nextIndex];
            });
        }, 5000);
        // Cleanup on unmount
        return () => clearInterval(interval); 
    }, []);

    return(
        <section id="hero">
            {/*Hero Header Component*/}
            <Header/>

            {/*Hero Content Component*/}
            <div className="heroContentWrapper">
            <Content
                imgsrc="/image.png"
                numOfReview="2k+"
                reviewText="Professionals love our spaces"
                heading={<>Find a <br/> <div className="adjectiveWrapper"><span key={adjective} className="highlightedAdjective">{adjective}</span></div><br/>workplace</>}
                paragraph="From cost savings to increased collaboration opportunities, coworking spaces can make for ideal offices, especially for small and growing businesses."
                buttonText="Get in touch"
                iconsrc="/arrowIcon.svg"
            />
            </div>

            {/*Hero Styling Image*/}
            <img className="dotImage" src="/dots.svg" alt="styling image"/>
        </section>
    )
}