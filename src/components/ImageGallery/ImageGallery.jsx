import { ImageGalleryItem } from '../ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            previewURL={webformatURL}
            largeImageURL={largeImageURL}
            onImageClick={onImageClick}
            alt={tags}
          />
        );
      })}
    </ImageList>
  );
};
