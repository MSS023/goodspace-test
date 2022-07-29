import "./Dashboard.css";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import { InputGroup, Form, Row, Col, Button } from "react-bootstrap";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import user1 from "../../assets/user1.svg";
import search from "../../assets/search.svg";
import rocket from "../../assets/rocket.svg";
import CandidateCard from "../../components/CandidateCard/CandidateCard";
import demoData from "../../demoData.json";
import { useEffect, useState } from "react";
import {
  MessagesCard,
  OtherPostCard,
} from "../../components/OtherPostCard/OtherPostCard";

export default function Dashboard(props) {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState("00");
  const [shortlisted, setShortlisted] = useState("00");
  const [activity, setActivity] = useState("00");
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setResponse("10");
      setShortlisted("05");
      setActivity("30");
      setCompletion(75);
      setData([...demoData.data])
    }, 250);
  }, []);

  return (
    <div className="dashboard h-100">
      <TopNavbar />
      <div className="bottom h-100 d-flex flex-column-reverse flex-lg-row h-100 justify-content-evenly">
        <div className="main-content mt-3 w-lg-90 mx-auto mx-lg-0">
          <div className="profile-stats align-items-center bg-white d-flex justify-content-evenly py-2 rounded-4">
            <div className="profile-image position-relative">
              <CircularProgressbarWithChildren
                value={completion}
                circleRatio={0.9}
                strokeWidth={4}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 12,
                  trailColor: "transparent",
                  pathColor: "#389FFF",
                })}
              >
                <img src={user1} alt="profile" className="stat-image" />
                <span className="perc-text position-absolute rounded-pill">
                  {completion}%
                </span>
              </CircularProgressbarWithChildren>
            </div>
            <div className="d-none stat-num d-md-flex justify-content-center flex-column">
              <div className="value">{response}</div>
              <div className="name">Response</div>
            </div>
            <div className="d-none stat-num d-md-flex justify-content-center flex-column">
              <div className="value">{shortlisted}</div>
              <div className="name">Shortlisted</div>
            </div>
            <div className="d-none stat-num d-md-flex justify-content-center flex-column">
              <div className="value">{activity}</div>
              <div className="name">Activity</div>
            </div>
            <button className="offer-status d-md-none p-2">
              View your account stats
            </button>
          </div>
          <InputGroup className="my-3 bg-white search">
            <InputGroup.Text className="bg-transparent">
              <img src={search} title="search" alt="search" />
            </InputGroup.Text>
            <Form.Control
              className="border border-start-0 border-end-0"
              aria-label="Search Candidates"
              placeholder="Search Candidates"
            />
            <InputGroup.Text className="bg-transparent search-text">
              view all
            </InputGroup.Text>
          </InputGroup>
          <div className="candidates-list bg-white py-4 px-0 px-lg-4 m-0 m-lg-auto d-flex flex-column">
            <Row xl={2} xs={1}>
              {data.slice(0, 4).map((dat, index) => (
                <Col key={index}>
                  <CandidateCard data={dat} />
                </Col>
              ))}
            </Row>
            <Row xl={2} xs={1}>
              <Col>
                <OtherPostCard />
              </Col>
              <Col>
                <MessagesCard />
              </Col>
            </Row>
            <Row xl={2} xs={1}>
              {data.slice(4).map((dat, index) => (
                <Col key={index}>
                  <CandidateCard data={dat} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="plan-options w-lg-90 mx-auto mx-lg-0 mt-3 d-flex flex-column flex-sm-row flex-lg-column align-items-stretch gap-4">
          <div className="post-actions d-flex flex-column gap-3 p-4 bg-white">
            <Button variant="primary">Post Requirement</Button>
            <Button variant="primary">
              <img className="me-2" src={rocket} alt="boost" /> Boost Post
            </Button>
          </div>

          <div className="post-actions d-flex flex-column flex-sm-row flex-lg-column gap-3 p-4 bg-white">
            <div className="d-flex flex-column gap-3 justify-content-center">
              <h2 className="head2">Current Plan</h2>
              <h1 className="head1">Basic</h1>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="option d-flex">
                <div className="option-offer bg-transparent d-flex flex-column justify-content-center">
                  <p className="option-post-num m-0">05</p>
                  <p className="subscript m-0">Maximum posts</p>
                </div>
                <div className="option-remaining my-1 me-1 d-flex flex-column justify-content-center">
                  <p className="remaining-num m-0" style={{ color: "#ff5c00" }}>
                    02
                  </p>
                  <p className="subscript m-0">Remaining</p>
                </div>
              </div>
              <div className="option d-flex">
                <div className="option-offer bg-transparent d-flex flex-column justify-content-center">
                  <p className="option-post-num m-0">75</p>
                  <p className="subscript m-0">Maximum posts</p>
                </div>
                <div className="option-remaining my-1 me-1 d-flex flex-column justify-content-center">
                  <p className="remaining-num m-0" style={{ color: "#ff5c00" }}>
                    07
                  </p>
                  <p className="subscript m-0">Remaining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
