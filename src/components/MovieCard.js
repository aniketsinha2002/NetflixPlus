import React from "react";
import { Link } from "react-router-dom";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, id }) => {
  return (
    posterPath && (
      <div className="w-20 md:w-48 cursor-pointer">
        <Link to={`/browse/${id}`}>
          <img
            className="rounded-xl"
            alt="Movie Card"
            src={IMG_CDN + posterPath}
          />
        </Link>
      </div>
    )
  );
};

export default MovieCard;
