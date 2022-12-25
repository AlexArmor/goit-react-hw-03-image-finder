import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  previewURL,
  largeImageURL,
  onImageClick,
  alt,
}) => {
  return (
    <Item onClick={() => onImageClick(largeImageURL)}>
      <Image src={previewURL} alt={alt} />
    </Item>
  );
};
