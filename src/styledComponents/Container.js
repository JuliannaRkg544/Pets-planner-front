import styled from "styled-components";

export default function Container({ children }) {
  return <Style>{children}</Style>;
}

const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #fff;

  /* margin-right: 50px; */

  .left {
    display: flex;
    padding: 50px;
    width: 100%;
    height: 100%;
    background-color: var(--maincolor);
    justify-content: center;
    align-items: center;
    
    img {
      width: 500px;
      height: 500px;
    }
  }
`;

export const Rigth = styled.div`
  display: flex;
  padding: 80px;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 6px 6px 3px rgba(0, 0, 0, 0.40);
  
  
  input {
    width: 303px;
    height: 45px;
    margin: 10px 0;
    color: #696969;
    font-size: 18px;
    border: 1px solid #aaa;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 4.64px;
  }
  button {
    width: 303px;
    height: 45px;
    margin: 10px 0;
    color: #000;
    font-size: 21px;
    border-radius: 4.64px;
    border: 1px #aaa;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: var(--darkcolor);
    margin-bottom: 25px;
    font-family: "Atma", cursive;
    font-weight: 700;
  }
  button:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }

  span {
    color: #000;
    font-size: 14px;
  }
  a {
    color: #000;
  }
`;
