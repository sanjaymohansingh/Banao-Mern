import MyCard from "../components/Mycard";
import { FaMapMarkerAlt, FaPen } from "react-icons/fa";

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
          </div>
        </div>
        <div className="col-md-5">
          <div style={{ backgroundColor: "#f0f0f", padding: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <FaMapMarkerAlt
                style={{ fontSize: "24px", marginRight: "10px" }}
              />
              <span>Noida, Lucknow</span>
              <FaPen
                style={{
                  fontSize: "16px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
