
import {MainModal, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalButton} from './styles'
export function Modal() {

return (

    <MainModal>
        <ModalContent>
        <ModalHeader>
        <ModalTitle>
            Modal Title
        </ModalTitle>
        <ModalBody>
            This is modal Content
        </ModalBody>
        <ModalFooter>
            <ModalButton>
                Close
            </ModalButton>
        </ModalFooter>
        </ModalHeader>
        </ModalContent>
    </MainModal>

)
}