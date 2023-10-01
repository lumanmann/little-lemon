import GreekSalad from "../../assets/images/greek-salad.jpg";
import Bruschetta from '../../assets/images/bruchetta.svg';
import LemonDessert from "../../assets/images/lemon-dessert.jpg";
import MenuCard from "../utils/MenuCard";

const Specials = () => {
  return (
    <section className="specials">
      <div class="container">
        <div class="flex space-between mb-36 align-center">
          <h2 className="section-title ">Specials</h2>
          <button className="button specials-btn">Online Menu</button>
        </div>

        <div className="specials-cards">
          <MenuCard
            image={GreekSalad}
            name="Greek Salad"
            price="$12.99"
            description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                   Dressed with salt, hot pepper, and olive oil."
          />
          <MenuCard
            image={Bruschetta}
            name="Bruschetta"
            price="$16.99"
            description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                   salt and olive oil."
          />
          <MenuCard
            image={LemonDessert}
            name="Lemon Dessert"
            price="$8.50"
            description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                   and lemon zest."
          />
        </div>
      </div>
    </section>
  );
};

export default Specials;
