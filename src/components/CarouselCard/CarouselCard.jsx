import { FiChevronRight } from "react-icons/fi";
import "./CarouselCard.scss";

const CarouselCard = (props) => {
  return (
    <div className="app__carousel-card">
      <div className="app__carousel-card-inner">
        {props.children}
        <h3 className="app__carousel-card-title">{props.title}</h3>
      </div>
      <a href="/" className="app__carousel-card-action">
        Start here <FiChevronRight />
      </a>
    </div>
  );
};

export default CarouselCard;
