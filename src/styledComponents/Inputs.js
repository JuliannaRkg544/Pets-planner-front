import styled from "styled-components";


export default function Input({ children }) {
  return <Style>{children}</Style>;
}

const Style = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
    p{
     color: var(--fontgrey);
    }
    input {
    width: 303px;
    height: 45px;
    margin: 20px 0;
    color: #696969;
    font-size: 18px;
    border: 1px solid #aaa;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 4.64px;
  }
  
`;
