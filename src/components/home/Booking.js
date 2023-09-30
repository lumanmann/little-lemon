import Restaurant from "../../assets/images/restaurant.jpg";

const Booking = () => {
  return (
    <section className="booking">
      <div className="container">
        <div className="booking-content flex space-between">
          <div> 
        <h1 className="secondary-title">Little Lemon</h1>
        <h2 className="subtitle white mb-28">Chicago</h2>
        <p className="mb-36">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="action-button mb-36">
          Reserve a table
        </button>
        </div>
        <img src={Restaurant} alt="restaurant"></img>
        </div>
      </div>
    </section>
  );
};

export default Booking;
