import {MainBlock,DivBlocks,DivButton,DivMain} from './styles'

export function BlockComponent(){
   return (
   <DivMain>
   <DivBlocks>
   <MainBlock> This is a Block Component</MainBlock> 
   <MainBlock> This is a Block Component</MainBlock> 
   <MainBlock> This is a Block Component</MainBlock> 
   </DivBlocks>
    <DivButton>
        <button> Me Clique</button>
    </DivButton>
    </DivMain>
   )
}