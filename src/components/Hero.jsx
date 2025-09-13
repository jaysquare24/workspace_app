export const Hero = () => {
    return(
        <section id="hero">
            <header>
                <img class="logo" src="/Logo.svg" alt="logo"/>
                <div class="navigation">
                    <nav class="headerNavs">
                        <a>Demos</a>
                        <a>About</a>
                        <a>Blog</a>
                        <a>Pages</a>
                        <a>Contact</a>
                    </nav>
                    <div class="headerButtonsContainer">
                        <button class="headerButtons"  id="signInButton" type="button">Sign in</button>
                        <button class="headerButtons" id="signUpButton" type="button">Get Started Free</button>
                    </div>
                </div>
                <div class="menu-button"> 
                    <button type="button"  id="menu-button" aria-label="Toggle navigation menu"> <img id="menu-icon" src="resource/icons8-menu.svg" alt="Menu icon"/></button>
                </div>
            </header>

            <div class="heroContent">
                <div class="heroImageContent">
                    <img class="heroImage" src="/image.svg" alt="workspace illustration"/>
                    <div className="review">
                        <p className="number">2k+</p>
                        <p className="reviewText">Professionals love our spaces</p>
                    </div>
                </div>
                <div class="heroTextContent">
                    <h1 class="heroHeading">Find a <span class="highlightedText">comfortable</span> workplace </h1>
                    <p class="heroParagraph">From cost savings to increased collaboration opportunities, coworking spaces can make for ideal offices, especially for small and growing businesses.</p>
                    <button class="heroButtons" id="getInTouchButton" type="button">Get in touch <img className="arrowIcon" src="/icons8-right-arrow-50.png"/></button>    
                </div>
            </div>
            <img className="dotImage" src="/dots.svg" alt="styling image"/>
           
        </section>
    )
}