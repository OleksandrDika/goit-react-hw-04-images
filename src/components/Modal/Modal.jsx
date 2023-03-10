import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
  },
  overlay: {
    zIndex: '1400',
    backgroundColor: 'rgb(0, 0, 0, 0.6)',
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({ image, isOpen, onClose }) => {
  return (
    <ReactModal
      onRequestClose={() => onClose()}
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick
    >
      <img src={image} alt="" width="800" />
    </ReactModal>
  );
};
