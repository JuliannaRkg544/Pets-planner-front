import styled from "styled-components";

export default function Container({ children }) {
  return <Style>{children}</Style>;
}

const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 100%;
  padding: 100px;
  .logo {
    img {
      width: 500px;
      height: 500px;
    }
  }
  .logo-body {
    display: flex;
    flex-direction: column;
    input {
      width: 303px;
      height: 45px;
      margin: 3px 0;
      color: #000;
      border: 1px solid #dbdbdb;
      border-radius: 4.64px;
    }
    button {
      width: 303px;
      height: 45px;
      margin: 3px 0;
      color: #000;
      font-size: 21px;
      border-radius: 4.64px;
      background-color: #ffde59;
      border: none;
      margin-bottom: 25px;
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
