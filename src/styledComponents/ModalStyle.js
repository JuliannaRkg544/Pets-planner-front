import styled from "styled-components";


export function ModalStyle({children}){

    return<Style>{children}</Style>
}

export const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      borderRadius: "50px",
      minWidth: "300px",
      minHeight: "162px",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.30)",
    },
  };
  
  const Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  
    p {
      font-size: 34px;
      font-weight: 700;
      color: #fff;
      text-align: center;
    }
    input {
      width: 100%;
      padding: 2px;
      color: #2e2e2e;
    }
    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    button {
      margin-top: 30px;
      margin-left: 15px;
      margin-right: 15px;
      background-color: #fff;
      border-radius: 5px;
      height: 37px;
      padding: 10px;
  
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
    }
    button p {
      font-size: 18px;
    }
    button:hover {
      filter: brightness(1.2);
      transition: (0.5s);
      cursor: pointer;
    }
    #accept {
      background-color: #eead2d;
      color: #fff;
    }
    #decline {
      background-color: #fff;
      color: #eead2d;
    }
    @media screen and (max-width: 431px) {
      p {
        font-size: 20px;
      }
      button {
        height: 30px;
      }
      button p {
        font-size: 15px;
      }
    }
  `;
  