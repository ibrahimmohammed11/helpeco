import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await axios("https://fakestoreapi.com/products");
      setProducts(await result.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="container mt-4">
        <Swiper spaceBetween={10} slidesPerView={2}>
          <div className="bg-danger row">
            {products.map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" col-lg-3 col-md-6 mb-4 me-3">
                    <div
                      className="card  me-4 mb-4 h-100 text-center p-4"
                      key={product.id}
                    >
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
                        <p className="card-text lead fw-bold">
                          ${product.price}
                        </p>
                        <NavLink
                          to={`/products/${product.id}`}
                          className="btn btn-outline-dark"
                        >
                          Buy Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </Fragment>
  );
}
