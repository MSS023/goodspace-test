import "./CandidateCard.css";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";
import wishlist from "../../assets/wishlist.svg";
import bag from "../../assets/bag.svg";

export default function CandidateCard(props) {
  const { data } = props;
  const { name, designation, place, salary, experience, availability, rating } =
    data;

  return (
    <div className="candidate-card d-flex">
      <div className="card-left d-flex flex-column align-items-center justify-content-start">
        <img className="card-img" src={name === "Neha" ? user2 : user3} alt={name} />
        <div className="rating">{rating}</div>
      </div>
      <div className="card-right">
        <div className="detail-row1 d-flex justify-content-between">
          <div className="candidate-name">
            {name} <span className="availability">• {availability}</span>
          </div>
          <a href="#shortlist">
            <img src={wishlist} alt="shortlist" title="shortlist" />
          </a>
        </div>
        <div className="detail-row2">
          <div className="designation">{designation}</div>
          <div className="place">{place}</div>
        </div>
        <div className="detail-row3 d-flex justify-content-between">
          <div className="secondary-details">
            {salary} <img style={{paddingLeft: "10px"}} src={bag} alt="experience" /> {experience}
          </div>
          <button className="offer">Offer</button>
        </div>
      </div>
    </div>
  );
}
