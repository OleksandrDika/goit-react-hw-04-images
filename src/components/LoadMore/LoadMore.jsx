import React from 'react';
import { ButtonBox, ButtonLoadMore } from './LoadMore.styled';

export const LoadMore = ({ handleClick }) => {
  return (
    <ButtonBox>
      <ButtonLoadMore onClick={handleClick} type="button">
        Load more
      </ButtonLoadMore>
    </ButtonBox>
  );
};
