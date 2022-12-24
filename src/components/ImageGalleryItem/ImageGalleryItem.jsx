import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ previewURL, alt }) => {
  return (
    <li>
      <Image src={previewURL} alt={alt} />
    </li>
  );
};
