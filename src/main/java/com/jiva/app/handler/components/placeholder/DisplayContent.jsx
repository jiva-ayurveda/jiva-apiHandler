export default function DisplayContent(props) {
  const { valid1, content, children } = props;

  return valid1 ? children : content;
}

// Set default props
DisplayContent.defaultProps = {
  valid1: false,
  content: null,
};
