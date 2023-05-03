import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { filterData, apiUrl } from "./data";
import Spinner from "./Components/Spinner";

const App = () => {
  const [data, setData] = useState([]);
  let [likedCourse, setLikedCourse] = useState([]);
  let [loading, setLoading] = useState(true);
  let [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      toast.error("Data Not Found");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className={`min-h-screen w-screen flex flex-col relative bg-bgDark2`}>
      <Navbar></Navbar>

      <div className={`w-full bg-bgDark2 pt-4 space-y-4`}>
        <Filter
          filterData={filterData}
          setCategory={setCategory}
          category={category}
        ></Filter>

        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Cards
            data={data}
            likedCourse={likedCourse}
            setLikedCourse={setLikedCourse}
            category={category}
          ></Cards>
        )}
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
