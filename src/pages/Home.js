// import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { withRouter } from "react-router-dom";

export default function Home() {
  return (
        <div className="home-buttons">
          <Link to="/Landing">
            <button id="play-button" className="btn-block" type="primary" block={true}>
              Play
            </button>
          </Link>
        </div>
  );
}
