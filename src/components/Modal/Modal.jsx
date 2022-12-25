import { ModalBackdrop, ModalWindow } from './Modal.styled';

export const Modal = ({ largeImageURL, largeImageOpen, alt }) => {
  return (
    <ModalBackdrop>
      <ModalWindow>
        <img onClick={largeImageOpen} src={largeImageURL} alt={alt} />
      </ModalWindow>
    </ModalBackdrop>
  );
};
