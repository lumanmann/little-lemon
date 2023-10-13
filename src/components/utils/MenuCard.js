import "@material-design-icons/font/outlined.css";

export default function MenuCard(props) {
  return (
    <article className="menu-card">
      <img src={props.image} alt={props.name}></img>
      <div className="menu-card-content">
        <div >
          <div className="flex space-between align-center mb-16">
            <h4>{props.name}</h4>
            <span className="menu-price">{props.price}</span>
          </div>

          <p className="primary">{props.description}</p>
        </div>
        <button className="menu-button">
          <p>Order a delivery</p>
          <span className="material-icons-outlined">shopping_cart</span>
        </button>
      </div>
    </article>
  );
}
