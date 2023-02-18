import React, { useState, useEffect } from "react";
import pattern from "./pattern.svg";
import dice from "./icon-dice.svg";
import mobpatt from "./pattern-divider-mobile.svg";

const Quote = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const url = "https://api.adviceslip.com/advice";
  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.slip);
    };
    fetchData(url);
  }, [count]);
  return (
    <>
      <section className="section1">
        <div className="section2">
          <p className="num">ADVICE # {data.id}</p>
          <h5>"{data.advice}"</h5>
          <img src={pattern} alt="pattern-divider" className="divider1" />
          <img src={mobpatt} alt="pattern-divider" className="divider2" />
          <br />
          <button onClick={() => setCount(count + 1)}>
            <img className="dice" src={dice} alt="dice"></img>
          </button>
        </div>
      </section>
    </>
  );
};

export default Quote;
