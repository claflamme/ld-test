import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FormattedMessage } from "react-intl";

function IngredientsList(props) {
  if (props.ingredients.length < 1) {
    return (
      <p className="lead text-center">
        <FormattedMessage id="meal.noIngredients" />
      </p>
    );
  }

  return (
    <Card className="shadow">
      <ListGroup variant="flush">
        {props.ingredients.map((ingredient, i) => {
          return (
            <ListGroup.Item key={`${ingredient.name}-${i}`}>
              {`${ingredient.measure} ${ingredient.name}`}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
}

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      measure: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  )
};

IngredientsList.defaultProps = {
  ingredients: []
};

export default IngredientsList;
