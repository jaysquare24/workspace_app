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

    return(
        <div className="content">
            <div className="imageContent">
                <img className="mainImg" src={imgsrc} alt="workspace illustration"/>
                { numOfReview &&
                    <div className="review">
                        <p className="number">{numOfReview}</p>
                        <p className="reviewText">{reviewText}</p>
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
                {subHeading && <h2 className="subHeading">{subHeading}</h2>}
                <p className="paragraph">{paragraph}</p>
                {buttonText && <button className="buttons" id="getInTouchButton" type="button">{buttonText}<img className="arrowIcon" src={iconsrc}/></button>}  
                
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
            </div>
        </div>
    )
}