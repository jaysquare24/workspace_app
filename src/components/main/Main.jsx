import { Feature } from "./Feature"
import { Content } from "../Content"
import { Form } from "./Form"

export const Main = () => {
    
  return (
    <main> 
        <section id="features" className="mainSection">
            <h2>The modern conveniences of this co-working place</h2>
            <div className="featuresContainer">
                <Feature 
                    imgSrc="/wifi_1.svg"
                    subheading= 'Network Availability'
                    paragraph= 'The network connection in our space is always active so that there is no curb in the work and communication.'
                />
                <Feature 
                    imgSrc="/XMLID_57_.svg"
                    subheading= 'Comfortable Environment'
                    paragraph= 'There is a good work environment so that you can work with a relaxed mind for a long time & helps to speed up your work.'
                />
                <Feature 
                    imgSrc="/icon.svg"
                    subheading= 'Aesthetic Lounge'
                    paragraph= 'In the aesthetic lounge you can meet family or friends and organize various programs including parties.'
                />

            </div>    
        </section>
        <section id="productivity" className="mainSection">
            {/*Productivity Content Component*/}
            <img className="background" src="/P_BG.svg" alt="background image"/>
            <img className="background_2" src="/P_BG2.svg" alt="background image"/>
            <Content
                imgsrc="/pimage.svg"
                numOfReview="27%"
                reviewText="Productivity increase on average"
                subHeading="Find everything to increase your productivity"
                paragraph="Workplace productivity relates to the amount of work that certain period. A productive work place and improved performance metrics."
                buttonText="Get Workspace"
                iconsrc="/arrowIcon.svg"
            />
        </section>
        <section id="workspace" className="mainSection">
            <h2>This is an excellent place for your team to work</h2>
            <p className="topText">High productivity at the workplace is a sign of a healthy business and work culture.</p>
            <div className="spaceContainer">
                <div className="space">
                    <img className="spaceImg" src="/W1_image.svg" alt="workspace illustration"/>
                    <p className="caption">Spaces are designed for your work & to increase productivity</p>
                </div>
                <div className="space">
                    <img className="spaceImg" src="/W2_image.svg" alt="workspace illustration"/>
                    <p className="caption">Enjoy your work and easily manage teams from around</p>
                </div>
                <div className="space">
                    <img className="spaceImg" src="/W3_image.svg" alt="workspace illustration"/>
                    <p className="caption">Creative work place and environment that suits you</p>
                </div>
            </div>
            <img className="dotImg" src="/W_dots.svg" alt="styling image"/>
        </section>
        <section id="customersRating" className="mainSection">
            {/*Customers Rating Content Component*/}
            <Content
                imgsrc="/R_image.svg"
                subImgSrc="/Sub_r_image.svg"
                subHeading="The platform is designed to raise your experience"
                paragraph="Workplace productivity relates to the amount of work that your staff can produce over a certain period. A productive workplace  more engaged employees and improved performance metrics."
                activeCustomer="1.5M"
                customerText="Active Customers"
                trustpilotRating="4.8/5"
                ratingText="Ratings on Trustpilot"
            />
        </section>
        <section id="message" className="mainSection">
            <div className="messageContainer">
                <div className="experienceContainer">
                    <h2>People talk about their experiences in our workplace</h2>
                    <p className="experienceParagraph">“I really enjoy my work and it makes me more productive, happier and more successful. The coworking place builds confidence and inspires greater performance and greater success for both employees and employers.”</p>
                    <div className="person">
                        <img className="personImg" src="/Ellipse.svg" alt="person illustration"/>
                        <div className="personText">
                            <p className="name">Jenny Wilson</p>
                            <p className="position">Project Manager at Microsoft</p>
                        </div>
                    </div>
                </div>
                {/*Message Form Component*/}
                <Form/>
            </div>
        </section>

    </main>
  )
}