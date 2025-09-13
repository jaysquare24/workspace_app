import { Feature } from "./Feature"

export const Main = () => {
  return (
    <main> 
        <section id="features">
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
    </main>
  )
}