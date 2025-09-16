import { Content } from "./Content"
export const Hero = () => {
    return(
        <section id="hero">
            <header>
                <img className="logo" src="/Logo.svg" alt="logo"/>
                <div className="navigation">
                    <nav className="headerNavs">
                        <a>Demos</a>
                        <a>About</a>
                        <a>Blog</a>
                        <a>Pages</a>
                        <a>Contact</a>
                    </nav>
                    <div className="headerButtonsContainer">
                        <button className="headerButtons"  id="signInButton" type="button">Sign in</button>
                        <button className="headerButtons" id="signUpButton" type="button">Get Started Free</button>
                    </div>
                </div>
                <div className="menu-button"> 
                    <button type="button"  id="menu-button" aria-label="Toggle navigation menu"> <img id="menu-icon" src="resource/icons8-menu.svg" alt="Menu icon"/></button>
                </div>
            </header>
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
            <img className="dotImage" src="/dots.svg" alt="styling image"/>
        </section>
    )
}