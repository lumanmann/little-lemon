import Food from "../../assets/images/food.jpg";
import Chef from "../../assets/images/Mario-Adrian-1.jpg";

const About = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content flex">
          <div>
            <h2 className="title primary about-title">Little Lemon</h2>
            <h3 className="subtitle primary mb-28">Chicago</h3>
            <p className="about-text mb-36 me-36">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            </p>
          </div>
          <div className="about-images">
            <img
              className="about-img-2"
              src={Chef}
              alt="Little Lemon Chef"
            ></img>
            <img
              className="about-img-1"
              src={Food}
              alt="Little Lemon Food"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
