import star from "../assets/star.png";
import katie from "../assets/katie-zaferes.png";

export default function Card() {
  return (
    <div className="card">
      <img src={katie} alt="Katie zafares" />
      <div className="img-text">Sold Out</div>
      <div className="description">
        <div className="ratings">
          <img src={star} alt="star" />
          <div className="rating-text-1">5.0</div>
          <div className="rating-text-2">(6)</div>
          <div className="rating-text-3">• USA</div>
        </div>
        <div className="description-text">Life lessons with Katie Zaferes</div>
        <div className="price">
          <strong>From $136</strong> / person
        </div>
      </div>
    </div>
  );
}
