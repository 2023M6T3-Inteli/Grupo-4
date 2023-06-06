import { AiFillStar } from "react-icons/ai";

import styles from "./StarRating.module.scss";
import { useEffect, useState } from "react";
import contentService from "../../services/contentService";
import userService from "../../services/userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const getRating = async () => {
      const response = await contentService.getRating(props.contentId);
      
      if (response.data.length > 0) {
        setRating(response.data[0].rating);
      } else {
        setRating(0);
      }

      console.log(response)
    };

    getRating();
  }, []);

  const rateHandler = async (index) => {
    const response = await contentService
      .rate(props.contentId, index)
      .then(setRating(index))
      .then(toast.success("Rating updated!"));
  };

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, index) => {
        index += 1;

        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? styles.on : styles.off}
            onClick={() => rateHandler(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
