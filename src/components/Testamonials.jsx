import { useState } from "react";
import TestamonialsData from "./TestamonialsData";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "../styles/style.css";

const Testamonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    // setCurrentIndex(
    //   currentIndex > 0
    //     ? (currentIndex + 1) % TestamonialsData.length
    //     : currentIndex
    // );
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);
    console.log(currentIndex);
  };
  const handleClickNext = () => {
    // setCurrentIndex(
    //   currentIndex < 9
    //     ? (currentIndex + TestamonialsData.length - 1) % TestamonialsData.length
    //     : currentIndex
    // );
    setCurrentIndex(currentIndex < 9 ? currentIndex + 1 : currentIndex);
  };

  return (
    <div className="container">
      <section className="qoute-section">
        <p className="quote">{TestamonialsData[currentIndex].quote}</p>
        <p className="author">
          <strong> - {TestamonialsData[currentIndex].author}</strong>
        </p>
      </section>
      <section className="nav">
        {currentIndex > 0 ? (
          <button onClick={handleClickPrev} className="btn ">
            <FaChevronLeft /> Prev
          </button>
        ) : (
          <button onClick={handleClickPrev} className="btn btn-not-allowed">
            <FaChevronLeft /> Prev
          </button>
        )}
        {currentIndex < TestamonialsData.length - 1 ? (
          <button onClick={(e) => handleClickNext(e)} className="btn">
            Next <FaChevronRight />
          </button>
        ) : (
          <button
            onClick={(e) => handleClickNext(e)}
            className="btn btn-not-allowed"
          >
            Next <FaChevronRight />
          </button>
        )}
      </section>
    </div>
  );
};
export default Testamonials;
