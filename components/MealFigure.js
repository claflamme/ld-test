import PropTypes from "prop-types";
import Figure from "react-bootstrap/Figure";
import { FormattedMessage } from "react-intl";

function MealFigure(props) {
  if (!props.img) {
    return null;
  }

  let url;

  if (props.href) {
    url = new URL(props.href);
  }

  return (
    <Figure className="w-100 m-0 position-relative">
      <Figure.Image
        src={props.img}
        alt={props.alt}
        className="w-100 m-0 shadow"
      />
      {props.href && (
        <Figure.Caption className="meal-img-caption">
          <a href={props.href} target="_blank">
            <FormattedMessage id="meal.source" values={{ url: url.host }} />
          </a>
        </Figure.Caption>
      )}
    </Figure>
  );
}

MealFigure.propTypes = {
  href: PropTypes.string,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default MealFigure;
