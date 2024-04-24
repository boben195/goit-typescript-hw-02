import Modal from "react-modal";

interface Prop {
  isOpen: boolean;
  onRequestClose: () => void;
  info: string
}

const ImageModal: React.FC<Prop> = ({ isOpen, onRequestClose, info }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <img src={info} alt="" />
      </div>
    </Modal>
  );
};

export default ImageModal;
