import { motion } from "framer-motion";

export const Content = ({
    imgsrc,
    numOfReview,
    reviewText,
    subImgSrc,
    heading,
    subHeading,
    paragraph,
    buttonText,
    iconsrc,
    activeCustomer,
    customerText,
    trustpilotRating,
    ratingText }) => {

    const handleClick = () => {
        alert('Feature not added in this demo.');
    }

    return(
        <div className="content">
            <div className="imageContent">
                <img className="mainImg" src={imgsrc} alt="workspace illustration"/>
                { numOfReview &&
                    <div className="review">
                        <p className="number">{numOfReview}</p>
                        <p className="reviewText" >{reviewText}</p>
                    </div>
                }
                {subImgSrc &&
                    <div className="subImgContainer">
                        <img className="subImg" src={subImgSrc} alt="workspace illustration"/>
                    </div>
                }
            </div>
            <div className="textContent">
                {heading && <h1 className="heading">{heading} </h1>}
                {subHeading && <motion.h2 
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: -0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                                viewport={{ amount:0.3}}
                                className="subHeading"
                >{subHeading}</motion.h2>}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                    viewport={{ amount:0.2}}
                >
                    <p className="paragraph">{paragraph}</p>
                    {buttonText && <button className="buttons" id="getInTouchButton" onClick={handleClick} type="button">{buttonText}<img className="arrowIcon" src={iconsrc}/></button>}  
                    
                    { activeCustomer &&
                        <div className="rating">
                            <div className="customer">
                                <p className="ratingNum">{activeCustomer}</p>
                                <p className="ratingText">{customerText}</p>
                            </div>
                            <div className="trustpilot">
                                <p className="ratingNum">{trustpilotRating}</p>
                                <p className="ratingText">{ratingText}</p>
                            </div>
                        </div>
                    }
                </motion.div>
            </div>
        </div>
    )
}