import styled from "styled-components";


export const MainBlock = styled.div`
margin-top: 2rem ;

height: 20rem;
border-style: solid;
padding: 3rem;
width: 25rem;
`

export const DivBlocks = styled.div`
display: flex;
justify-content: space-between;
margin: 0 2rem;
gap: 2rem;
`

export const DivMain = styled.div`
display: flex;
flex-direction: column;
`

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  button{
    width: 8rem;
    padding: 1rem;
    background-color: black;
    color: white;
    cursor: pointer;
    border-radius: 3px;
  }

  button:hover{
    background-color: gray;
    cursor:pointer;  
}

`   