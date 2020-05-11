import Link from "next/link";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import { FormattedMessage } from "react-intl";

function TopNav(props) {
  if (!props.breadcrumbs) return null;

  return (
    <div className="bg-white sticky-top shadow-sm border-bottom">
      <Container fluid="md">
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <Button
              size="sm"
              className="px-3 mt-3 sr-only sr-only-focusable"
              href={props.skipTo}
            >
              <FormattedMessage id="nav.skip" />
            </Button>
            <Breadcrumb
              aria-label="breadcrumbs"
              listProps={{
                className:
                  "m-0 px-0 rounded-0 bg-white d-block overflow-hidden text-truncate text-nowrap"
              }}
            >
              {props.breadcrumbs.map((breadcrumb, i) => {
                const breadcrumbProps = {
                  active: breadcrumb.active,
                  className: "text-capitalize d-inline bg-white"
                };

                if (!breadcrumb.href) {
                  return (
                    <Breadcrumb.Item
                      key={breadcrumb.label}
                      aria-current="page"
                      {...breadcrumbProps}
                    >
                      {breadcrumb.label}
                    </Breadcrumb.Item>
                  );
                }

                return (
                  <Link key={breadcrumb.label} href={breadcrumb.href} passHref>
                    <Breadcrumb.Item {...breadcrumbProps}>
                      {breadcrumb.label}
                    </Breadcrumb.Item>
                  </Link>
                );
              })}
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

TopNav.propTypes = {
  skipTo: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      active: PropTypes.bool
    })
  )
};

export default TopNav;
