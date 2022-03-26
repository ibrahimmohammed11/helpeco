import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Categories from "../../components/Categories";
import FilteredProduct from "../../components/FilteredProduct";
import Loading from "../../components/Skelton";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await axios("https://fakestoreapi.com/products");
      setProducts(await result.data);
      setFilter(await result.data);
      setLoading(false);
    };

    fetchData();
  }, []);
  const handleFilter = (category) => {
    if (category === "All") {
      setFilter(products);
      return;
    } else {
      const newItems = products.filter((item) => item.category === category);
      setFilter(newItems);
    }
  };
  return (
    <Fragment>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Categories handleFilter={handleFilter} />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <FilteredProduct filterProducts={filterProducts} />
        )}
      </div>
    </Fragment>
  );
}
