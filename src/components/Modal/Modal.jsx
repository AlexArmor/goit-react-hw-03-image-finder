import { ModalWindow, ImageModal } from './Modal.styled';
import { Backdrop } from '../Backdrop/Backdrop.styled';

export const Modal = ({ largeImageURL, onImageClick, alt }) => {
  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onImageClick('');
    }
  };

  return (
    <Backdrop onClick={handleBackdrop}>
      <ModalWindow>
        <ImageModal src={largeImageURL} alt={alt} />
      </ModalWindow>
    </Backdrop>
  );
};
