import styled from "styled-components";

export default function ToDoListStyle({ children }) {
  return <Style>{children}</Style>;
} 

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15% 20% ;
  h1{
   
  }
  .underline{
    text-decoration: line-through;
    color: var(--fontgrey);
    
  }
 
  span, p{
    cursor: pointer;
  }
  .single-task {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    align-items: center;
    width: 100%;
    height: 45px;
    margin: 20px 0;
    color: #000;
    background-color: #fff;
    font-size: 18px;
    border: 1px solid #aaa;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 4.64px;
  }
`;
