import { ImageGalleryItem } from '../ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            previewURL={webformatURL}
            largeImageURL={largeImageURL}
            alt={tags}
          />
        );
      })}
    </ul>
  );
};
