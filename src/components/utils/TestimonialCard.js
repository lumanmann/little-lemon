import "@material-design-icons/font/filled.css";

export default function TestimonialCard(props) {
  return (
    <section className="testimonial-card">
      <div className="flex space-evenly mb-16">
        <span class="material-icons star">star</span>
        <span class="material-icons star">star</span>
        <span class="material-icons star">star</span>
        <span class="material-icons star">star</span>
        <span class="material-icons star">star</span>
      </div>
      <div className="flex mb-16 testimonial-ppl">
        <img src={props.image} alt={props.name} className="testimonial-photo me-36"></img>
        <h4>{props.name}</h4>
      </div>
      <p className="testimonial-card-content">{props.content}</p>
    </section>
  );
}
