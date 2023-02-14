import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={`container ${className}`}>
      <div className="containers">
        <h1 className="title">{headerText}</h1>
        <p className="para">{description}</p>

        <button className="button-style">Show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
