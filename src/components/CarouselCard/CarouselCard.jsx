import { FiChevronRight } from "react-icons/fi";
import "./CarouselCard.scss";

const CarouselCard = (props) => (
  <div className="app__carousel-card">
    <div className="app__carousel-card-line" />
    <div className="app__carousel-card-container">
      <div className="app__carousel-card-inner">
        {props.children}
        <h3 className="app__carousel-card-title">{props.title}</h3>
      </div>
      <a href="/" className="app__carousel-card-action">
        Start here <FiChevronRight />
      </a>
    </div>
  </div>
);

export default CarouselCard;
