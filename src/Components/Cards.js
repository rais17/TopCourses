import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const data = props.data;
  const category = props.category;

  function getCourses() {
    
    if (category === "All") {
        let cardConatiner = [];
        Object.values(data).forEach((element) => {
        element.forEach((elementData) => {
        cardConatiner.push(elementData);
        });
      });
      return cardConatiner;
      }
    else {
        return data[category];
      }
  }

  return (
    <div
      className={`w-11/12 max-w-[1200px] mx-auto flex flex-row flex-wrap gap-4 justify-center`}
    >
      {getCourses().map((cardEl) => {
        return (
          <Card
            key={cardEl.id}
            cardEl={cardEl}
            likedCourse={props.likedCourse}
            setLikedCourse={props.setLikedCourse}
          ></Card>
        );
      })}
    </div>
  );
};
export default Cards;
