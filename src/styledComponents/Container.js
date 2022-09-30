import styled from "styled-components";

export default function Container({ children }) {
  return <Style>{children}</Style>;
}

const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 100%;
  /* margin-right: 50px; */

  .left {
    display: flex;
    padding: 50px;
    width: 100%;
    height: 100%;
    background-color: #fff2a6;
    justify-content: center;
    align-items: center;
    img {
      width: 500px;
      height: 500px;
    }
  }
  .right {
    display: flex;
    padding: 80px;
    flex-direction: column;
    input {
      width: 303px;
      height: 45px;
      margin: 10px 0;
      color: #696969;
      font-size: 18px;
      border: 1px solid #aaa;
      box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25) ;
      border-radius: 4.64px;
    }
    button {
      width: 303px;
      height: 45px;
      margin: 10px 0;
      color: #000;
      font-size: 21px;
      border-radius: 4.64px;
      border: 1px #AAA;
      box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25) ;
      background-color: #ffde59;
      margin-bottom: 25px;
      font-family: 'Atma', cursive;
      font-weight: 700;
     
    }
    button:hover{
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
  }
`;
