import "./SecondaryFooter.css"
import trophy from "./../../assets/images/trophy 1.png";
import guarantee from "./../../assets/images/guarantee.png";
import shipping from "./../../assets/images/Vector (2).png";
import suporte from "./../../assets/images/Vector (3).png";

function SecondaryFooter() {
  return(
    <span className="row secondaryFooter text-center">
      <div className="col-3 warranty-info">
        <div className="image-column">
          <img src={trophy} alt="trophy" />
        </div>
        <div className="text-column">
          <span>High Quality</span>
          <p>crafted from top materials</p>
        </div>
      </div>

      <div className="col-3 warranty-info">
        <div className="image-column">
          <img src={guarantee} alt="guarantee" />
        </div>
        <div className="text-column">
          <span>Warranty Protection</span>
          <p>Over 2 years</p>
        </div>
      </div>

      <div className="col-3 warranty-info">
        <div className="image-column">
          <img src={shipping} alt="Shipping" />
        </div>
        <div className="text-column">
          <span>Free Shipping</span>
          <p>Order over 150 $</p>
        </div>
      </div>

      <div className="col-3 warranty-info">
        <div className="image-column">
          <img src={suporte} alt="suporte" />
        </div>
        <div className="text-column">
          <span>24 / 7 Support</span>
          <p>Dedicated support</p>
        </div>
      </div>
    </span>
  );
}

export default SecondaryFooter;