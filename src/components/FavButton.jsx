import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

const FavButton = (props) => {
  const { onClick } = props;
  return (
    <SitoContainer>
      <button onClick={onClick}>{">"}</button>
    </SitoContainer>
  );
};

FavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FavButton;