import { ModalBackdrop, ModalWindow } from './Modal.styled';

export const Modal = ({ largeImageURL, onImageClick, alt }) => {
  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onImageClick('');
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdrop}>
      <ModalWindow>
        <img src={largeImageURL} alt={alt} />
      </ModalWindow>
    </ModalBackdrop>
  );
};
