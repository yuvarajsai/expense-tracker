import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  //whitespace after card is important, or else classes get mixed up into one word

  return <div className={classes}>{props.children}</div>;
}

export default Card;
