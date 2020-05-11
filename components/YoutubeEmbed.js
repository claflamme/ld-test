import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

function YoutubeEmbed(props) {
  if (!props.url) return null;

  const youtubeUrl = new URL(props.url);
  const youtubeId = youtubeUrl.searchParams.get("v");

  return (
    <div className="embed-responsive embed-responsive-16by9 mb-5 shadow">
      <iframe
        title={<FormattedMessage id="meal.videoTitle" />}
        className="embed-responsive-item"
        width="100%"
        height="auto"
        src={`https://youtube.com/embed/${youtubeId}?rel=0`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

YoutubeEmbed.propTypes = {
  url: PropTypes.string
};

export default YoutubeEmbed;
