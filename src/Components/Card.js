import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  const cardEl = props.cardEl;
  let desc = cardEl.description.substring(0, 100);
  let likedCourse = props.likedCourse;
  let setLikedCourse = props.setLikedCourse;

  function handleFavouriteCourse(id ) {
    if (likedCourse.includes(id)) {
      const updatedCourse = likedCourse.filter(prevId => prevId !== id)
      setLikedCourse(updatedCourse);
      toast.warning("Remove Successfully");
    }
    else {
      setLikedCourse([...likedCourse, id]);
      toast.success(`Added Succesfully`);
    }
  }

  return (
    <div
      className={`flex flex-col w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden`}
    >
      <div className="relative">
        <img src={cardEl.image.url} alt={cardEl.image.alt} />
        <button
          onClick={() => handleFavouriteCourse(cardEl.id)}
          className={`w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center`}
        >
          {likedCourse.includes(cardEl.id) ? (
            <FcLike fontSize="1.75rem"></FcLike>
          ) : (
            <FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>
          )}
        </button>
      </div>
      <div className="p-4">
        <h1 className={`text-white font-semibold text-lg leading-6`}>
          {cardEl.title}
        </h1>
        <p className={`mt-2 text-white`}>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
