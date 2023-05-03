import React from "react";

const Filter = (props) => {
  const filterData = props.filterData;
  let setCategory = props.setCategory;
  let category = props.category;
  function handleFiltering(title) {
    setCategory(title);
  }
  return (
    <div className={`flex gap-4 justify-center`}>
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
            onClick={() => handleFiltering(data.title)}
            className={`font-sans text-lg font-medium text-white bg-opacity-40 bg-black py-1 px-2 rounded-md border transition-all duration-200
            ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }`}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
