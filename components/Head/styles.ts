import styled from 'styled-components'

export const HeaderComponent = styled.header`
background-color: black ;
`

export const NavContainer = styled.div`
color: white;
padding: 1rem;
display: flex;
width: 100%;
align-items: center;
list-style-type: none;
gap: 5rem;
a {
    color: white;
    text-decoration: none;
}

a:hover{
    color: gray;
    text-decoration: none;
    cursor:pointer;  
}
`
