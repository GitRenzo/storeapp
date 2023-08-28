"use client"
// Modal
import Modal from 'react-modal'
// Provider
import useStoreTool from '../hooks/useStoreTool';
// Modal content
import ModalProductContent from './modalProductContent';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next');

function ModalContent() {
    const { modal } = useStoreTool()
    return (
        <div>
            <Modal isOpen={modal} style={customStyles} >
                <ModalProductContent />
            </Modal>
        </div>
    )
}

export default ModalContent