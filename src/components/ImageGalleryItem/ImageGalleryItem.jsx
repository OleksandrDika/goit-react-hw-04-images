import { Modal } from 'components/Modal/Modal';
import React, { useState } from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <GalleryItem>
        <Image onClick={openModal} src={item.webformatURL} alt="" />
      </GalleryItem>
      {isOpen && (
        <Modal
          image={item.largeImageURL}
          isOpen={isOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
