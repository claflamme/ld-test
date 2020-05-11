import Head from "next/head";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { FormattedMessage } from "react-intl";

import { get } from "../utils/api";

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>Categories</title>
      </Head>
      <header>
        <h1 className="display-2 text-center mt-5">
          <FormattedMessage id="home.title" />
        </h1>
      </header>
      <main>
        <Container>
          <Row>
            <Col xl={{ span: 6, offset: 3 }}>
              <ListGroup className="text-center shadow my-5">
                {props.categories.map(category => {
                  return (
                    <Link
                      key={category.strCategory}
                      passHref
                      href={`/categories/${category.strCategory.toLowerCase()}`}
                    >
                      <ListGroup.Item action className="font-weight-bold">
                        <div className="h2 font-italic font-weight-bolder text-truncate">
                          {category.strCategory}
                        </div>
                      </ListGroup.Item>
                    </Link>
                  );
                })}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await get("v1/1/categories.php");
  const data = await res.json();

  return {
    props: { categories: data.categories }
  };
}
