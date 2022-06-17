import "./CatList.css";
import Cat from "./Cat.js";
import PropTypes from "prop-types";

const CatList = ({ catData, setCatAgeCallBack, deleteCatCallback }) => {
  // const catComponents = [];

  // for (const cat of catData) {
  //   catComponents.push(
  //     <Cat
  //       key={cat.id}
  //       id={cat.id}
  //       name={cat.name}
  //       saying={cat.saying}
  //       age={cat.age}
  //       color={cat.color}
  //     />
  //   );
  // }

  const catComponents = catData.map((cat) => (
    <Cat
      key={cat.id}
      id={cat.id}
      name={cat.name}
      saying={cat.saying}
      age={cat.age}
      color={cat.color}
      setCatAgeCallBack={setCatAgeCallBack}
      deleteCatCallback={deleteCatCallback}
    />
  ));

  return (
    <div>
      <h2 className="cat-list"> Super Amazing List of Cutie Cats </h2>;
      {catComponents};
    </div>
  );
};

CatList.propTypes = {
  catData: PropTypes.array.isRequired,
  setCatAgeCallBack: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};

export default CatList;
