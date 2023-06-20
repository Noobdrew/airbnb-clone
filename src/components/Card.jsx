import star from "./assets/star.png";

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.item.location == "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      <img src={props.item.coverImg} alt="Katie zafares" />
      {badgeText && <div className="img-text">{badgeText}</div>}
      <div className="description">
        <div className="ratings">
          <img src={star} alt="star" />
          <div className="rating-text-1">{props.item.stats.rating}</div>
          <div className="rating-text-2">({props.item.stats.reviewCount})</div>
          <div className="rating-text-3">• {props.item.location}</div>
        </div>
        <div className="description-text">{props.item.title}</div>
        <div className="price">
          <strong>From ${props.item.price}</strong> / person
        </div>
      </div>
    </div>
  );
}
