export const Footer = () => {
    return (
        <footer>
            <nav className="topNav">
                <ul>
                    <img className="logo" src="/Logo.svg" alt="company logo"/>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Workspaces</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul>
                    <p>Help</p>
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Delivery Details</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
                <ul>
                    <p>Resources</p>
                    <li><a href="#">Free eBooks</a></li>
                    <li><a href="#">Development Tutorial</a></li>
                    <li><a href="#">How to-Blog</a></li>
                    <li><a href="#">Youtube Playlist</a></li>
                </ul>
                <ul>
                    <p>Extra Links</p>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Chat</a></li>
                </ul>
            </nav>
            <div className="bottomSection">
                <nav className="bottomNav">
                    <div className="socials">
                        <a href="#"><img src="/1.svg" alt="twitter icon"/></a>
                        <a href="#"><img src="/2.svg" alt="facebook icon"/></a>    
                        <a href="#"><img src="/3.svg" alt="instagram icon"/></a>
                        <a href="#"><img src="/4.svg" alt="github icon"/></a>
                    </div>
                    <div className="repeatedLinks">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Support</a>
                    </div>
                </nav>
                <p>© 2025 Workspace. All rights reserved</p>
            </div>
        </footer>
    )
}