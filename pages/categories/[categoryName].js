import Head from "next/head";
import { withRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage, injectIntl } from "react-intl";

import { get } from "../../utils/api";
import TopNav from "../../components/TopNav";
import MealGrid from "../../components/MealGrid";

function Category(props, context) {
  const category = props.router.query.categoryName;
  const breadcrumbs = [
    { label: props.intl.formatMessage({ id: "home.title" }), href: "/" },
    { label: category, active: true }
  ];

  return (
    <div className="pb-5">
      <Head>
        <title>
          {props.intl.formatMessage({ id: "category.title" }, { category })}
        </title>
      </Head>
      <TopNav breadcrumbs={breadcrumbs} skipTo="#section-meals" />
      <header>
        <Container>
          <Row>
            <Col lg={{ span: 10, offset: 1 }}>
              <h1 className="my-5 text-center display-3">
                <FormattedMessage id="category.title" values={{ category }} />
              </h1>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <section id="section-meals">
          <Container>
            <Row>
              <Col lg={{ span: 10, offset: 1 }}>
                <MealGrid meals={props.meals} />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
}

export default withRouter(injectIntl(Category));

export async function getServerSideProps({ params }) {
  const res = await get(`v1/1/filter.php?c=${params.categoryName}`);
  const data = await res.json();

  return {
    props: {
      meals: data.meals
    }
  };
}
