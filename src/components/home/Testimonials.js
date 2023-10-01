import Card from "../utils/TestimonialCard";
import Noah from "../../assets/images/Mario-Adrian-1.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title  mb-36">Testimonials</h2>
        <ul className="testimonial-cards">
          <li>
            <Card image={Noah} name="Noah asdsdsdsad" content="Best food I ever have!" />
          </li>
          <li>
            <Card image={Noah} name="Noah" content="This place is kind of a hidden gem. We dropped by for our anniversary dinner on a weekday. The restaurant is inside the hotel and includes complimentary underground parking, you just drive by the door where there is a sign with a phone number to text and someone opens the garage door for you.
The restaurant was quiet that day. The dining area is quite large and looks nice and clean. The menu is small, but we loved everything we had which included our drinks, tomato soup, steak as main dish and a slice of cheesecake as dessert.
Last but not least, our bartender / waiter was amazing, we loved his high standards, quality of service and going the extra mile to make our special night more memorable." />
          </li>
          <li>
            <Card image={Noah} name="Noah" content="Good service and food. Friday morning they have a special menu." />
          </li>
          <li>
            <Card image={Noah} name="Noah" content="Good service and food. Friday morning they have a special menu." />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
