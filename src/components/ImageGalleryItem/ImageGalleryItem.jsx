import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ previewURL, alt }) => {
  return (
    <Item>
      <Image src={previewURL} alt={alt} />
    </Item>
  );
};
