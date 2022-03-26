import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

export default function Categories(props) {
  let { handleFilter } = props;
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://fakestoreapi.com/products/categories"
      );
      setCats(["All", ...result.data]);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="btn-container">
        {cats?.map((category, index) => {
          return (
            <button
              type="button"
              className="btn btn-outline-dark me-2"
              key={index}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </Fragment>
  );
}
