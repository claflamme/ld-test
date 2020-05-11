import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Instructions(props) {
  const steps = props.instructions.split("\r\n").filter(chunk => !!chunk);

  return (
    <>
      {steps.map((chunk, i) => {
        if (!chunk) return null;
        return (
          <div key={i}>
            <p>{chunk}</p>
          </div>
        );
      })}
    </>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.string
};

Instructions.defaultProps = {
  instructions: ""
};

export default Instructions;
