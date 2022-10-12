import styled from "styled-components";
import logo from "../assets/imgs/pets-planner-unname.png";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate()
  return (
    <Top>
      <div className="left">
        <img src={logo} />
        <h1>Pets's Planner</h1>
      </div>
      <span className="rigth" onClick={()=>navigate("/")} >Logout</span>
    </Top>
  );
}

const Top = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 2;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
  }
  span {
    border: none;
    background-color: var(--darkcolor);
    height: 28px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    padding: 5px;
  }
  h1 {
    font-family: "Atma", cursive;
    font-size: 26px;
    font-weight: 700;
    line-height: 42.09px;
    padding: 10px;
  }
  img {
    width: 88px;
    height: 59px;
  }
`;
