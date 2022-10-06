import styled from "styled-components"

export default function Button({children}){
    return <Style>{children}</Style>
}

const Style = styled.div`
  width: 220px;
  height: 60px;
  background-color: var(--darkcolor);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;

  :hover {
    cursor: pointer;
    border: solid 2px #555;
    color: #333;
    filter: brightness(1.2);
    transition: all(1.2);
  }
`