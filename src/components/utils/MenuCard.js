export default function MenuCard(props) {
  return (
    <article className="menu-card">
      <img src={props.image} alt={props.name}></img>
      <div className="menu-card-content">
        <div className="flex space-between mb-20 w-100">
          <h4>{props.name}</h4>
          <span>{props.price}</span>
        </div>

        <p>{props.description}</p>
      </div>
    </article>
  );
}
