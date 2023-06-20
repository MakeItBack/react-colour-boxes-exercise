import "../css/box.css";

function Box(props) {
  return (
    <div
      className="Box"
      id={props.id}
      style={{ backgroundColor: props.colour }}
      onMouseOver={props.clickFunc}>
      <p>{props.id}</p>
    </div>
  );
}

export default Box;
