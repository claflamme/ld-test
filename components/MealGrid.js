import PropTypes from "prop-types";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FormattedMessage, injectIntl } from "react-intl";

function MealGrid(props) {
  if (!props.meals || props.meals.length < 1) {
    return (
      <Row className="text-center">
        <Col>
          <p className="lead">
            <FormattedMessage id="category.notFound" />
          </p>
          <p>
            <Link href="/">
              <a>
                <FormattedMessage id="category.back" />
              </a>
            </Link>
          </p>
        </Col>
      </Row>
    );
  }

  return (
    <Row xs={1} md={2} lg={3}>
      {props.meals.map(meal => {
        return (
          <Col key={meal.idMeal} className="mb-gutter">
            <Card className="card-meal shadow border-0 h-100">
              <Card.Img
                src={meal.strMealThumb}
                alt={props.intl.formatMessage(
                  { id: "category.imgAlt" },
                  { name: meal.strMeal }
                )}
                variant="top"
              />
              <Card.Body>
                <Link href={`/meals/${meal.idMeal}`}>
                  <a className="h3 m-0 text-dark text-decoration-none stretched-link">
                    {meal.strMeal}
                  </a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

MealGrid.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string.isRequired,
      strMeal: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired
    })
  )
};

export default injectIntl(MealGrid);
