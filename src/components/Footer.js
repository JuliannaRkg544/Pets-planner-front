import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <Bottom>
      <div className="box">
        <Link to={"/to-do-list"}>
          {" "}
          <span>List</span>{" "}
        </Link>
        <Link to={"/pets"}>
          {" "}
          <div className="main">Pets</div>{" "}
        </Link>
        <Link to={"/health-card"}>
          {" "}
          <span>Health</span>{" "}
        </Link>
      </div>
    </Bottom>
  );
}

const Bottom = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 30px;

  .box {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .main {
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: var(--darkcolor);
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  a{
    text-decoration: none;
    color: #000;
  }
`;
