import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onLoadMoreClick }) => {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMoreClick}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = { onLoadMoreClick: PropTypes.func.isRequired };
