import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ pictures }) => {
  return (
    <Gallery>
      {pictures.map(item => {
        return <ImageGalleryItem key={item.id} item={item} />;
      })}
    </Gallery>
  );
};
