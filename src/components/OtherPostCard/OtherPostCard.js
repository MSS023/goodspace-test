import "./OtherPostCard.css";
import { Button } from "react-bootstrap";
import wishlist from "../../assets/wishlist.svg";
import bag from "../../assets/bag.svg";
import place from "../../assets/place.svg";
import rise from "../../assets/rise.svg";
import blueDot from "../../assets/blue-dot.svg";
import user4 from "../../assets/user4.svg";

export function OtherPostCard(props) {
  return (
    <div className="other-post-card">
      <div className="post-content bg-white d-flex">
        <div className="content-left px-4 py-2 d-flex flex-column align-items-start justify-content-between">
          <div className="post-title">UI UX Designer 1</div>
          <div className="post-place text1">Amazon Warehouse</div>
          <div className="post-other-details d-flex">
            <div className="post-stipend me-3">₹ 3-5 LPA</div>
            <div className="post-experience text1">
              <img src={bag} alt="experience" /> 1-3 Years
            </div>
          </div>
          <div className="post-work-place text1">
            <img className="me-2" src={place} alt="place" />
            Work From Home
          </div>
        </div>
        <div className="content-right py-3 pe-3 d-flex flex-column justify-content-between">
          <div className="shortlist">
            <img src={wishlist} alt="shortlist" />
            <div className="test2">2d ago</div>
          </div>
          <Button className="post-boost" variant="primary">
            Boost Post
          </Button>
        </div>
      </div>
      <div className="card-footer bg-transparent d-flex justify-content-center align-items-center">
        <img className="me-2" src={rise} alt="boost" />
        Boost this post to reach more candidates
      </div>
    </div>
  );
}

export function MessagesCard(props) {
  return (
    <div className="message-card">
      <div className="message-content bg-white">
        <div className="message-header d-flex flex-row justify-content-between px-3 py-2">
          <div className="head">
            <img className="me-2" src={blueDot} alt="unread" />
            Unread Messages
          </div>
          <span className="mark-as-read">mark as read</span>
        </div>
        <div className="message d-flex px-3 align-items-center">
          <div className="message-image"><img src={user4} alt="user4" /></div>
          <div className="message-text px-2">
            <div className="sender">Aditi</div>
            <div className="mess-text">
              Contrary to popular belief, Lorem Ipsum is Contrary to popular
              belief, Lorem Ipsum is
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer message-footer bg-transparent d-flex justify-content-center align-items-center">
        View Messages
      </div>
    </div>
  );
}
