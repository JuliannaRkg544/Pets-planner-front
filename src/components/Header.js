import styled from "styled-components";
import logo from "../assets/imgs/pets-planner-unname.png";

export default function Header() {
  return (
    <Top>
      <img src={logo} />
      <h1>Pets's Planner</h1>
    </Top>
  );
}

const Top = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: #fff;
  top: 0;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 30px;
  justify-content: start;
  align-items: center;
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
