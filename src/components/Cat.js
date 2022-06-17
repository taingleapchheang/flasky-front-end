import "./Cat.css";
import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

const Cat = (props) => {
  // const [catAge, setCatAge] = useState(props.age); //props.age
  const [catSaying, setCatSaying] = useState(props.saying); //props.saying

  const catAge = props.age;
  const catName = props.name;
  const catColor = props.color;

  const changeCatSaying = (event) => {
    let newSaying = event.target.value;
    if (newSaying === "") {
      newSaying = "Hello!";
    }
    setCatSaying(newSaying);
  };

  return (
    <div className="cat">
      <h3> {catName} </h3>
      <p> {catSaying} </p>
      <p>
        Change saying: <input type="text" onChange={changeCatSaying} />
      </p>
      <p>
        {catAge}{" "}
        <button
          onClick={() => {
            props.setCatAgeCallBack(props.id);
          }}
        >
          🐾
        </button>
        <button
          onClick={() => {
            props.deleteCatCallback(props.id);
          }}
        >
          Delete 🐾
        </button>
      </p>
      <p> {catColor} </p>
    </div>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  setCatAgeCallBack: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};

export default Cat;
