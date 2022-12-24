export const Button = ({ onLoadMoreClick }) => {
  return (
    <button type="button" onClick={onLoadMoreClick()}>
      Load more
    </button>
  );
};
