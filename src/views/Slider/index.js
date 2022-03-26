import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import axios from "axios";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", color: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", color: "gray" }}
      onClick={onClick}
    />
  );
}

export default function Slider1() {
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    lazyLoad: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div className="container mt-4">
        <div className="row">
          <Slider {...settings}>
            {products.map((product, index) => {
              return (
                <div className=" col-lg-3 col-md-6 mb-4 me-3" key={index}>
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
          </Slider>
        </div>
      </div>
    </Fragment>
  );
}
