import Head from "next/head";
import { withRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { FormattedMessage, injectIntl } from "react-intl";

import { get } from "../../utils/api";
import formatMealResponse from "../../utils/formatMealResponse";
import TopNav from "../../components/TopNav";
import MealFigure from "../../components/MealFigure";
import IngredientsList from "../../components/IngredientsList";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import Instructions from "../../components/Instructions";

function Category(props) {
  const categorySlug = props.meal.strCategory.toLowerCase();
  const breadcrumbs = [
    { label: props.intl.formatMessage({ id: "home.title" }), href: "/" },
    { label: props.meal.strCategory, href: `/categories/${categorySlug}` },
    { label: props.meal.strMeal, active: true }
  ];

  return (
    <div>
      <Head>
        <title>{props.meal.strMeal}</title>
      </Head>
      <TopNav breadcrumbs={breadcrumbs} skipTo="#section-ingredients" />
      <main>
        <header>
          <Jumbotron className="m-0 bg-transparent rounded-0 font-weight-bold">
            <Container>
              <Row>
                <Col lg={{ span: 10, offset: 1 }} className="text-center">
                  <h1 className="display-1 font-weight-bolder">
                    {props.meal.strMeal}
                  </h1>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </header>
        <article>
          <section id="section-image" className="bg-white py-md-5">
            <Container fluid="md">
              <Row>
                <Col lg={{ span: 8, offset: 2 }} className="px-0 px-md-col">
                  <MealFigure
                    img={props.meal.strMealThumb}
                    href={props.meal.strSource}
                    alt={props.intl.formatMessage(
                      { id: "meal.imgAlt" },
                      { name: props.meal.strMeal }
                    )}
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section id="section-ingredients" className="py-5">
            <Container fluid="md">
              <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                  <h2 className="display-4 text-center mb-5">
                    <FormattedMessage id="meal.ingredients" />
                  </h2>
                  <div className="text-center">
                    <Button
                      className="px-3 my-3 sr-only sr-only-focusable"
                      href="#section-instructions"
                    >
                      <FormattedMessage id="meal.skipIngredients" />
                    </Button>
                  </div>
                  <IngredientsList ingredients={props.meal.ingredients} />
                </Col>
              </Row>
            </Container>
          </section>
          <section id="section-instructions" className="bg-white py-5">
            <Container fluid="md">
              <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                  <h2 className="display-4 text-center mb-5">
                    <FormattedMessage id="meal.instructions" />
                  </h2>
                  <YoutubeEmbed url={props.meal.strYoutube} />
                  <Instructions instructions={props.meal.strInstructions} />
                </Col>
              </Row>
            </Container>
          </section>
        </article>
      </main>
    </div>
  );
}

export default withRouter(injectIntl(Category));

export async function getServerSideProps({ params }) {
  const res = await get(`v1/1/lookup.php?i=${params.mealId}`);
  const data = await res.json();

  return {
    props: {
      meal: formatMealResponse(data.meals)[0]
    }
  };
}
