import "./SecondaryFooter.css"
import trophy from "./../../assets/images/trophy 1.png";
import guarantee from "./../../assets/images/guarantee.png";
import shipping from "./../../assets/images/Vector (2).png";
import suporte from "./../../assets/images/Vector (3).png";

function SecondaryFooter() {
  return(
    <span className=" row secondaryFooter text-center">
      <div className="col-3">
          <img src={trophy} alt="trophy" />
          <span>High Quality</span>
          <p>crafted from top materials</p>
      </div>
      <div className="col-3">
          <img src={guarantee} alt="guarantee" />
          <span>Warranty Protection</span>
          <p>Over 2 years</p>
      </div>
      <div className="col-3">
          <img src={shipping} alt="Shipping" />
          <span>Free Shipping</span>
          <p>Order over 150 $</p>
      </div>
      <div className="col-3">
          <img src={suporte} alt="suporte" />
          <span>24 / 7 Support</span>
          <p>Dedicated support</p>
      </div>
    </span>
  );
}

export default SecondaryFooter;