import {HeaderComponent,NavContainer} from './styles'

export function Header(){
    return <HeaderComponent>

            <NavContainer>
                <li><a href='/'> Home </a></li>
                <li> <a href='/Financy'> Financeiro </a></li>
                <li> <a href='/Task'>Tasks </a></li>
            </NavContainer>

    </HeaderComponent>
}