import { BlockComponent } from "../../components/BlockComponent"
import { Header } from "../../components/Head"
import {MainFinancy} from './styles'
export default function Financy() {

    return (<>
        <Header />
        <MainFinancy>
        <div> This is a Financy</div>
        <BlockComponent />
        </MainFinancy>
    </>)
}