import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <Fragment>
      <div className="row justify-content-center my-4">
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </div>
    </Fragment>
  );
};
export default Loading;
