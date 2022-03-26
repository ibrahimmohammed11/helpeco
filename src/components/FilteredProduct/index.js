import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const FilteredProduct = (props) => {
  let { filterProducts } = props;
  return (
    <Fragment>
      <div className="row justify-content-center my-4">
        {filterProducts.map((product, index) => {
          return (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default FilteredProduct;
