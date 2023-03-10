import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  closeModal = () => this.setState({ isOpen: false });

  openModal = () => this.setState({ isOpen: true });

  render() {
    return (
      <div>
        <GalleryItem>
          <Image
            onClick={this.openModal}
            src={this.props.item.webformatURL}
            alt=""
          />
        </GalleryItem>
        {this.state.isOpen && (
          <Modal
            image={this.props.item.largeImageURL}
            isOpen={this.state.isOpen}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}
