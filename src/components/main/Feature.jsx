export const Feature = ({imgSrc, subheading, paragraph}) => {
    return(
        <div className="feature">
            <div className="featureImgContainer">
              <img className="featureImg" src={imgSrc} alt="feature illustration"/>
            </div>
            <h3>{subheading}</h3>
            <p>{paragraph}</p>
        </div>
    )
}